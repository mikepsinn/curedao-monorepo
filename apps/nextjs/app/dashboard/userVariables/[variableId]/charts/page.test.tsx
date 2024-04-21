import { getServerSession } from '@/lib/auth';
import { getUserVariable } from '@/lib/session';
import { UserVariableCharts } from '@/components/userVariable/user-variable-charts';
import { UserVariable } from '@/types/models/UserVariable';

jest.mock('@/lib/auth');
jest.mock('@/lib/session');

const mockUserVariable: UserVariable = {
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

describe('UserVariableCharts Page', () => {
  it('renders UserVariableCharts component with fetched data', async () => {
    (getServerSession as jest.Mock).mockResolvedValueOnce({ user: { id: '1' } });
    (getUserVariable as jest.Mock).mockResolvedValueOnce(mockUserVariable);

    const { findByText } = render(&lt;UserVariableChartsPage />);

    expect(await findByText('Test Variable')).toBeInTheDocument();
    expect(UserVariableCharts).toHaveBeenCalledWith(
      expect.objectContaining({ userVariable: mockUserVariable }),
      expect.anything()
    );
  });

  it('handles error when data fetch fails', async () => {
    (getServerSession as jest.Mock).mockResolvedValueOnce({ user: { id: '1' } });
    (getUserVariable as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

    const { findByText } = render(&lt;UserVariableChartsPage />);

    expect(await findByText('Failed to load user variable')).toBeInTheDocument();
    expect(UserVariableCharts).not.toHaveBeenCalled();
  });
});