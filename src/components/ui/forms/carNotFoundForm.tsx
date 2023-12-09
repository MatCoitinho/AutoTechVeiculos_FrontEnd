"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../input";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { createFavorito } from "@/app/api/createFavorite";
import { parseCookies } from "nookies";

const FormSchema = z.object({
  model: z.string(),
  year: z.string(),
  brand: z.string(),
});

interface ICarNotFoundFormProps {
  closeCarNotFoundForm: () => void;
}

export function CarNotFoundForm({
  closeCarNotFoundForm,
}: ICarNotFoundFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const {'AutoTech_token': token} = parseCookies()
    if(!token) return
    setIsLoading(true);
    let email = localStorage.getItem('@autotech:user')
    let vaule = email?.replace(/["/]/g, '');
    const dados = {
      email: String(vaule),
      modelo: data.model,
      marca: data.brand,
      ano: data.year
    }
    createFavorito(dados)
    
    closeCarNotFoundForm();
    setIsLoading(false);
    //api
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Modelo</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ano</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Adicionar a lista de desejos
        </Button>
      </form>
    </Form>
  );
}
