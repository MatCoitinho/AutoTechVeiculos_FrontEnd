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
import { CarNotFoundForm } from "./forms/carNotFoundForm";

const CarNotFoundDialog = () => {
  const [carNotFound, setOpenCarNotFound] = useState(false);

  return (
    <Dialog
      onOpenChange={() => setOpenCarNotFound(!carNotFound)}
      open={carNotFound}
    >
      <DialogTrigger asChild>
        <Button className="rounded-full px-5" variant="link">
          NÃO ENCONTREI O VEÍCULO QUE ESTOU PROCURANDO
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Não encontrou o veículo que estava procurando?
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo e nós adicionaremos na lista de desejos
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CarNotFoundForm
            closeCarNotFoundForm={() => setOpenCarNotFound(!carNotFound)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarNotFoundDialog;
