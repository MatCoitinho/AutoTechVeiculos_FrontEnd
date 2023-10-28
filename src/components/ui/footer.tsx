import { FacebookIcon, InstagramIcon, TwitchIcon } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-auto lg:flex-grow-0 flex flex-col gap-4">
            <span className="text-gray-400">Endereço: Avenida Brasil, 2012 - Centro, Campo Mourão</span>
            <div className='flex flex-col gap-2'>
              <div className="flex">
                <span className="text-gray-400 w-20">Telefone:</span>
                <span className="text-gray-400">(44) 3523-1234</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-20" />
                <span className="text-gray-400">(44) 9 9082-3211</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-20" />
                <span className="text-gray-400">(44) 9 7865-4791</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto lg:flex-grow-0">
            <div className='flex flex-col gap-2'>
              <div className="flex">
                <InstagramIcon className='text-gray-400 w-16'/>
                <span className="text-gray-400">@AutoTechVeiculos</span>
              </div>
              <div className="flex">
                <FacebookIcon className='text-gray-400 w-16'/>
                <span className="text-gray-400">@AutoTechVeiculos</span>
              </div>
              <div className="flex">
                <TwitchIcon className='text-gray-400 w-16'/>
                <span className="text-gray-400">@AutoTechVeiculos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 border border-t-gray-700 my-4 pt-4">
        <a href="#" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
