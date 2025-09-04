//import Link from "next/link";

export default function Navbar(){
    return(
        <header className="w-full bg-white">
            <nav className="flex justify-between px-6 py-4">
                <div className="relative">
                    {/*Desktop logo */}
                    <img src="/printforge_logo.svg" alt="printforge logo" className="w-[200px] h-auto hidden md:block"/>
                    {/*Mobile Logo */}
                    <img src="/printforge_logo.svg" alt="printforge logo" className="w-[40px] h-auto block md:hidden"/>
                </div>
                <ul className="flex items-center gap-4">
                    <a href="">3D Model</a>
                    <a href="">About</a>
                </ul>
            </nav>

        </header>
    )
}