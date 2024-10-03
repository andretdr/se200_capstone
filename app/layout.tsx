'use client'

import './globals.css'
import Image from 'next/image';
import houseSVG from './assets/house.svg'
import usersSVG from './assets/users.svg'
import walletSVG from './assets/wallet.svg'
import { usePathname } from "next/navigation";

import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // lets me know which page user is on
  const path = usePathname();

  return (
    <html lang="en">
      <body className='flex flex-row'>
        <section className='w-32 bg-white'>
          <div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>

                <Link href='/'>
                
                  {
                    <Image className={
                        path == '/' ?
                        'mb-12 mt-24 mx-auto p-2 rounded opacity-50 hover:opacity-100 bg-gray-300'
                        : 'mb-12 mt-24 mx-auto p-2 rounded opacity-50 hover:opacity-100'
                    }
                      priority
                      width={45}
                      src={houseSVG}
                      alt="Home Icon"
                    />
                  }
              </Link>

              </TooltipTrigger>
              <TooltipContent side='right'>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>

              <Link href='/policies'>
              <Image className={
                        path == '/policies' ?
                        'mb-12 mx-auto p-2 rounded opacity-50 hover:opacity-100 bg-gray-300'
                        : 'mb-12 mx-auto p-2 rounded opacity-50 hover:opacity-100'
                    }
                  priority
                  width={45}
                  src={walletSVG}
                  alt="Wallet Icon"
                />
              </Link>

              </TooltipTrigger>
              <TooltipContent side='right'>
                <p>Policies</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>

                <Link href='/customers'>
                <Image className={
                        path == '/customers' ?
                        'mb-12 mx-auto p-2 rounded opacity-50 hover:opacity-100 bg-gray-300'
                        : 'mb-12 mx-auto p-2 rounded opacity-50 hover:opacity-100'
                    }
                    priority
                    width={45}
                    src={usersSVG}
                    alt="Users Icon"
                  />
                </Link>

              </TooltipTrigger>
              <TooltipContent side='right'>
                <p>Customers</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>


          </div>

        </section>

        <section className='w-full h-screen bg-slate-200 flex flex-col'>
          <header className='h-24'>
            <div className='mx-auto'>header</div>
          </header>

          <section>
            {children}
          </section>

        </section>
        
        
        
      </body>
    </html>
  );
}
