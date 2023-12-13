"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { Input } from "../input"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { ISignInCredentials } from "../../../lib/auth"

const FormSchema = z.object({
  email: z.string().email({
    message: "Email inválido",
  }),
  password: z.string()
})

interface ILoginFormProps {
  closeLogin: () => void;
  signIn: (data: ISignInCredentials) => Promise<void>
    
  };


export function LoginForm({ closeLogin, signIn }: ILoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)
    await signIn(data)
    
    setIsLoading(false)
    closeLogin()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          { isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }
          Entrar
        </Button>
      </form>
    </Form>
  )
}
