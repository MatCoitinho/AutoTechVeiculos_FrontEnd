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
import { patchSenha } from "@/app/api/patchSenha"

const FormSchema = z.object({
  password: z.string(),
  confirmPassword: z.string()
})

interface IChangePasswordFormProps {
  closeChangePassword: () => void;
}

export function ChangePasswordForm({ closeChangePassword }: IChangePasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
      
      let email = localStorage.getItem('@autotech:user')
      let vaule = email?.replace(/["/]/g, '');
      let retorno
      const senhas = {
        senha_atual: data.password,
        nova_senha: data.confirmPassword, 
        email: vaule
      }
      retorno = await patchSenha(String(vaule),senhas);
      if(retorno === 200){
        toast({
          title: 'Tudo certo!',
          description: 'Senha alterada com sucesso',
          duration: 5000
        })
      } else {
        toast({
          title: 'Algo deu errado!',
          description: 'Não foi possível alterar a senha',
          duration: 5000
        })
      }
    setIsLoading(false)
    closeChangePassword()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Antiga Senha</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nova Senha</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          { isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }
          Alterar senha
        </Button>
      </form>
    </Form>
  )
}
