'use client'

import './globals.css'
import Image from 'next/image';
import houseSVG from './assets/house.svg'
import usersSVG from './assets/users.svg'
import walletSVG from './assets/wallet.svg'
import Link from 'next/link';
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import {
  LogOut,
  Settings,
  User,
} from "lucide-react"
 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



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
        <section className='w-24 bg-white'>
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
                      width={38}
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

            <Tooltip>
              <TooltipTrigger asChild>
              <Link href='/policies'>
              <Image className={
                        path == '/policies' ?
                        'mb-12 mx-auto p-2 rounded opacity-50 hover:opacity-100 bg-gray-300'
                        : 'mb-12 mx-auto p-2 rounded opacity-50 hover:opacity-100'
                    }
                  priority
                  width={38}
                  src={walletSVG}
                  alt="Wallet Icon"
                />
              </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>
                <p>Policies</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href='/customers'>
                <Image className={
                        path == '/customers' ?
                        'mb-12 mx-auto p-2 rounded opacity-50 hover:opacity-100 bg-gray-300'
                        : 'mb-12 mx-auto p-2 rounded opacity-50 hover:opacity-100'
                    }
                    priority
                    width={38}
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
          <header className='h-24 max-h-24 flex flex-row'>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='relative mx-auto me-8 mt-4'>
                <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center text-center p-5 shadow-xl">
                    AT
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          </header>

          <section>
            {children}

          </section>
        </section>
        
      </body>
    </html>
  );
}
