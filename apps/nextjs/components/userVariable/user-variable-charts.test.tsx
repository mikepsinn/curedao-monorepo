import { UserVariableCharts } from './user-variable-charts';
import { UserVariable } from '@/types/models/UserVariable';

const mockUserVariableWithCharts: UserVariable = {
  id: '1',
  name: 'Test Variable',
  charts: [
    {
      id: '1',
      type: 'line',
      data: [10, 20, 30]
    }
  ]
};

const mockUserVariableWithoutCharts: UserVariable = {
  id: '2',
  name: 'Test Variable',
  charts: []
};

describe('UserVariableCharts', () => {
  it('renders chart correctly with valid userVariable prop', () => {
    const { getByText } = render(
      &lt;UserVariableCharts userVariable={mockUserVariableWithCharts} />
    );
    expect(getByText('Line Chart')).toBeInTheDocument();
  });

  it('renders empty state when userVariable prop is missing charts', () => {
    const { getByText } = render(
      &lt;UserVariableCharts userVariable={mockUserVariableWithoutCharts} />  
    );
    expect(getByText('No chart data available')).toBeInTheDocument();
  });

  it('renders error state when userVariable prop is empty', () => {
    const { getByText } = render(&lt;UserVariableCharts userVariable={{}} />);
    expect(getByText('Invalid user variable data')).toBeInTheDocument();
  });
});