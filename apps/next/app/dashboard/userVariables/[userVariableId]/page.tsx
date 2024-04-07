import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

import { getUserVariable } from "@/lib/api/userVariables"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { cn, dateRangeParams } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserVariableOperations } from "@/components/userVariable/user-variable-operations"
import { measurementColumns } from "@/components/userVariable/measurements/measurements-columns"
import { DataTable } from "@/components/data-table"
import { DateRangePicker } from "@/components/date-range-picker"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/layout/shell"
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header"
import { GET } from '@/app/api';

interface UserVariablePageProps {
  params: { userVariableId: string }
  searchParams: { from: string; to: string }
}

export async function generateMetadata({
  params,
}: UserVariablePageProps): Promise<Metadata> {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin")
  }

  const userVariable = await getUserVariable(params.userVariableId, true)

  return {
    title: userVariable?.name || "Not Found",
    description: userVariable?.description,
  }
}

export default async function UserVariablePage({
  params,
  searchParams,
}: UserVariablePageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin")
  }

  const userVariable = await getUserVariable(params.userVariableId, true)
  let measurements = userVariable?.measurements || []
  if(!measurements || measurements.length === 0) {
    const results =  await GET('/v3/measurements', {
      params: { query: { userVariableId: userVariable.userVariableId } },
    });
    measurements = results.data;
  }

  if (!userVariable) {
    notFound()
  }

  const dateRange = dateRangeParams(searchParams)

  return (
    <Shell>
      <DashboardHeader
        heading={`${userVariable.name} Stats`}
        text={userVariable.description}
      >
        <div className="flex flex-col items-stretch gap-2 md:items-end">
          <DateRangePicker />
          <UserVariableOperations
            userVariable={{
              id: userVariable.id,
            }}
          >
            <div
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            >
              <Icons.down className="mr-2 h-4 w-4" />
              Actions
            </div>
          </UserVariableOperations>
        </div>
      </DashboardHeader>
      <DataTable columns={measurementColumns} data={measurements}>
        Measurements
      </DataTable>
    </Shell>
  )
}
