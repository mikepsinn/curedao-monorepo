
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { Icons } from "@/components/icons"

import { UserVariableAddButton } from "./user-variable-add-button"
import { UserVariableItem } from "./user-variable-item"

interface UserVariableListProps {
  userVariables: UserVariable[]
}

export function UserVariableList({ userVariables }: UserVariableListProps) {
  return (
    <>
      {userVariables?.length ? (
        <>
          {userVariables.map((userVariable) => (
            <UserVariableItem key={userVariable.id} userVariable={userVariable} />
          ))}
        </>
      ) : (
        <EmptyPlaceholder>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Icons.activity className="h-10 w-10" />
          </div>
          <EmptyPlaceholder.Title>No userVariables created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            Add an userVariable to start monitoring your progress.
          </EmptyPlaceholder.Description>
          <UserVariableAddButton variant="outline" />
        </EmptyPlaceholder>
      )}
    </>
  )
}
