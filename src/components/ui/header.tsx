"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Loader2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchForm } from "./forms/searchForm";
import { useRouter } from "next/navigation";
import { LoginForm } from "./forms/loginForm";
import { useAuth } from "../../hooks/useAuth";
import { SignedMenu } from "./signedMenu";
import { SolicitationAddsForm } from "./forms/solicitationAddsForm";
import { createClient } from "@/app/api/createClient";
import CarNotFoundDialog from "./carNotFoundDialog";

interface IHeaderProps {}

function Header({}: IHeaderProps) {
  const { setTheme, theme } = useTheme();
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const [openSolicitationAdds, setOpenSolicitationAdds] = React.useState(false);
  const [usuario, setUsuario] = useState({
    first_name: "",
    last_name: "",
    senha: "",
    emails: "",
    cpfs: "",
    telefones: "",
    enderecos: "",
  });
  const router = useRouter();
  const { signed, signIn, loading } = useAuth();

  function changeOpenSearch() {
    setOpenSearch(!openSearch);
  }

  function changeOpenLogin() {
    setOpenLogin(!openLogin);
  }

  function changeOpenRegister() {
    setOpenRegister(!openRegister);
  }

  function changeOpenSolicitationAdds() {
    setOpenSolicitationAdds(!openSolicitationAdds);
  }

  const value = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  };
  const click = () => {
    const partes = usuario.first_name.split(" ");
    const segundaParte = partes.shift();
    const a = partes.join("");
    const user = {
      primeiroNome: usuario.first_name,
      ultimoNome: String(a),
      senha: usuario.senha,
      email: usuario.emails,
      CPF: usuario.cpfs,
      telefone: usuario.telefones,
      endereco: usuario.enderecos,
    };
    createClient(user);
    changeOpenRegister()
  };
  return (
    <header className="w-screen px-2 py-4 z-50 flex flex-col items-center justify-center fixed bg-background drop-shadow-xl">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <div className="w-64 cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src={theme == "light" ? "/autotech.png" : "/logo.png"}
            width={75}
            height={10}
            alt="Autotech"
          />
        </div>

        <Dialog onOpenChange={changeOpenSearch} open={openSearch}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              onClick={changeOpenSearch}
              className="w-96 rounded-full text-start flex items-start justify-start"
            >
              Busque um veículo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Busque um veículo</DialogTitle>
              <DialogDescription>
                Informe as opções desejadas para a busca.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <SearchForm closeSearch={changeOpenSearch} />
            </div>
          </DialogContent>
        </Dialog>

        <nav className="flex gap-4 items-center w-64">
          {loading ? (
            <Loader2 className="animate-spin mx-auto" />
          ) : signed ? (
            <SignedMenu />
          ) : (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-full px-5" variant="outline">
                    CADASTRAR
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Faça seu cadastro</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Input
                      name="first_name"
                      id="name"
                      placeholder="Nome completo"
                      className="w-full"
                      onChange={value}
                    />
                    <Input
                      name="emails"
                      id="email"
                      placeholder="Email"
                      className="w-full"
                      onChange={value}
                    />
                    <Input
                      name="telefones"
                      id="phone"
                      placeholder="Telefone"
                      className="w-full"
                      onChange={value}
                    />
                    <Input
                      name="cpfs"
                      id="cpf"
                      placeholder="CPF"
                      className="w-full"
                      onChange={value}
                    />
                    <Input
                      name="enderecos"
                      id="address"
                      placeholder="Endereço"
                      className="w-full"
                      onChange={value}
                    />
                    <Input
                      name="senha"
                      id="password"
                      placeholder="Senha"
                      type="password"
                      className="w-full"
                      onChange={value}
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={click}>
                      Cadastrar
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog onOpenChange={changeOpenLogin} open={openLogin}>
                <DialogTrigger asChild>
                  <Button
                    className="rounded-full px-5"
                    onClick={changeOpenLogin}
                  >
                    ENTRAR
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Faça seu login</DialogTitle>
                    <DialogDescription>
                      Informe seu email e sua senha para aproveitar nossas
                      funcionalidades.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <LoginForm closeLogin={changeOpenLogin} signIn={signIn} />
                  </div>
                </DialogContent>
              </Dialog>
            </>
          )}
        </nav>
      </div>

      <div className="w-screen flex justify-between items-center border border-b-white/10 my-2" />
      <div className="max-w-7xl w-full flex justify-between items-center pr-5">
        <nav className="flex gap-4 items-center">
          <Dialog
            onOpenChange={changeOpenSolicitationAdds}
            open={openSolicitationAdds}
          >
            <DialogTrigger asChild>
              <Button
                className="rounded-full px-5"
                variant="link"
                onChange={changeOpenSolicitationAdds}
              >
                Venda ou alugue seu veículo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Anuncie seu veículo</DialogTitle>
                <DialogDescription>
                  Preencha os campos com as informações do seu veículo.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <SolicitationAddsForm
                  closeSolicitationAdds={changeOpenSolicitationAdds}
                />
              </div>
            </DialogContent>
          </Dialog>
          <Button className="rounded-full px-5" variant="link">
            Alugue um veículo
          </Button>
          <Button className="rounded-full px-5" variant="link">
            Reserve um veículo
          </Button>
          <CarNotFoundDialog />
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export { Header };
