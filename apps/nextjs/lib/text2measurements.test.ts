import { text2measurements } from './text2measurements';
import { Measurement } from 'libs/text-2-measurements/src/lib/measurementSchema';

describe('text2measurements', () => {
  it('should return an array of Measurement objects for a valid input', async () => {
    const statement = 'I took 5 mg of NMN and slept for 8 hours';
    const localDateTime = '2023-06-01T09:00:00';
    
    const result = await text2measurements(statement, localDateTime);
    
    expect(Array.isArray(result)).toBe(true);
    expect(result.every(item => item.itemType === 'measurement')).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should throw an error for an empty input', async () => {
    const statement = '';
    const localDateTime = '2023-06-01T09:00:00';

    await expect(text2measurements(statement, localDateTime)).rejects.toThrow('No content in response');
  });

  // Add more test cases for edge cases, error scenarios, etc.
});