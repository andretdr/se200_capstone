'use client'

import createUser from './create-user';
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
import { Input } from "@/components/ui/input"

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6),
});

export default function RegisterPage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });
  
  const handleRegistration = async (data) => {
    try {
      console.log(data);
      await createUser(data);
    } catch (error) {
      console.error('Error creating user:', error)
    }
  };
  
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Create User</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegistration)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Tom Tan" {...field} />
                </FormControl>
                <FormDescription>
                  This is your full name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tom@email.com" {...field} />
                </FormControl>
                <FormDescription>
                  This is your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormDescription>
                  This is your password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
    // <form onSubmit={handleSubmit(handleRegistration)}>
    //   <div>
    //     <label>Name</label>
    //     <input name="name" {...register("name")} />
    //     {errors?.name && <p>{errors.name.message}</p>}
    //   </div>
    //   <div>
    //     <label>Email</label>
    //     <input type="email" name="email" {...register("email")} />
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input type="password" name="password" {...register("password")} />
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>
  )
}