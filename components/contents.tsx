import Image from 'next/image'
import Link from "next/link";

export default function Contents() {
    return(
        <div className="container flex my-10 ">
            <ul className="flex flex-row justify-between flex-auto">
                <li className="px-5">
                <Image 
                className="object-cover rounded"
                src="/blog.jpg"
                alt="top"
                width={200}
                height={200}
                />
                <div className="flex justify-center text-2xl">
                    <Link href="../post/post.tsx">
                    Blog
                    </Link>
                </div>
                </li>
                <li className="px-5">
                <Image 
                className="object-cover rounded"
                src="/programming.jpg"
                alt="top"
                width={200}
                height={200}
                />
                <div className="flex justify-center text-2xl">
                    <Link href="">
                    Programming
                    </Link>
                </div>
                </li>
                <li className="px-5">
                <Image 
                className="object-cover rounded"
                src="/youtube.jpg"
                alt="top"
                width={200}
                height={200}
                />
                <div className="flex justify-center text-2xl">
                    <Link href="https://www.youtube.com/channel/UC05lR5c_7zzy-eMoWIDdX9A">
                    Youtube
                    </Link>
                </div>
                </li>
                <li className="px-5">
                <Image 
                className="object-cover rounded"
                src="/blog.jpg"
                alt="top"
                width={200}
                height={200}
                />
                <div className="flex justify-center text-2xl">
                    <Link href="">
                    Gallery
                    </Link>
                </div>
                </li>
            </ul>
        </div>
    )
}