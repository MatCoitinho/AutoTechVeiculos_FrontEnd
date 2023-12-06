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
import Image from "next/image";

const FormSchema = z.object({
  CPF: z.string().min(11, {
    message: "CPF inválido",
  }),
  name: z.string(),
  value: z.string(),
});

interface IEmphaseAddFormProps {
  closeEmphaseAddForm: () => void;
}

export function EmphaseAddForm({ closeEmphaseAddForm }: IEmphaseAddFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    // closeEmphaseAddForm();
    setIsLoading(false);

    // api para mostar o qrCode antes
    setShowQRCode(true);
    //api
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="CPF"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo </FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <Input onChange={field.onChange} defaultValue={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Destacar anúncio
        </Button>
        <div className="">
          <Image
            src="/qrcode.jpg"
            alt="qr-code"
            width={150}
            height={150}
            className={`rounded-md bg-cover w-full ${
              showQRCode ? "block" : "hidden"
            }`}
          />
        </div>
      </form>
    </Form>
  );
}
