import { render, screen, fireEvent } from '@testing-library/react';
import { UserVariableItem } from './user-variable-item';
import { UserVariable } from '@/types/models/UserVariable';

const mockUserVariable: UserVariable = {
  id: 1, 
  name: 'Test Variable',
  // Add other required properties
};

describe('UserVariableItem', () => {
  it('renders the user variable name', () => {
    render(<UserVariableItem userVariable={mockUserVariable} />);
    expect(screen.getByText('Test Variable')).toBeInTheDocument();
  });

  it('renders the UserVariableOperationsButton', () => {
    render(<UserVariableItem userVariable={mockUserVariable} />);  
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // Add more tests for rendering and interactions
});