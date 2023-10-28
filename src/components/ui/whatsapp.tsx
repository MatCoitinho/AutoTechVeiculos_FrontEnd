import React from 'react';
import { Button } from './button';
import { MessageCircleIcon } from 'lucide-react';

interface IWhatsButtonProps {}

function WhatsButton({}: IWhatsButtonProps) {
  return(
    <Button className='fixed rounded-full bottom-12 right-12'>
      <MessageCircleIcon className='mr-4'/>
      Iniciar uma conversa
    </Button>
  );
}

export {WhatsButton};