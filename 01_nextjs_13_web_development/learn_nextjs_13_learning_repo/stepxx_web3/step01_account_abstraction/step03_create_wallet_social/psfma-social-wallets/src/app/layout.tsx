import './globals.css';
import { Header } from '@/components/appComponents/Header';

export const metadata = {
  title: 'Social Wallets',
  description: 'Social Wallets in next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>
        <Header />
        {children}
      </body>
    </html>
  );
}
