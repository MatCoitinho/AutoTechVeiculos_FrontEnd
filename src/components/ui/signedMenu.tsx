'use client';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { User, LogOut, ChevronDown, ShieldCheckIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './button';
import { useAuth } from '../../hooks/useAuth';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { DialogHeader } from './dialog';
import { ChangePasswordForm } from './forms/passwordForm';
import { useRouter } from 'next/navigation';

interface ISignedMenuProps { }

function SignedMenu({ }: ISignedMenuProps) {
  const router = useRouter()
  const { user, signOut } = useAuth()
  const [openChangePassword, setOpenChangePassword] = useState(false)

  function changeOpenChangePassword() {
    setOpenChangePassword(!openChangePassword)
  }

  function goToProfile() {
    router.push('/profile')
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className='flex ml-auto mr-5'>
            {user && user.name}
            <ChevronDown className='ml-2' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem onClick={goToProfile}>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuItem onClick={changeOpenChangePassword}>
              <ShieldCheckIcon className="mr-2 h-4 w-4" />
              <span>Alterar senha</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog onOpenChange={changeOpenChangePassword} open={openChangePassword}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Alterar senha</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <ChangePasswordForm closeChangePassword={changeOpenChangePassword} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { SignedMenu };