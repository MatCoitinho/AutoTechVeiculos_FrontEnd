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
import { ChangePasswordForm } from "./forms/passwordForm";

const ChangePasswordDialog = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <Dialog onOpenChange={() => setOpenLogin(!openLogin)} open={openLogin}>
      <DialogTrigger asChild>
        <Button className=" px-5" onClick={() => setOpenLogin(!openLogin)}>
          ALTERAR SENHA
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Alterar Senha</DialogTitle>
          <DialogDescription>Altere sua senha</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ChangePasswordForm
            closeChangePassword={() => setOpenLogin(!openLogin)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordDialog;
