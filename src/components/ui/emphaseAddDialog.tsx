import { useState } from "react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { EmphaseAddForm } from "./forms/emphaseAddForm";

const EmphaseAddDialog = () => {
  const [emphaseAdd, setEmphaseAdd] = useState(false);

  return (
    <Dialog onOpenChange={() => setEmphaseAdd(!emphaseAdd)} open={emphaseAdd}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full px-5"
          onClick={() => console.log("oi")}
        >
          Destacar anuncio
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Destaque seu anúncio e venda mais rápido!</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo e nós destacaremos seu anúncio
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <EmphaseAddForm
            closeEmphaseAddForm={() => setEmphaseAdd(!emphaseAdd)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmphaseAddDialog;
