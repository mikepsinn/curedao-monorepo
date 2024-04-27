import { NextRequest, NextResponse } from 'next/server';
import { text2measurements } from "@/lib/text2measurements";

export function POST(request: NextRequest) {
  let { statement, localDateTime, text } = await request.json();
  statement = statement || text;

try {
  const measurements = await text2measurements(statement, localDateTime);
  // If you want to save them, uncomment await dfdaPOST('/v3/measurements', measurements, session?.user.id);
    return NextResponse.json({ success: true, measurements: measurements });
  } catch (error) {
    // Log and handle any errors encountered during the request to OpenAI
    console.error('Error sending request to OpenAI:', error);
    return NextResponse.json({ success: false, message: 'Error sending request to OpenAI' });
  }
}

export async function GET(req: NextRequest) {
  const urlParams = Object.fromEntries(new URL(req.url).searchParams);
  const statement = urlParams.statement as string;
  const localDateTime = urlParams.localDateTime as string | null | undefined;

  try {
    const measurements = await text2measurements(statement, localDateTime);
    // If you want to save them, uncomment await dfdaPOST('/v3/measurements', measurements, session?.user.id);
    return NextResponse.json({ success: true, measurements: measurements });
  } catch (error) {
    console.error('Error sending request to OpenAI:', error);
    return NextResponse.json({ success: false, message: 'Error sending request to OpenAI' });
  }
}
