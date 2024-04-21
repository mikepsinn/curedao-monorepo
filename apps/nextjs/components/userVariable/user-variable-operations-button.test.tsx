import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserVariableOperationsButton } from './user-variable-operations-button';
import { UserVariable } from '@/types/models/UserVariable';

const mockUserVariable: UserVariable = {
  id: 1,
  name: 'Test Variable',
  description: 'Test description',
  createdAt: new Date(),
  imageUrl: '',
  combinationOperation: 'MEAN',
  unitAbbreviatedName: 'mg',
  variableCategoryName: 'Treatments',
  lastValue: 5,
  unitName: 'milligrams'
};

describe('UserVariableOperationsButton', () => {
  it('opens the measurement form when Record Measurement menu item is clicked', async () => {
    render(<UserVariableOperationsButton userVariable={mockUserVariable} />);
    
    fireEvent.click(screen.getByText('Open'));
    fireEvent.click(screen.getByText('Record Measurement'));
    
    await waitFor(() => {
      expect(screen.getByText('Record a Measurement')).toBeInTheDocument();  
    });
  });
});