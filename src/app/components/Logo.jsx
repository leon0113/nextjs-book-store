import Link from 'next/link'
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function Logo() {
    return (
        <Link
            href='/store'
        >
            <div className="flex text-xl text-white gap-1 leading-none">
                <FaWandMagicSparkles className="w6 h-6" />
                <p>LitLab</p>
            </div>
        </Link>
    )
}
