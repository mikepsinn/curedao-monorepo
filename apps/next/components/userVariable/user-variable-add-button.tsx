"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Button, ButtonProps } from "@/components/ui/button"
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

interface UserVariableAddButtonProps extends ButtonProps {}

export function UserVariableAddButton({ ...props }: UserVariableAddButtonProps) {
  const router = useRouter()
  const [showAddAlert, setShowAddAlert] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick() {
    setIsLoading(true)

    const response = await fetch("/api/userVariables", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New UserVariable",
        colorCode: "#ffffff",
      }),
    })

    if (!response?.ok) {
      setIsLoading(false)
      setShowAddAlert(false)

      return toast({
        title: "Something went wrong.",
        description: "Your userVariable was not created. Please try again.",
        variant: "destructive",
      })
    }

    toast({
      description: "A new userVariable has been created successfully.",
    })

    const userVariable = await response.json()

    setIsLoading(false)
    setShowAddAlert(false)

    router.push(`/dashboard/userVariables/${userVariable.id}/settings`)
    router.refresh()
  }

  return (
    <>
      <Button onClick={() => setShowAddAlert(true)} {...props}>
        <Icons.add className="mr-2 h-4 w-4" />
        New userVariable
      </Button>

      {/* Add Alert */}
      <Credenza open={showAddAlert} onOpenChange={setShowAddAlert}>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>
              Are you sure you want to create a new userVariable?
            </CredenzaTitle>
            <CredenzaDescription>
              This will add a new userVariable to your account.
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaFooter className="flex flex-col-reverse">
            <CredenzaClose asChild>
              <Button variant="outline">Cancel</Button>
            </CredenzaClose>
            <Button onClick={onClick} disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.add className="mr-2 h-4 w-4" />
              )}
              <span>Add userVariable</span>
            </Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  )
}
