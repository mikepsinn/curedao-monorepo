import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserVariableItem } from './user-variable-item';
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

describe('UserVariableItem', () => {
  it('opens the measurement form when MeasurementButton is clicked', async () => {
    render(<UserVariableItem userVariable={mockUserVariable} />);
    
    fireEvent.click(screen.getByTestId('measurement-button')); 
    
    await waitFor(() => {
      expect(screen.getByText('Record a Measurement')).toBeInTheDocument();
    });
  });
});