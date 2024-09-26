'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { Archivo_Black } from "next/font/google";
import localFont from 'next/font/local';
import DaysTable, { Dhuvas_Type } from "@/components/DaysTable";

//// FONTS ////
const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"]
})
const aammuFK = localFont({
  src: "../public/assets/fonts/aammufkF.ttf"
})
const utheemu = localFont({
  src: "../public/assets/fonts/mvutheemuREGULAR.ttf",
})
const waheed = localFont({
  src: "../public/assets/fonts/MVAWaheed.ttf",
})

/////////////////

export default function Home() {
  const [dhuvas, setDhuvas] = useState<Dhuvas_Type[]>(Array)
  const [searchHidden, setSearchHidden] = useState(false)
  const [numCount, setNumCount] = useState(0)
  const [loadingDots, setLoadingDots] = useState("")
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddPopup, setAddPopup] = useState(false)


  useEffect(() => {
    const get_dhuvas = async () => {
      try {
        const response = await axios.get("http://10.12.29.68:8000/dhuvas")
        let result = response.data.result
        setDhuvas(result)
        return result
      } catch (error: any) {
        console.log(error.message)
      }
    }
    if (dhuvas.length === 0) get_dhuvas();
  }, [dhuvas])

  useEffect(() => {
    const num_counter = async () => { setNumCount(numCount + 1); }

    setTimeout(function() {
      if (numCount < 365) num_counter();
    }, 0.3);
  }, [numCount])

  useEffect(() => {
    const loading = async (num: number) => { setLoadingDots(".".repeat(num)) }

    setTimeout(function() {
      let x = 1
      if (x <= 3) {
        loading(x);
        x = x + 1
      } else {
        x = 1
        loading(x); 
      }
    }, 0.1);
  }, [loadingDots])

  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 p-4">
      <h1 className={`title ${aammuFK.className} text-[5rem] font-bold mb-10`}>
        {/* <span className="text-[6rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-600 inline-block">{numCount}</span> Dhuvas */}
        <span>ދުވަސް </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-600 inline-block">{numCount}</span>
      </h1>
      <div dir="rtl" className={`${waheed.className} text-xl`}>
        <div className="flex flex-col text-center">
          {/* <label htmlFor="month" className="">މަސް ނަންގަވާ:</label>
          <select name="month" id="month" className="px-3 py-1 bg-white text-black text-center rounded-lg">
            <option className="">January</option>
          </select> */}
          {/* <DateDropDown monthSelection={setSelectedMonth} daySelection={setSelectedDay} /> */}
        </div>
      </div>
      <div className={`${utheemu.className} text-2xl w-full`}>
        {dhuvas.length != 0 ? 
          <DaysTable 
          dhuvas={dhuvas} 
          setQuery={setSearchQuery} 
          query={searchQuery} 
          setSearchHidden={setSearchHidden}
          searchHidden={searchHidden}
          showAddPopup={showAddPopup}
          setAddPopup={setAddPopup}
          /> 
        :
          <div dir="text-center m-auto">މަޑުކޮށްލައްވާ{loadingDots}</div>
        }
      </div>
    </main>
  );
}
