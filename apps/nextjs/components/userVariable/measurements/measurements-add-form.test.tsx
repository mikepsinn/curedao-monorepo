import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MeasurementsAddForm, MeasurementsAddFormProps } from './measurements-add-form'; 
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

describe('MeasurementsAddForm', () => {
  it('submits the form with the correct data', async () => {
    const mockSetShowMeasurementAlert = jest.fn();
    render(<MeasurementsAddForm 
      userVariable={mockUserVariable}
      setShowMeasurementAlert={mockSetShowMeasurementAlert}
    />);
    
    fireEvent.change(screen.getByLabelText('Value'), {
      target: { value: '10' }
    });
    fireEvent.click(screen.getByText('Record measurement'));
    
    await waitFor(() => {
      expect(mockSetShowMeasurementAlert).toHaveBeenCalledWith(false);
      // Assert expected API call was made with correct data
    });
  });
  
  // Add more test cases for validation, conditional rendering based on unit
});