"use client";

import { useRouter } from "next/navigation";  

export default function HomePage() {

  const router = useRouter();

  const myItems = (e) => {
      e.preventDefault();
    router.push("/items"); } 

    const myShops = (e) => {
      e.preventDefault();
      router.push("/shops")
    }

      const account = (e) => {
      e.preventDefault();
      router.push("/account")
    }

      const home = (e) => {
      e.preventDefault();
      router.push("/home")
    }




  return (

    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-50 bg-purple-900 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">MagicBank</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:text-cyan-300 hover:cursor-pointer" onClick={home}>Home</a>
          <a  className="hover:text-cyan-300 hover:cursor-pointer"  onClick={account}>Account</a>
          <a className="hover:text-cyan-300 hover:cursor-pointer" onClick={myItems}>My Items</a>
          <a className="hover:text-cyan-300 hover:cursor-pointer" onClick={myShops}>My Shops</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 bg-orange-50">
        <form className="mb-8">
          <input type="text" placeholder="Search..." className="border-2 border-purple-600 text-stone-700 rounded px-4 py-2 w-1/2"/>
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
          >
            Search
          </button>
        </form>

        {/* Results placeholder */}
        <div className="bg-white rounded shadow p-6">
          <p className="text-gray-500">No results yet.</p>
        </div>
      </main>
    </div> 
    );
}