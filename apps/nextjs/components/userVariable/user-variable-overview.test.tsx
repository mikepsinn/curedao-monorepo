import { render, screen, waitFor } from '@testing-library/react';
import { UserVariableOverview } from './user-variable-overview';
import { UserVariable } from '@/types/models/UserVariable';

const mockUserVariable: UserVariable = {
  id: 1,
  name: 'Mood',
  description: 'Daily mood ratings',
  measurements: [
    {id: '1', date: '2023-06-01', value: 5, variableId: 1, variableName: 'Mood'},
    {id: '2', date: '2023-06-02', value: 4, variableId: 1, variableName: 'Mood'},
  ]
};

describe('UserVariableOverview', () => {
  it('renders loading state', () => {
    render(<UserVariableOverview user={{id: '1'}} variableId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user variable data', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockUserVariable),
    });
    
    render(<UserVariableOverview user={{id: '1'}} variableId={1} />);
    await waitFor(() => expect(screen.getByText('Mood Stats')).toBeInTheDocument());
    expect(screen.getByText('Daily mood ratings')).toBeInTheDocument();
  });

  it('renders error state', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));
    
    render(<UserVariableOverview user={{id: '1'}} variableId={1} />);
    await waitFor(() => expect(screen.getByText('No data found.')).toBeInTheDocument());
  });
});