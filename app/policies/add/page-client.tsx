'use client'

import { Check, ChevronsUpDown } from 'lucide-react';
import addPolicy from './add-policy';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"


const schema = z.object({
  id: z.string().min(3, "ID must be at least 3 characters").max(12, "ID cannot exceed 12 characters"),
  name: z.string().min(3, "Name must be at least 3 characters").max(30, "Name cannot exceed 30 characters"),
  
  price: z.coerce.number().gt(0),
  type: z.string().min(1, "Please select a policy type"),
});


type PolicyTypes = {data:{id:number, policy_type:string}[]};

export default function AddPolicyPage(policyTypes: PolicyTypes) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      id: '',
      name: '',
      price: '',
      type: '',
    }
  });
  
  const handleRegistration = async (formData) => {
    const typeString = formData.type;
    let typeID = 0;

    for (let item of policyTypes.data){
        if (item.policy_type === typeString)
            typeID = item.id;
    }

    const newData = {
        id: formData.id,
        name: formData.name,
        price: formData.price,
        type: typeID
    }
    try {
      await addPolicy(newData);
    } catch (error) {
      console.error('Error creating user:', error)
    }

  };
  
  return (
   <div className="sm:container">

        {/* <GetPolicyType /> */}
        <Card className='w-2/4 h-fit mt-20 mx-auto shadow-xl'>
        <CardHeader>
            <CardTitle>Add Policy</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facilis quo aliquam!</CardDescription>
        </CardHeader>
        <CardContent>
 
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegistration)}>
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem className='mt-8'>
                <div className='grid grid-cols-3 gap-4'>
                    <FormLabel className='my-2'>ID</FormLabel>
                    <FormControl className='col-span-2'>
                        <Input placeholder="20A123" {...field} />
                    </FormControl>
                </div>
                <FormDescription>
                </FormDescription>
                <div className='grid grid-cols-3 gap-4 min-h-8'>
                    <FormMessage className='col-start-2 col-span-2 my-0'/>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className='grid grid-cols-3 gap-4'>
                    <FormLabel className='my-2'>Name</FormLabel>
                    <FormControl className='col-span-2'>
                    <Input placeholder="Easy Health" {...field} />
                    </FormControl>
                </div>
                <FormDescription>

                </FormDescription>
                <div className='grid grid-cols-3 gap-4 min-h-8'>
                    <FormMessage className='col-start-2 col-span-2 my-0'/>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <div className='grid grid-cols-3 gap-4'>
                    <FormLabel className='my-2'>Price</FormLabel>
                    <FormControl className='col-span-2'>
                    <Input placeholder='$30.00' {...field} />
                    </FormControl>
                </div>
                <FormDescription>

                </FormDescription>
                <div className='grid grid-cols-3 gap-4 min-h-8'>
                    <FormMessage className='col-start-2 col-span-2 my-0'/>
                </div>
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <div className='grid grid-cols-3 gap-4'>               
                <FormLabel className='my-2'>Policy Type</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value
                            ? policyTypes.data.find(
                                (type) => type.policy_type === field.value
                            )?.policy_type
                            : "Select Policy Type"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search types..." />
                        <CommandList>
                        <CommandEmpty>No types found.</CommandEmpty>
                        <CommandGroup>
                            {policyTypes.data.map((type) => (
                            <CommandItem
                                value={type.policy_type}
                                key={type.policy_type}
                                onSelect={() => {
                                form.setValue("type", type.policy_type)
                                }}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    type.policy_type === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                                />
                                {type.policy_type}
                            </CommandItem>
                            ))}
                        </CommandGroup>
                        </CommandList>
                    </Command>
                    </PopoverContent>
                </Popover>
                </div>

                <FormDescription>
                </FormDescription>
                <div className='grid grid-cols-3 gap-4 min-h-8'>
                    <FormMessage className='col-start-2 col-span-2 my-0'/>
                </div>
                </FormItem>
            )}
            />

            <div className='flex flex-row'>
                <Button className='me-6 ms-auto my-4' type='submit'>Submit</Button>
            </div>
        </form>
      </Form>
        </CardContent>
        </Card>
    </div>
  )
}