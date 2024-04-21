"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Credenza,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { Measurement } from "@/app/types.ts";

import { render, fireEvent, waitFor } from '@testing-library/react';
import { MeasurementDeleteButton } from './measurement-delete-button';
import { Measurement } from '@/app/types.ts';

const mockMeasurement: Measurement = {
  id: 1,
  startAt: '2023-05-30T10:00:00Z',
  note: 'Test measurement',
  value: 5,
  unitAbbreviatedName: 'count'
};

describe('MeasurementDeleteButton', () => {
  it('deletes measurement successfully', async () => {
    // Mock fetch to return successful response
    global.fetch = jest.fn().mockResolvedValue({ ok: true });
    
    const { getByText } = render(<MeasurementDeleteButton measurement={mockMeasurement} />);
    fireEvent.click(getByText('Delete'));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(`/api/dfda/measurements?id=${mockMeasurement.id}`, { method: 'DELETE' });
      expect(getByText('Your measurement has been deleted successfully.')).toBeInTheDocument();
    });
  });

  it('handles undefined measurement ID', async () => {
    console.error = jest.fn();

    const { getByText } = render(<MeasurementDeleteButton measurement={{...mockMeasurement, id: undefined}} />);  
    fireEvent.click(getByText('Delete'));

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Measurement ID is not defined for deleteMeasurement');
      expect(global.fetch).not.toHaveBeenCalled();
    });
  });

  it('handles API error', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });

    const { getByText } = render(<MeasurementDeleteButton measurement={mockMeasurement} />);
    fireEvent.click(getByText('Delete'));

    await waitFor(() => {
      expect(getByText('Something went wrong.')).toBeInTheDocument();
      expect(getByText('Your measurement was not deleted. Please try again.')).toBeInTheDocument();
    });
  });
});

interface MeasurementsDeleteButtonProps {
  measurement: Measurement
}

async function deleteMeasurement(measurementId: number | undefined) {
  if(!measurementId) {
    console.error("Measurement ID is not defined for deleteMeasurement")
    return false
  }
  const response = await fetch(`/api/dfda/measurements?id=${measurementId}`, {
    method: "DELETE",
  })

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      description: "Your measurement was not deleted. Please try again.",
      variant: "destructive",
    })
  } else {
    toast({
      description: "Your measurement has been deleted successfully.",
    })
  }

  return true
}

export function MeasurementDeleteButton({ measurement }: MeasurementsDeleteButtonProps) {
  const router = useRouter()
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false)
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false)

  const handleDelete = async () => {
    setIsDeleteLoading(true)
    const deleted = await deleteMeasurement(measurement.id)

    if (deleted) {
      setIsDeleteLoading(false)
      setShowDeleteAlert(false)
      router.refresh()
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={() => setShowDeleteAlert(true)}
        disabled={isDeleteLoading}
      >
        <Icons.trash className="h-4 w-4" />
        <span className="sr-only">Delete</span>
      </Button>
      <Credenza open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>
              Delete measurement from {formatDate(measurement.startAt)}?
            </CredenzaTitle>
            <CredenzaDescription>
              This action cannot be undone.
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaFooter className="flex flex-col-reverse">
            <CredenzaClose asChild>
              <Button variant="outline">Cancel</Button>
            </CredenzaClose>
            <Button
              onClick={handleDelete}
              disabled={isDeleteLoading}
              className="bg-red-600 focus:ring-red-600"
            >
              {isDeleteLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.trash className="mr-2 h-4 w-4" />
              )}
              <span>Delete</span>
            </Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  )
}
