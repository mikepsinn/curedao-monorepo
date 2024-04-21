import { render, screen, waitFor } from '@testing-library/react';
import { MeasurementsList } from './measurements-list';
import { Measurement } from '@/types/models/Measurement';

const mockMeasurements: Measurement[] = [
  {id: '1', date: '2023-06-01', value: 5, variableId: 1, variableName: 'Mood'},
  {id: '2', date: '2023-06-02', value: 4, variableId: 1, variableName: 'Mood'},
];

describe('MeasurementsList', () => {
  it('renders loading state', () => {
    render(<MeasurementsList user={{id: '1'}} variableId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders measurement data', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockMeasurements),
    });
    
    render(<MeasurementsList user={{id: '1'}} variableId={1} />);
    await waitFor(() => expect(screen.getByText('Mood')).toBeInTheDocument());
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('renders error state', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));
    
    render(<MeasurementsList user={{id: '1'}} variableId={1} />);
    await waitFor(() => expect(screen.getByText('No data found.')).toBeInTheDocument());
  });
});