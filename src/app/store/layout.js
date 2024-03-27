import Sidebar from "../components/Sidebar"

export const metadata = {
    title: 'LitLab - Buy or Rent Books',
    description: 'An Online Bookstore to Sell and Rent Used Books',
}

export default function BookStoreLayout({ children }) {
    return (

        <div className="flex  flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen ">
            <div className="flex flex-wrap p-2 justify-center bg-purple-50 fixed md:h-screen">
                <Sidebar />
            </div>
            <div className="w-full mt-48 md:mt-0">
                {children}
            </div>
        </div>
    )
}