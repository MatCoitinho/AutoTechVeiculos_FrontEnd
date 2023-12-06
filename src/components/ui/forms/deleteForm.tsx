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
import { Input } from "../input"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useToast } from "../use-toast"
import { useAuth } from "../../../hooks/useAuth"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
  password: z.string()
})

interface IDeleteFormProps {
  closeDelete: () => void;
}

export function DeleteForm({ closeDelete }: IDeleteFormProps) {
  const { signOut } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    if(!data.password) {
      toast({
        title: 'Erro',
        description: 'Preencha todos os campos',
        variant: 'destructive',
        duration: 5000
      })
    } else {
      toast({
        title: 'Tudo certo!',
        description: 'Sua conta está sendo deletada',
        duration: 5000
      })
    }
    await signOut()
    setIsLoading(false)
    closeDelete()
    setTimeout(() => router.push('/'), 2000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

        <Button type="button" disabled={isLoading} onClick={form.handleSubmit(onSubmit)}>
          { isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }
          Deletar conta
        </Button>
      </form>
    </Form>
  )
}
