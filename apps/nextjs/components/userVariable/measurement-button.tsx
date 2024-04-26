"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Credenza,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle
} from '@/components/ui/credenza';
import { MeasurementsAddForm } from "@/components/userVariable/measurements/measurements-add-form";
import { UserVariable } from "@/types/models/UserVariable";
import { Icons } from "@/components/icons";
import { ButtonProps } from 'react-day-picker';

interface MeasurementButtonProps extends ButtonProps {
  userVariable: Pick<
    UserVariable,
    "id" | "name" | "description" | "createdAt" | "imageUrl" |
    "combinationOperation" | "unitAbbreviatedName" | "variableCategoryName" |
    "lastValue" | "unitName" | "userId" | "variableId"
  >
  className: string;
  size: string;
  variant: string;
}

export function MeasurementButton({ userVariable, ...props }: MeasurementButtonProps) {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showMeasurementAlert, setShowMeasurementAlert] = React.useState<boolean>(false)

  async function onClick() {
    setShowMeasurementAlert(true)
    //router.refresh();
  }

  // Destructure `ref` and `size` out of props to avoid passing it to the Button component if not valid
  const { ref, size, ...buttonProps } = props;


  return (
    <>
      <Button onClick={onClick} {...buttonProps} size={"default"} variant={"default"}>
        <Icons.add className="h-4 w-4" />
      </Button>
      {isFormOpen && (
        <Credenza>
          <MeasurementsAddForm
            userVariable={userVariable}
            setShowMeasurementAlert={setShowMeasurementAlert}
          />
        </Credenza>
      )}
      <Credenza open={showMeasurementAlert} onOpenChange={setShowMeasurementAlert}>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>Record a Measurement</CredenzaTitle>
            <CredenzaDescription>
              This will record a {userVariable.name} measurement.
            </CredenzaDescription>
          </CredenzaHeader>
          <MeasurementsAddForm
            userVariable={userVariable}
            setShowMeasurementAlert={setShowMeasurementAlert}
          />
        </CredenzaContent>
      </Credenza>
    </>
  );
}

// Unit tests for MeasurementButton component
describe('MeasurementButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should open the measurement alert when the button is clicked', async () => {
    const userVariableMock = {
      id: '1',
      name: 'Test Variable',
      description: 'Test description',
      createdAt: '2023-06-08T00:00:00.000Z',
      imageUrl: 'test.jpg',
      combinationOperation: 'SUM',
      unitAbbreviatedName: 'mg',
      variableCategoryName: 'Test Category',
      lastValue: 100,
      unitName: 'milligrams',
      userId: '1',
      variableId: '1',
    };

    const { getByRole } = render(<MeasurementButton userVariable={userVariableMock} />);
    const button = getByRole('button');

    await act(async () => {
      fireEvent.click(button);
    });

    expect(button).toBeInTheDocument();
    expect(getByText('Record a Measurement')).toBeInTheDocument();
    expect(getByText(`This will record a ${userVariableMock.name} measurement.`)).toBeInTheDocument();
  });

  it('should submit the form and close the measurement alert on success', async () => {
    const userVariableMock = {
      id: '1',
      name: 'Test Variable',
      description: 'Test description',
      createdAt: '2023-06-08T00:00:00.000Z',
      imageUrl: 'test.jpg',
      combinationOperation: 'SUM',
      unitAbbreviatedName: 'mg',
      variableCategoryName: 'Test Category',
      lastValue: 100,
      unitName: 'milligrams',
      userId: '1',
      variableId: '1',
    };

    const mockResponse = { ok: true };
    global.fetch = jest.fn().mockResolvedValueOnce(mockResponse);

    const { getByRole, getByLabelText, queryByText } = render(<MeasurementButton userVariable={userVariableMock} />);
    const button = getByRole('button');

    await act(async () => {
      fireEvent.click(button);
    });

    const valueInput = getByLabelText('Value');
    const submitButton = getByRole('button', { name: 'Add Measurement' });

    await act(async () => {
      fireEvent.change(valueInput, { target: { value: '200' } });
      fireEvent.click(submitButton);
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/measurements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userVariableId: userVariableMock.id,
        value: 200,
      }),
    });
    expect(queryByText('Record a Measurement')).not.toBeInTheDocument();
  });

  it('should handle form submission error and display an error message', async () => {
    const userVariableMock = {
      id: '1',
      name: 'Test Variable',
      description: 'Test description',
      createdAt: '2023-06-08T00:00:00.000Z',
      imageUrl: 'test.jpg',
      combinationOperation: 'SUM',
      unitAbbreviatedName: 'mg',
      variableCategoryName: 'Test Category',
      lastValue: 100,
      unitName: 'milligrams',
      userId: '1',
      variableId: '1',
    };

    const mockResponse = { ok: false };
    global.fetch = jest.fn().mockResolvedValueOnce(mockResponse);

    const { getByRole, getByLabelText } = render(<MeasurementButton userVariable={userVariableMock} />);
    const button = getByRole('button');

    await act(async () => {
      fireEvent.click(button);
    });

    const valueInput = getByLabelText('Value');
    const submitButton = getByRole('button', { name: 'Add Measurement' });

    await act(async () => {
      fireEvent.change(valueInput, { target: { value: '200' } });
      fireEvent.click(submitButton);
    });

    expect(global.fetch).toHaveBeenCalledWith('/api/measurements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userVariableId: userVariableMock.id,
        value: 200,
      }),
    });
    expect(getByText('Something went wrong. Please try again.')).toBeInTheDocument();
  });
});
