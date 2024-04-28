"use client";
import { FC, useState, useEffect } from "react";
import { Measurement } from "@/types/models/Measurement";
import { DataTable } from "@/components/data-table";
import { measurementColumns } from "@/components/userVariable/measurements/measurements-columns";

type MeasurementsListProps = {
  user: {
    id: string;
  };
  variableId?: number;  // Make variableId optional
  measurementsDateRange: {
    from: string;
    to: string;
  };
};

export const MeasurementsList: FC<MeasurementsListProps> = ({ user, variableId, measurementsDateRange }) => {

  const [measurements, setMeasurements] = useState<Measurement[]>();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    setIsLoading(true); // Set loading to true when starting to fetch
    let url = `/api/dfda/measurements`
    if (variableId) {
      url += `?variableId=${variableId}`
    }
    if (measurementsDateRange.from) {
      url += `${variableId ? '&' : '?'}earliestMeasurementTime=${measurementsDateRange.from}`  
    }
    if (measurementsDateRange.to) {
      url += `${variableId || measurementsDateRange.from ? '&' : '?'}latestMeasurementTime=${measurementsDateRange.to}`
    }

    fetch(url)
      .then(response => response.json())
      .then(measurements => {
        if (measurementsDateRange.from) {
          measurements = measurements.filter((measurement: Measurement) => {
            const measurementTime = new Date(measurement.startAt);
            const fromDate = new Date(measurementsDateRange.from);
            return measurementTime >= fromDate;
          });
        }
        if (measurementsDateRange.to) {
          measurements = measurements.filter((measurement: Measurement) => {
            const measurementTime = new Date(measurement.startAt);
            const toDate = new Date(measurementsDateRange.to);
            return measurementTime <= toDate;
          });
        }
        setMeasurements(measurements);

        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching user variables:', error);
        setIsLoading(false); // Ensure loading is set to false even if there's an error
      });

  }, [user, variableId, measurementsDateRange.from, measurementsDateRange.to]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loader or a loading component
  }

  // Ensure measurements are defined before trying to access its properties
  if (!measurements) {
    return <div>No data found.</div>; // Handle the case where measurements are undefined
  }

  return (
    <>
      <DataTable columns={measurementColumns} data={measurements ?? []}>
        Measurements
      </DataTable>
    </>
  );
}
