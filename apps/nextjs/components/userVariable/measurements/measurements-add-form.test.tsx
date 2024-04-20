import { render, screen, fireEvent } from '@testing-library/react';
import { MeasurementsAddForm } from './measurements-add-form';
import { UserVariable } from '@/types/models/UserVariable';

const mockUserVariable: UserVariable = {
  id: 1,
  name: 'Test Variable', 
  mostCommonValue: 5,
  unitAbbreviatedName: 'mg',
  // Add other required properties  
};

describe('MeasurementsAddForm', () => {
  it('sets default form values based on user variable', () => {
    render(
      <MeasurementsAddForm 
        userVariable={mockUserVariable}
        setShowMeasurementAlert={jest.fn()}  
      />
    );
    expect(screen.getByLabelText(/value/i)).toHaveValue(5);
    expect(screen.getByText('mg')).toBeInTheDocument();
  });

  // Add more tests for form submission, validation, error handling
});