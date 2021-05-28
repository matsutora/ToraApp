import Head from 'next/head'
import Image from 'next/image'
import {Contents} from "../components/index";
import { getSortedPostsData } from '../lib/posts'
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home() {
  return (
   <div>
     <Head>
       <title>ToraのWebsite</title>
     </Head>
     <div className="mb-10 p-3 border rounded">
        <Image 
          className="object-cover rounded"
          src="/nekoten.jpg"
          alt="top"
          width={1200}
          height={500}
        />
     </div>
     <div className="flex justify-center flex-col items-center mb-10">
       <div className="text-lg mb-3">CONTENTS</div>
       <div className="border w-14"></div>
     </div>
     <Contents />

    </div>
  );
}

