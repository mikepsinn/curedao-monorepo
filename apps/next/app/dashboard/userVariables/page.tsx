import { Metadata } from "next"
import { redirect } from "next/navigation"

import { getUserVariables } from "@/lib/api/userVariables"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { UserVariableAddButton } from "@/components/userVariable/user-variable-add-button"
import { UserVariableList } from "@/components/userVariable/user-variable-list"
import { Shell } from "@/components/layout/shell"
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header"

export const metadata: Metadata = {
  title: "Your Variables",
  description: "Manage your treatments, symptoms, and other variables.",
}

export default async function UserVariablesPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin")
  }

  const userVariables = await fetch('/api/userVariables');

  return (
    <Shell>
      <DashboardHeader heading="Your Variables" text="Manage your treatments, symptoms, and other variables.">
        <UserVariableAddButton />
      </DashboardHeader>
      <div className="divide-y divide-border rounded-md border">
        <UserVariableList userVariables={userVariables} />
      </div>
    </Shell>
  )
}
