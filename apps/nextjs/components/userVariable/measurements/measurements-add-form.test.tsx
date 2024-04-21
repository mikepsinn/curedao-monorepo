import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MeasurementsAddForm } from './measurements-add-form';
import { UserVariable } from '@/types/models/UserVariable';

const mockUserVariable: UserVariable = {
  id: 1,
  name: 'Mood',
  description: 'Daily mood ratings',
  unitAbbreviatedName: '/5',
  valence: 'positive',
  minimumAllowedValue: 1,
  maximumAllowedValue: 5,
  mostCommonValue: 3,
  variableId: 1,
};

describe('MeasurementsAddForm', () => {
  it('renders form with default values', () => {
    render(<MeasurementsAddForm userVariable={mockUserVariable} setShowMeasurementAlert={jest.fn()} />);
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByAltText('Rating 3')).toHaveClass('active-primary-outcome-variable-rating-button');
  });

  it('submits form with success toast on valid input', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true });
    render(<MeasurementsAddForm userVariable={mockUserVariable} setShowMeasurementAlert={jest.fn()} />);
    
    await userEvent.click(screen.getByAltText('Rating 4'));
    await userEvent.click(screen.getByText('Record measurement'));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/api/dfda/measurements',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('"value":4')
      })
    ));
    expect(screen.getByText(/Recorded 4 \/5 for Mood on/)).toBeInTheDocument();
  });

  it('shows error toast on failed form submission', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
    render(<MeasurementsAddForm userVariable={mockUserVariable} setShowMeasurementAlert={jest.fn()} />);
    
    await userEvent.click(screen.getByAltText('Rating 2')); 
    await userEvent.click(screen.getByText('Record measurement'));

    await waitFor(() => expect(screen.getByText('Something went wrong.')).toBeInTheDocument());
    expect(screen.getByText('Mood was not recorded. Please try again.')).toBeInTheDocument();
  });
});