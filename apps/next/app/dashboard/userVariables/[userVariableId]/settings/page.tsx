import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

import { getUserVariable } from "@/lib/api/userVariables"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { UserVariableEditForm } from "@/components/userVariable/user-variable-edit-form"
import { Shell } from "@/components/layout/shell"
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header"

export const metadata: Metadata = {
  title: "UserVariable Settings",
}

interface UserVariableEditProps {
  params: { userVariableId: string }
}

export default async function UserVariableEdit({ params }: UserVariableEditProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin")
  }

  const userVariable = await getUserVariable(params.userVariableId, user.id)

  if (!userVariable) {
    notFound()
  }

  return (
    <Shell>
      <DashboardHeader
        heading="UserVariable Settings"
        text="Modify userVariable details."
      />
      <div className="grid grid-cols-1 gap-10">
        <UserVariableEditForm
          userVariable={{
            id: userVariable.id,
            name: userVariable.name,
            description: userVariable.description,
            colorCode: userVariable.colorCode,
          }}
        />
      </div>
    </Shell>
  )
}
