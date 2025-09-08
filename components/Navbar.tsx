import Image from "next/image";
//import Link from "next/link";

export default function Navbar(){
    return(
        <header className="w-full bg-white">
            <nav className="flex justify-between px-6 py-4">
                <div className="relative">
                    {/*Desktop logo */}
                    <Image
                        src="/printforge_logo.svg"
                        alt="printforge logo"
                        width={200}
                        height={40}
                        className="hidden md:block w-[200px] h-auto"
                        priority
                    />
                    {/*Mobile Logo */}
                    <Image
                        src="/printforge_logo.svg"
                        alt="printforge logo"
                        width={40}
                        height={40}
                        className="block md:hidden w-[40px] h-auto"
                        priority
                    />
                </div>
                <ul className="flex items-center gap-4">
                    <a href="">3D Model</a>
                    <a href="/about">About</a>
                </ul>
            </nav>

        </header>
    )
}