import { measurementColumns } from './measurements-columns';
import { Measurement } from '@/types/models/Measurement';

const testMeasurements: Measurement[] = [
  {
    id: '1',
    date: '2023-06-01',
    value: 5,
    variableId: 1,
    variableName: 'Mood',
  },
  {
    id: '2', 
    date: '2023-06-02',
    value: 3,
    variableId: 1,
    variableName: 'Mood',
  },
  {
    id: '3',
    date: null,
    value: null,
    variableId: 2,
    variableName: null,
  },
];

describe('measurementColumns', () => {
  it('renders date column correctly', () => {
    const dateColumn = measurementColumns[0];
    const cellValue = dateColumn.cell!(testMeasurements[0]);
    expect(cellValue).toContain('Thursday, June 1, 2023');
  });

  it('renders user variable column correctly', () => {
    const variableColumn = measurementColumns[1];
    const cellValue = variableColumn.cell!(testMeasurements[0]);
    expect(cellValue).toContain('Mood');
    expect(cellValue).toContain('/dashboard/userVariables/1');
  });

  it('renders value column correctly', () => {
    const valueColumn = measurementColumns[2];
    const cellValue = valueColumn.cell!({ row: { original: testMeasurements[1] } });
    expect(cellValue).toContain('3');
  });

  it('handles missing data gracefully', () => {
    const dateColumn = measurementColumns[0];
    const variableColumn = measurementColumns[1];
    const valueColumn = measurementColumns[2];

    expect(() => dateColumn.cell!(testMeasurements[2])).not.toThrow();
    expect(() => variableColumn.cell!(testMeasurements[2])).not.toThrow();  
    expect(() => valueColumn.cell!({ row: { original: testMeasurements[2] } })).not.toThrow();
  });
});