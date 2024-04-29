import { Measurement } from "@/types/models/Measurement";
import {textCompletion} from "@/lib/llm";

// Tests in conversation2measurements.test.ts

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export function conversation2MeasurementsPrompt(statement: string,
                                                localDateTime: string | null | undefined,
                                                previousStatements: string | null | undefined): string {


  if(!localDateTime) {
    const now = new Date();
    localDateTime = now.toISOString().slice(0, 19);
  }
  return `
You are a robot designed to collect diet, treatment, and symptom data from the user.

Immediately begin asking the user the following questions
- What did you eat today?
- What did you drink today?
- What treatments did you take today?
- Rate all your symptoms on a scale of 1 to 5.

Convert the responses to the following JSON format
[
\t{
\t\t"combinationOperation" : "SUM",
\t\t"startAt" : "{ISO_DATETIME_IN_UTC}",
\t\t"unitName" : "grams",
\t\t"value" : "5",
\t\t"variableCategoryName" : "Treatments",
\t\t"variableName" : "NMN",
\t\t"note" : "{MAYBE_THE_ORIGINAL_STATEMENT_FOR_REFERENCE}"
\t}
]

That would be the result if they said, "I took 5 grams of NMN."

For ratings, use the unit \`/5\`.  The \`unitName\` should never be an empty string.

Also, after asking each question and getting a response, check if there's anything else the user want to add to the first question response. For instance, after getting a response to "What did you eat today?", your next question should be, "Did you eat anything else today?".  If they respond in the negative, move on to the next question.

Your responses should be in JSON format and have 2 properties called data and message.  The message property should contain the message to the user.  The data property should contain an array of measurement objects created from the last user response.


${previousStatements ? `The following are the previous statements:
${previousStatements}` : ''}

// Use the current local datetime ${localDateTime} to determine startDateLocal. If specified, also determine startTimeLocal, endDateLocal, and endTimeLocal or just leave them null.\`\`\`
The following is a user request:
"""
${statement}
"""
The following is the user request translated into a JSON object with 2 spaces of indentation and no properties with the value undefined:
`;
}

export async function conversation2measurements(statement: string,
                                        localDateTime: string | null | undefined,
                                                previousStatements: string | null | undefined): Promise<Measurement[]> {
  let promptText = conversation2MeasurementsPrompt(statement, localDateTime, previousStatements);
  const maxTokenLength = 1500;
  if(promptText.length > maxTokenLength) {
    // truncate to less than 1500 characters
    promptText = promptText.slice(0, maxTokenLength);

  }
  const str = await textCompletion(promptText, "json_object");
  const measurements: Measurement[] = [];
  let jsonArray = JSON.parse(str);
  jsonArray.measurements.forEach((measurement: Measurement) => {
    measurements.push(measurement);
  });
  return measurements;
}
