import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"

  

const formSchema = z.object({
    details: z.string().min(4),
    date: z.date(),
    source: z.string().min(4)
})

const AddForm = () => {
    const details = "ތަފްސީލު"
    const date = "ތާރީޚު"
    const source = "ސޯރސް"
    const formFontSize = "text-[16px]"

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form dir="rtl" onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 w-full text-right">
                <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-right text-[16px] font-waheed">{details}</FormLabel>
                            <FormControl>
                                {/* <Input className="text-black text-lg" placeholder={details} {...field} /> */}
                                <Textarea
                                placeholder={details}
                                className="resize-none text-black text-[16px]"
                                {...field}
                                />
                            </FormControl>
                            
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="source"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-right text-[16px] font-waheed">{source}</FormLabel>
                            <FormControl>
                                <Input className="text-black text-[16px]" placeholder={source} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel className="text-right text-[16px] font-waheed">{date}</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "h-full px-4 text-right font-normal justify-between text-[16px]",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value ? (
                                    format(field.value, "PPP")
                                ) : (
                                    <span className="text-gray-500">{date} ނަންގަވާ</span>
                                )}
                                <CalendarIcon color="black" className="h-4 w-4 opacity-50" />
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
                            <FormMessage />
                            </FormItem>
                    )}
                /> 
                </div>
                

                <div className="w-full text-center">
                    <Button 
                    variant={"outline"} 
                    type="submit"
                    className="bg-transparent text-[16px]"
                    >ހުށަހެޅުމަށް</Button>
                </div>
                
            </form>
        </Form>
    )
}

export default AddForm
