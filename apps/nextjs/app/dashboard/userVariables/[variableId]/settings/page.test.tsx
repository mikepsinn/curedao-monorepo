import { getServerSession } from '@/lib/auth';
import { getUserVariable } from '@/lib/session';
import { UserVariableEditForm } from '@/components/userVariable/user-variable-edit-form';
import { UserVariable } from '@/types/models/UserVariable';

jest.mock('@/lib/auth');
jest.mock('@/lib/session');

const mockUserVariable: UserVariable = {
  id: '1',
  name: 'Test Variable',
  description: 'This is a test variable',
  value: 42
};

describe('UserVariableSettings Page', () => {
  it('renders UserVariableEditForm component with fetched data', async () => {
    (getServerSession as jest.Mock).mockResolvedValueOnce({ user: { id: '1' } });
    (getUserVariable as jest.Mock).mockResolvedValueOnce(mockUserVariable);

    const { findByLabelText } = render(&lt;UserVariableSettingsPage />);

    expect(await findByLabelText('Name')).toHaveValue('Test Variable');
    expect(UserVariableEditForm).toHaveBeenCalledWith(
      expect.objectContaining({ userVariable: mockUserVariable }),
      expect.anything()
    );
  });

  it('handles error when data fetch fails', async () => {
    (getServerSession as jest.Mock).mockResolvedValueOnce({ user: { id: '1' } });
    (getUserVariable as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

    const { findByText } = render(&lt;UserVariableSettingsPage />);

    expect(await findByText('Failed to load user variable')).toBeInTheDocument();
    expect(UserVariableEditForm).not.toHaveBeenCalled();
  });
});