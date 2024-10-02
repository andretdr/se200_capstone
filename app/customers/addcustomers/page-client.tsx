'use client'

import { Check, ChevronsUpDown } from 'lucide-react';
import addCustomer from './add-customer';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button"
import { db } from '@/db';
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
    CardFooter,
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
import { Decimal } from '@prisma/client/runtime/library';


const schema = z.object({
  id: z.string().min(3, "ID must be at least 3 characters").max(12, "ID cannot exceed 12 characters"),
  name: z.string().min(3, "Name must be at least 3 characters").max(30, "Name cannot exceed 30 characters"),
  
  price: z.coerce.number().gt(0),
  type: z.string().min(1, "Please select a policy type"),
});


type Policies = {data:{policy_id:string, policy_name:string, base_price:Decimal}[]};

export default function AddCustomerPage(policies: Policies) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      policies: ''
    }
  });
  
  const handleRegistration = async (formData) => {
    // const typeString = formData.type;
    // let typeID = 0;

    // for (let item of policyTypes.data){
    //     if (item.policy_type === typeString)
    //         typeID = item.id;
    // }

    // const newData = {
    //     id: formData.id,
    //     name: formData.name,
    //     price: formData.price,
    //     type: typeID
    // }
    // try {
    //   await addPolicy(newData);
    // } catch (error) {
    //   console.error('Error creating user:', error)
    // }

  };
  
  return (
   <div className="sm:container">

        <Card className='w-2/4 h-fit mx-auto'>
        <CardHeader>
            <CardTitle>Add Customer</CardTitle>
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
                        <Input placeholder="PH123" {...field} />
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className='grid grid-cols-3 gap-4'>
                    <FormLabel className='my-2'>Email</FormLabel>
                    <FormControl className='col-span-2'>
                    <Input type='email' placeholder="john@rocketmail.com" {...field} />
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
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <div className='grid grid-cols-3 gap-4'>
                    <FormLabel className='my-2'>First Name</FormLabel>
                    <FormControl className='col-span-2'>
                    <Input placeholder='John' {...field} />
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
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <div className='grid grid-cols-3 gap-4'>
                    <FormLabel className='my-2'>Last Name</FormLabel>
                    <FormControl className='col-span-2'>
                    <Input placeholder='Smith' {...field} />
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
            name="policies"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <div className='grid grid-cols-3 gap-4'>               
                <FormLabel className='my-2'>Policies</FormLabel>
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
                            ? policies.data.find(
                                (item) => item.policy_name === field.value
                            )?.policy_name
                            : "Select Policy"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search policy..." />
                        <CommandList>
                        <CommandEmpty>No policy found.</CommandEmpty>
                        <CommandGroup>
                            {policies.data.map((item) => (
                            <CommandItem
                                value={item.policy_name}
                                key={item.policy_name}
                                onSelect={() => {
                                form.setValue("policies", item.policy_name)
                                }}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    item.policy_name === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                                />
                                {item.policy_name}
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