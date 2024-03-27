import Image from "next/image";
import backgroundImage from '../../public/home/book-bg.png';
import Link from "next/link";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        src={backgroundImage}
        alt="background image"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="blur-sm"
      />


      <div className="flex flex-col justify-center items-center bg-purple-100 rounded-md p-2 lg:w-2/5  z-10 h-1/4">

        <div className="flex pb-5 mb-5 text-5xl text-purple-800 gap-2">
          <FaWandMagicSparkles className="w-12 h-12" />
          <p>LitLab</p>
        </div>

        <div>
          <Link href={'/store'} className="bg-purple-500 text-white rounded-sm p-2">
            Take me to the store
          </Link>
        </div>
      </div>

    </div>
  );
}
