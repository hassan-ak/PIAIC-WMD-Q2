import Image from 'next/image';
import { Inter } from '@next/font/google';
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] });

const var1 = 21;

export default function Home() {
  return (
    <>
      <h1>Class 20 - 2023/01/08</h1>
      <p>Hello World</p>
      <p>{var1}</p>
    </>
  );
}
