"use client";

import { Dispatch, SetStateAction } from 'react';
import localFont from 'next/font/local';
import { X } from 'lucide-react';
import AddForm from '@/components/AddForm';

const waheed = localFont({
    src: "../public/assets/fonts/MVAWaheed.ttf",
  })

const AddPopup = (params: { 
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}) => {
    if (!params.show) return null;
    const handlePopupClose = (e: any) => { if (e.target.id === "popup-background") params.setShow(false) }

    return (
        <div
        id='popup-background'
        onClick={(e) => handlePopupClose(e)}
        className='blurry-bg fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-40'>
            <div id='popup' className="bg-[#333C4B] max-h-[700px] max-w-[700px] min-w-[400px] p-10 rounded-lg drop-shadow-lg text-center flex flex-col gap-2 pop-up z-50">
                {/* Close Button */}
                <div>
                    <span className="my-3 mx-4 p-1 right-0 top-0 translate-x-1 rounded-full bg-[#333C4B] text-white text-lg absolute hover:cursor-pointer hover:bg-[#4A4C5C]"
                    onClick={() => params.setShow(false)}
                    ><X /></span>
                </div>
                <div className='overflow-auto'>
                    <h1 className={`${waheed.className} my-4 text-[2rem]`}>ދުވަހެއް އަޅުއްވާ</h1>
                    <AddForm />
                </div>
                
            </div>
        
        </div>
    )
}

export default AddPopup
