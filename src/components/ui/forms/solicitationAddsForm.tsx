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
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { criarSolicitacao } from "@/app/api/createSolicitacao"

const FormSchema = z.object({
  marca: z.optional(z.string()),
  modelo: z.optional(z.string()),
  ano: z.optional(z.string()),
  quilometragem: z.string(z.string()),
  cambio: z.optional(z.string()),
  servico: z.optional(z.string()),
  tipoCombustivel: z.optional(z.string()),
})

interface ISolicitationAddsFormProps {
  closeSolicitationAdds: () => void
}

export function SolicitationAddsForm({ closeSolicitationAdds }: ISolicitationAddsFormProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if(!data.ano || !data.marca || !data.modelo || !data.quilometragem || !data.tipoCombustivel) {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Preencha todos os campos",
        variant: "destructive",
      })
    } else {
      let usuarioAtivo = localStorage.getItem('@autotech:user');
      if(usuarioAtivo)
        usuarioAtivo = usuarioAtivo.replace(/["/]/g, '')

      if(data.cambio && data.servico && usuarioAtivo){
        const form = {
          marca: data.marca,
          modelo: data.modelo,
          ano: data.ano,
          quilometragem: data.quilometragem,
          cambio: data.cambio,
          servico: data.servico,
          solicitante: String(usuarioAtivo),
          combustivel: data.tipoCombustivel,
          situacao:  false
        }
        criarSolicitacao(form)
      }

      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({
        title: "Solicitação enviada",
        description: "Aguarde o contato de um de nossos consultores"
      })
    }
    setLoading(false)
    closeSolicitationAdds()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="marca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca</FormLabel>
                <Input onChange={field.onChange} defaultValue={field.value}/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modelo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <Input onChange={field.onChange} defaultValue={field.value}/>
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="ano"
            render={({ field }) => (
              <FormItem className="w-24">
                <FormLabel>Ano</FormLabel>
                <Input onChange={field.onChange} defaultValue={field.value}/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quilometragem"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Quilometragem</FormLabel>
                <Input onChange={field.onChange} defaultValue={field.value}/>
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="cambio"
            render={({ field }) => (
              <FormItem className="w-24">
                <FormLabel>Câmbio</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent defaultValue='Manual'>
                  <SelectItem value='manual'>Manual</SelectItem>
                  <SelectItem value='automatico'>Automatico</SelectItem>
                </SelectContent>
              </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tipoCombustivel"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tipo de combustível</FormLabel>
                <Input onChange={field.onChange} defaultValue={field.value}/>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="servico"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Serviço</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent defaultValue='Aluguel'>
                  <SelectItem value="Aluguel">Aluguel</SelectItem>
                  <SelectItem value="Venda">Venda</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading}>
          { loading && <Loader2 className="animate-spin mr-2"/> }
          Enviar solicitação
        </Button>
      </form>
    </Form>
  )
}
