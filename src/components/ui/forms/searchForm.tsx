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
import { useRouter } from "next/navigation"
import { Input } from "../input"

const FormSchema = z.object({
  marca: z.optional(z.string()),
  modelo: z.optional(z.string()),
  cambio: z.optional(z.string()),
  situacao: z.optional(z.string()),
  preco: z.optional(z.string()),
  ano: z.optional(z.string()),
})

interface ISearchFormProps {
  closeSearch: () => void
}

export function SearchForm({ closeSearch }: ISearchFormProps) {
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function serialize(obj: any) {
    const str = new URLSearchParams(obj).toString()
    return str;
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/search?${serialize(data)}`)
    closeSearch()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
{/*         
        <FormField
          control={form.control}
          name="marca"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="marca 1">marca 1</SelectItem>
                  <SelectItem value="marca 2">marca 2</SelectItem>
                  <SelectItem value="marca 3">marca 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="modelo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Modelo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="modelo 1">modelo 1</SelectItem>
                  <SelectItem value="modelo 2">modelo 2</SelectItem>
                  <SelectItem value="modelo 3">modelo 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cambio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Câmbio</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="cambio 1">cambio 1</SelectItem>
                  <SelectItem value="cambio 2">cambio 2</SelectItem>
                  <SelectItem value="cambio 3">cambio 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="situacao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Situação</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="situacao 1">situacao 1</SelectItem>
                  <SelectItem value="situacao 2">situacao 2</SelectItem>
                  <SelectItem value="situacao 3">situacao 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preco"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="preço 1">preço 1</SelectItem>
                  <SelectItem value="preço 2">preço 2</SelectItem>
                  <SelectItem value="preço 3">preço 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ano"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ano</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ano 1">ano 1</SelectItem>
                  <SelectItem value="ano 2">ano 2</SelectItem>
                  <SelectItem value="ano 3">ano 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="modelo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insira um Modelo</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} type="text"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Buscar</Button>
      </form>
    </Form>
  )
}
