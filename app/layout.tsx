import './globals.css';
import { NavbarProvider } from './context/NavbarProvider';
export const metadata = {
  title: `OsamaSalman's Portfolio`,
  description: 'Created by Osama Salman',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className=' bg-primaryBgColor'>
        <NavbarProvider>
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}
