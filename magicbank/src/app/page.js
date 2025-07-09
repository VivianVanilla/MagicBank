"use client";
import { useRouter } from "next/navigation";  

export default function login() {

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication here
    router.push("/home"); } 

  return (
    <div>
      <h1>Welcome to MagicBank</h1>

      <form onSubmit={handleSubmit}> username: <input />  
            password: <input />  
            
            <button type="submit" className="border-cyan-300 border-4" > Login </button>


              </form> 

    </div>
  );
}