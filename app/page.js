"use client"

import { useEffect, useState } from "react"
import Definition from "@/components/Definition";

export default function Home() {

  const [word, setWord] = useState();
  const [all , setAll] = useState([]);
  const [main, setMain] = useState([]);

  const dataApi = async() =>{
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const datas = await data.json()
    console.log(datas);
    setAll(datas);
    setMain(datas[0]);
    // console.log(all)
    // console.log(main)
  };

  useEffect(()=>{
    dataApi();
  },[]);

  const search = () => {
    dataApi();
    setWord("");
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl text-center">
            Dictionary
          </div>
         
          <div className="py-3 pb-5 justify-center content-center flex">
            <input
              type="text"
              className="block mx-2 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type your word"
              id="floatingInput"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={search}
            >search</button>
          </div>
        </div>
        {word === "" ? (
          <Definition all={all} main={main} />
        ) : (
          <div className="uppercase text-center font-bold underline text-white">
            type a word in the box
          </div>
          
        )}

      </div>
    </>
  )
}



