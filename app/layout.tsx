import './globals.css'
import Image from 'next/image';
import Link from 'next/link';
import houseSVG from './assets/house.svg'
import usersSVG from './assets/users.svg'
import walletSVG from './assets/wallet.svg'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='flex flex-row'>
        <section className='w-32 bg-white'>
          <div>


          <Link href='/'>
            <Image className='mb-12 mt-24 mx-auto'
              priority
              width={30}
              src={houseSVG}
              alt="Home Icon"
            />
          </Link>

          <Link href='/policies'>
            <Image className='my-12 mx-auto'
              priority
              width={30}
              src={walletSVG}
              alt="Wallet Icon"
            />
          </Link>

          <Link href='/customers'>
            <Image className='my-12 mx-auto'
              priority
              width={30}
              src={usersSVG}
              alt="Users Icon"
            />
          </Link>


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
