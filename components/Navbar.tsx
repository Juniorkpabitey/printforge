import Image from "next/image";
import PrintForge from '@/public/printforge_logo.svg'
import Link from "next/link"

export default function Navbar(){
    return(
        <header className="w-full bg-white">
            <nav className="flex justify-between px-6 py-4">
                <Link href="/">
                <div className="relative">
                    {/*Desktop logo */}
                    <Image
                        src={PrintForge.src}
                        alt="printforge logo"
                        width={200}
                        height={40}
                        className="hidden md:block w-[200px] h-auto"
                        priority
                    />
                    {/*Mobile Logo */}
                    <Image
                        src={PrintForge.src}
                        alt="printforge logo"
                        width={60}
                        height={60}
                        className="block md:hidden w-[40px] h-auto"
                        priority
                    />
                </div>
                </Link>
                <ul className="flex items-center gap-4">
                    <Link href="/3d-models">3D Model</Link>
                    <Link href="/about">About</Link>
                </ul>
            </nav>

        </header>
    )
}