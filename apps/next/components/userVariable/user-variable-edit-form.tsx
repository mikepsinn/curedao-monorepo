"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserVariable } from "@prisma/client"
import { HexColorPicker } from "react-colorful"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserVariableEditFormProps extends React.HTMLAttributes<HTMLFormElement> {
  userVariable: Pick<UserVariable, "id" | "name" | "description" | "colorCode">
}

type FormData = z.infer<typeof userVariablePatchSchema>

export function UserVariableEditForm({
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
    <form
      className={cn(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle>{userVariable.name}</CardTitle>
          {userVariable.description && (
            <CardDescription>{userVariable.description}</CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="w-full lg:w-[400px]"
              size={32}
              {...register("name")}
            />
            {errors?.name && (
              <p className="px-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">
              Description{" "}
              <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Textarea
              id="description"
              className="w-full lg:w-[400px]"
              {...register("description")}
            />
            {errors?.description && (
              <p className="px-1 text-xs text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="grid gap-3">
            <Label>Color</Label>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
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
