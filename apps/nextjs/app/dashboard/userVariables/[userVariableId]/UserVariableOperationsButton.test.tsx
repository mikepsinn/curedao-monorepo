import { render, screen, fireEvent } from '@testing-library/react';
import { UserVariableOperationsButton } from './UserVariableOperationsButton';
import { UserVariable } from '@/types/models/UserVariable';

const mockUserVariable: UserVariable = {
  id: 1,
  name: 'Test Variable',
  // Add other required properties
};

describe('UserVariableOperationsButton', () => {
  it('renders the button', () => {
    render(<UserVariableOperationsButton userVariable={mockUserVariable} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('opens the dropdown menu on click', () => {
    render(<UserVariableOperationsButton userVariable={mockUserVariable} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  // Add more tests for interactions and rendering different states
});