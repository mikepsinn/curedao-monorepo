"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

import { cn } from "@/lib/utils"
import { userVariablePatchSchema } from "@/lib/validations/userVariable"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserVariableEditFormProps extends React.HTMLAttributes<HTMLFormElement> {
  userVariable: Pick<UserVariable, "id" | "name" | "description" | "colorCode">
}

type FormData = z.infer<typeof userVariablePatchSchema>

export function UserVariableCharts({
  userVariable,
  className,
  ...props
}: UserVariableEditFormProps) {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(userVariablePatchSchema),
    defaultValues: {
      name: userVariable?.name || "",
      description: userVariable?.description || "",
      colorCode: "",
    },
  })
  const [color, setColor] = React.useState(userVariable.colorCode || "#ffffff")

  async function onSubmit(data: FormData) {
    const response = await fetch(`/api/userVariables/${userVariable.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        colorCode: color,
      }),
    })

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your userVariable was not updated. Please try again.",
        variant: "destructive",
      })
    }

    toast({
      description: "Your userVariable has been updated.",
    })

    router.back()
    router.refresh()
  }

  return (

      <Card>
        <CardHeader>
          <CardTitle>{userVariable.name}</CardTitle>
          {userVariable.description && (
            <CardDescription>{userVariable.description}</CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {userVariable.charts.map((qmChart: { highchartConfig: any }, key: React.Key | null | undefined) =>
            qmChart && qmChart.highchartConfig ? (
              <div key={key} className="card transparent-bg highcharts-container">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={qmChart.highchartConfig}
                />
              </div>
            ) : null
          )}

        </CardContent>
        <CardFooter>
          <button
            type="submit"
            className={cn(buttonVariants(), className)}
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save changes</span>
          </button>
        </CardFooter>
      </Card>
    </form>
  )
}
