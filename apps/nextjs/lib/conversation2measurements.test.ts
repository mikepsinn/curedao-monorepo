import { conversation2MeasurementsPrompt, conversation2measurements } from './conversation2measurements';
import { Measurement } from '@/types/models/Measurement';

describe('conversation2MeasurementsPrompt', () => {
  it('should generate a valid prompt', () => {
    const statement = 'I took 5mg of melatonin';
    const localDateTime = '2023-06-01T12:00:00';
    const prompt = conversation2MeasurementsPrompt(statement, localDateTime, null);
    expect(prompt).toContain(statement);
    expect(prompt).toContain(localDateTime);
  });

  it('should include previous statements in the prompt', () => {
    const statement = 'I took 5mg of melatonin';  
    const previousStatements = 'I also took 400mg of magnesium';
    const prompt = conversation2MeasurementsPrompt(statement, null, previousStatements);
    expect(prompt).toContain(previousStatements);
  });
});

describe('conversation2measurements', () => {
  it('should convert a statement to measurements', async () => {
    const statement = 'I took 5mg of melatonin';
    const measurements = await conversation2measurements(statement, null, null);
    expect(measurements).toHaveLength(1);
    expect(measurements[0]).toMatchObject({
      variableName: 'Melatonin',
      value: 5,
      unitName: 'Milligrams',
      variableCategoryName: 'Treatments',
    });
  });

  it('should handle a long statement', async () => {
    const longStatement = 'a'.repeat(2000);
    const measurements = await conversation2measurements(longStatement, null, null);
    expect(measurements).toHaveLength(0);
  });
});