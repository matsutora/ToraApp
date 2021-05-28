

import Image from "next/image";
export default function About() {
    return (
        <div className="container">
            <h1 className="text-2xl ">Profile</h1>
            <p>神奈川県で生まれ３歳からセブ島に住み現在８歳</p>
            <p>コロナの影響でで毎日家でゴロゴロしているのでプログラミングを始める。ついにサイト作成!</p>
            <p>現在react学習中。</p>
            <div className="flex justify-end">
            <Image 
                className="object-cover rounded-full"
                src="/author.jpg"
                alt="author"
                width={200}
                height={200}
            />
            <p className="content-center">Tora</p>
            </div>
        </div>
    )
}