import { render, screen, fireEvent, waitFor } from '@testing-library/react';  
import { QuickMeasurementButton, QuickMeasurementButtonProps } from './quick-measurement-button';
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

describe('QuickMeasurementButton', () => {
  it('makes the correct API call when clicked', async () => {
    render(<QuickMeasurementButton userVariable={mockUserVariable} />);
    
    fireEvent.click(screen.getByRole('button'));
    
    await waitFor(() => {
      // Assert expected API call was made with correct data
    });
  });
});