"use client"

import Link from "next/link"
import { UserVariable } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { UserVariableOperations } from "@/components/userVariable/user-variable-operations"
import { QuickMeasurementButton } from '@/components/userVariable/measurements/quick-measurement-button';

interface UserVariableItemProps {
  userVariable: Pick<
    UserVariable,
    "id" | "name" | "description" | "colorCode" | "createdAt"
  >
}

export function UserVariableItem({ userVariable }: UserVariableItemProps) {
  return (
    <div className="flex items-center justify-between gap-2 p-4">
      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-4 md:min-w-[8rem]">
          {userVariable.imageUrl && (
            <img src={userVariable.imageUrl} alt={userVariable.name} style={{ maxWidth: '25%', width: '50px' }} />
          )}
{/*          <div
            className="h-4 w-4 rounded-full shadow shadow-black dark:shadow-white"
            data-testid="color-code"
            style={{ backgroundColor: `${userVariable.colorCode}` }}
          ></div>*/}
          <div>
            <Link
              href={`/dashboard/userVariables/${userVariable.id}`}
              className="font-semibold hover:underline"
            >
              {userVariable.name}
            </Link>
{/*            <div>
              <p className="text-sm text-muted-foreground">
                {formatDate(userVariable.createdAt?.toDateString())}
              </p>
            </div>*/}
          </div>
        </div>
{/*        {userVariable.description ? (
          <div className="text-sm text-muted-foreground">
            {userVariable.description}
          </div>
        ) : null}*/}
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <QuickMeasurementButton
          userVariable={userVariable}
          className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
          variant="outline"
          size="icon"
        />
        <UserVariableOperations
          userVariable={userVariable}
        />
      </div>
    </div>
  )
}

UserVariableItem.Skeleton = function UserVariableItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
