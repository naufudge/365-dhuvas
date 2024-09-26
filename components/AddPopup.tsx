"use client";

import { Dispatch, SetStateAction } from 'react';
import localFont from 'next/font/local';
import { X } from 'lucide-react';
import AddForm from '@/components/AddForm';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';


interface AddPopupProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const AddPopup: React.FC<AddPopupProps> = ({show, setShow}) => {
    return (
        <Dialog open={show} onOpenChange={setShow}>
            <DialogContent className='bg-[#333C4B] outline-none border-none w-full'>
                <DialogHeader>
                    <DialogTitle className='mt-4 font-aammuFK text-[20px] text-center'>ދުވަސް އެޅުއްވުމަށް</DialogTitle>
                </DialogHeader>
                <div dir='rtl' className='text-lg flex flex-col text-right mt-2 font-utheemu'>
                    <AddForm />
                </div>
            </DialogContent>
        </Dialog>
    )
}


export default AddPopup
