//import Image from "next/image";
//import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex w-full justify-between px-12 py-6">
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
      <div className="flex-1 space-y-6">
        <p className="hidden text-sm text-gray-600 uppercase md:block">YOUR GO-TO PLATFROM FOR 3D PRINTING FILES</p>
        <h1 className="text-4xl font-bold md:text-5xl">Discover whats possible with 3D printing</h1>
        <p className="text-lg text-gray-600 py-4">Join our community of creators and explore vast library of user submitted models</p>
        <div className="flex gap-4">
             <button className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white">BROWSE MODELS</button>
        </div>
      </div>
      {/* Desktop*/}
      <img src="/hero_img.png" alt="hero_image" className="width={350}"/>
      {/* Mobile*/}
    </section>
    </main>
  );
}
