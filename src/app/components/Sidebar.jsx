import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';

export default function Sidebar() {
    return (
        <div>
            {/* LOGO  */}
            <div className="bg-purple-500 mb-5 flex h-20 items-end justify-start rounded-md p-4">
                <Logo />
            </div>


            <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <form>
                    <button className="md:mt-[200px] flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
                        <ArrowLeftOnRectangleIcon className="w-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    )
}
