"use client";

import { useRouter } from "next/navigation";  
import { useState } from "react";
import { marked } from "marked";

export default function HomePage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState("");
  const [rarity, setRarity] = useState("");
  const [customRarity, setCustomRarity] = useState("");
  const [description, setDescription] = useState(`## Ability  
Big things to say!

- This is a list!  

| Dice     | Table |
| ----------- | ----------- |
| Table     | Awesome     |
| Table     | awesome     |`);



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

     const openModal = (e) => {
      e.preventDefault();
      setShowModal(true);
    }

 const closeModal = () => setShowModal(false);

 const getRarityStyle = (rarity) => {
  switch (rarity.toLowerCase()) {
    case "common":
      return "bg-gray-200 text-gray-800";
    case "uncommon":
      return "bg-green-200 text-green-800";
    case "rare":
      return "bg-blue-200 text-blue-800";
    case "very rare":
      return "bg-purple-200 text-purple-800";
    case "legendary":
      return "bg-yellow-200 text-yellow-900";
    case "artifact":
      return "bg-red-200 text-red-800";
    case "custom":
      return "bg-black text-white";
    default:
      return "bg-stone-100 text-stone-700";
  }
};


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
      
      <main className="flex-1 p-10 bg-orange-50">
        
        <form className="mb-8">
          <input type="text" placeholder="Search..." className="border-2 border-purple-600 text-stone-700 rounded px-4 py-2 w-1/2"/>
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"
          >
            Search
          </button>
          <button   onClick={openModal} className="text-2xl text-white bg-purple-900 border-2 rounded-2xl ml-4 p-2
           hover:bg-purple-700 hover:cursor-pointer" > Create New Item </button>
        </form>
        
         {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-[90vw] max-w-[1200px] max-h-[90vh] overflow-auto">

              <h2 className="text-xl font-bold mb-4 text-purple-900">Create New Item</h2>
              <div className="flex gap-10">
                {/* Left: Form */}
                <form className="w-1/2" onSubmit={e => { e.preventDefault(); /* handle save */ }}>
                  <label className="block mb-2 text-gray-700">Item Name</label>
                  <input
                    type="text"
                    className="border text-stone-500 border-purple-400 rounded px-3 py-2 w-full mb-4"
                    placeholder="Defaultus"
                    value={itemName}
                    onChange={e => setItemName(e.target.value)}
                  />

          <label className="block mb-2 text-gray-700">Rarity</label>
<select
  className="border text-stone-700 border-purple-400 rounded px-3 py-2 w-full mb-4 bg-white"
  value={rarity}
  onChange={(e) => setRarity(e.target.value)}
>
  <option value="">No Rarity</option>
  <option value="common">Common</option>
  <option value="uncommon">Uncommon</option>
  <option value="rare">Rare</option>
  <option value="very rare">Very Rare</option>
  <option value="legendary">Legendary</option>
  <option value="artifact">Artifact</option>
  <option value="custom">Custom</option>
</select>


{rarity === "custom" && (
  <input
    type="text"
    className="border text-stone-500 border-purple-400 rounded px-3 py-2 w-full mb-4"
    placeholder="Enter custom rarity"
    value={customRarity}
    onChange={(e) => setCustomRarity(e.target.value)}
  />
)}


                  <label className="block mb-2 text-gray-700">Description/Lore</label>
             <textarea
  className="border text-stone-500 border-purple-400 rounded px-3 py-2 w-full mb-4 h-64 resize-y"
  value={description}
  onChange={e => setDescription(e.target.value)}
/>


                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-purple-900 text-white rounded hover:bg-purple-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
        
               <div className="w-2/3 border-l pl-6 overflow-auto max-h-[500px]">
  <div className=" font-bold text-stone-700 mb-2">Preview</div>

  
  <h1 className="text-3xl font-serif  font-extrabold text-stone-800 mb-2">{itemName || "Defaultus"}</h1>

<p className={`inline-block font-semibold px-3 py-1 rounded-full mb-4 ${
  getRarityStyle(rarity === "custom" ? "custom" : rarity)
}`}>
  {rarity === "custom"
    ? (customRarity || "Custom")
    : (rarity ? rarity.charAt(0).toUpperCase() + rarity.slice(1) : "No Rarity")}
</p>



  {/* Markdown description */}
  <div
    className="markdown-preview max-w-none prose prose-stone"
    dangerouslySetInnerHTML={{ __html: marked.parse(description || "*Nothing to preview yet.*") }}
  />
</div>

              </div>
            </div>
          </div>
        )}
        

        {/* Results placeholder */}
        <div className="bg-white rounded shadow p-6">
          <p className="text-gray-500">No results yet.</p>
        </div>
      </main>
    </div> 
    );
}

