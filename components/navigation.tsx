import Link from "next/link";

export default function Navigation() {
    return (
        <header className="container flex flex-row items-center justify-between mx-auto px-5 py-14 max-w-screen-lg">
            <div>
                <Link href="/">
                <a className="text-4xl font-bold text-red-400 hover:text-red-300 ">ToraのWebsite</a>
                </Link>
            </div>
            <div>
                <nav className="flex items-center font-bold ">
                    <ul className="flex justify-end ">
                        <li className="ml-8 ring-4 bg-gradient-to-r from-white via-gray-300 to-gray-700  rounded-sm hover:underline hover:opacity-75">
                            <Link href="/">
                                <a className="p-3">Home</a>
                            </Link>
                        </li>
                        <li className="ml-8 ring-4 bg-green-100 rounded-sm hover:underline hover:opacity-75">
                            <Link href="/about">
                                <a className="p-3">About</a>
                            </Link>
                        </li>
                        <li className="ml-8 ring-4 bg-green-100 rounded-sm hover:underline hover:opacity-75">
                            <Link href="/contact">
                                <a className="p-3">contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}