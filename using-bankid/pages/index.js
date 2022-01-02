import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import NavbarTailwind from '../components/NavbarTailwind';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>Hello World</div>
    </div>
  )
}