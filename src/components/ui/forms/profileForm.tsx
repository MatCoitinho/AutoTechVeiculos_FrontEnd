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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../input"
import { useToast } from "../use-toast"
import { useCallback, useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useAuth } from "../../../hooks/useAuth"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { DeleteForm } from "./deleteForm"

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  cpf: z.string(),
  address: z.string(),
})

interface IProfileFormProps {
}

export function ProfileForm({ }: IProfileFormProps) {
  const { user, updateUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const { toast } = useToast()

  const atualizeProfile = useCallback(() => {
    if(user) {
      form.setValue('name', user.name)
      form.setValue('email', user.email)
      form.setValue('phone', user.phone)
      form.setValue('cpf', user.cpf)
      form.setValue('address', user.address)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  useEffect(() => {
    atualizeProfile()
  }, [user, atualizeProfile])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true)
    const res = await updateUser(data)
    const valoresClientes = {
      cpf: user?.cpf,
      telefone: user?.phone,
      endereco: user?.address,
      email: user?.email, 
      first_name: user?.name
    }

    if(res) {
      toast({
        title: "Dados atualizados",
        description: "Seus dados foram atualizados com sucesso",
      })
    } else {
      toast({
        title: "Erro ao atualizar dados",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      })
    }
    setLoading(false)
  }

  function changeDelete() {
    setOpenDelete(!openDelete)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <Input onChange={field.onChange} defaultValue={field.value} value={field.value}/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input onChange={field.onChange} defaultValue={field.value}/>
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <Input onChange={field.onChange} defaultValue={field.value}/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <Input onChange={field.onChange} defaultValue={field.value}/>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endreço</FormLabel>
              <Input onChange={field.onChange} defaultValue={field.value}/>
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="submit" className="w-full" disabled={loading}>
            { loading && <Loader2 className="animate-spin mr-2"/> }
            Atualizar dados
          </Button>

          <Dialog onOpenChange={changeDelete} open={openDelete}>
            <DialogTrigger asChild>
              <Button type="button" variant='destructive' className="w-full">
                Excluir conta
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Excluir conta</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <DeleteForm closeDelete={changeDelete}/>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </Form>
  )
}
