"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CredenzaClose, CredenzaFooter } from "@/components/ui/credenza"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface MeasurementsAddFormProps {
  userVariable: object
  setShowMeasurementAlert: (active: boolean) => void
}

const FormSchema = z.object({
  date: z.date({
    required_error: "A date is required.",
  }),
  value: z.number({
    required_error: "A value is required.",
  }),
})

type FormValues = z.infer<typeof FormSchema>

const currentDate = new Date()
currentDate.setHours(0, 0, 0, 0)

const defaultValues: Partial<FormValues> = {
  date: currentDate,
  value: 0, // Default value for the new field
}

export function MeasurementsAddForm({ userVariable, setShowMeasurementAlert }: MeasurementsAddFormProps) {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)

    const response = await fetch(`/api/userVariables/${userVariable.id}/measurements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startAt: data.date,
        value: data.value, // Use the value from the form
      }),
    })

    if (!response?.ok) {
      toast({
        title: "Something went wrong.",
        description: "Your userVariable was not measured. Please try again.",
        variant: "destructive",
      })
    } else {
      toast({
        description: "Your userVariable has been measured successfully.",
      })
    }

    setIsLoading(false)
    setShowMeasurementAlert(false)

    router.refresh()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 px-4 md:px-0"
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover modal={true}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal sm:w-[320px]",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <Icons.calendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Date of the measured event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Value</FormLabel>
              <FormControl>
                <input
                  type="number"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Value of the measurement
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <CredenzaFooter className="flex flex-col-reverse">
          <CredenzaClose asChild>
            <Button variant="outline">Cancel</Button>
          </CredenzaClose>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.add className="mr-2 h-4 w-4" />
            )}
            <span>Add {userVariable.name} measurement</span>
          </Button>
        </CredenzaFooter>
      </form>
    </Form>
  )
}
