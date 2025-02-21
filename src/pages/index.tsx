import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs'
import { api } from "~/utils/api";
import Dashboard from '~/components/dashboard/dashboard';

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const user = useUser();
  return (
    <>
      <Head>
        <title>TableAir</title>
        <meta name="description" content="An AirTable clone"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SignedIn>
          <Dashboard />
        </SignedIn>
        <SignedOut>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            
            <div className="flex items-center">
              <div className='relative w-40 h-40 mr-8'>
                <Image src="/airtable.svg" alt="Logo" layout='fill' objectFit='contain' />
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                TableAir
              </h1>
            </div>
            
            <div className="border rounded-full bg-blue-800 text-5xl p-10 w-72 text-center text-white hover:bg-blue-500">
              <SignInButton />
            </div>
            <p className="text-2xl text-black">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
          </div>
        </SignedOut>
      </main>
    </>
  );
}
