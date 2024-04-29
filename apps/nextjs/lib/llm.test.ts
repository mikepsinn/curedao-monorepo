import { textCompletion } from './llm';

describe('textCompletion', () => {
  it('should return text when returnType is "text"', async () => {
    const promptText = 'What is the capital of France?';
    const result = await textCompletion(promptText, 'text');
    expect(typeof result).toBe('string');
    expect(result).toContain('Paris');
  });

  it('should return a JSON object when returnType is "json_object"', async () => {
    const promptText = 'Generate a simple JSON object with a "name" property';
    const result = await textCompletion(promptText, 'json_object');
    expect(typeof result).toBe('string');
    expect(JSON.parse(result)).toHaveProperty('name');
  });

  it('should throw an error if the response has no content', async () => {
    jest.spyOn(openai.chat, 'completions').mockResolvedValueOnce({
      choices: [{ message: { content: '' } }],
    } as any);
    await expect(textCompletion('test', 'text')).rejects.toThrow('No content in response');
  });
});