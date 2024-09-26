import { Row } from '@tanstack/react-table';
import localFont from 'next/font/local';
import { Dispatch, SetStateAction } from 'react';

import { months } from '@/components/columns';
import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Edit, Trash } from 'lucide-react';

const waheed = localFont({
    src: "../public/assets/fonts/MVAWaheed.ttf",
})
const utheemu = localFont({
    src: "../public/assets/fonts/mvutheemuREGULAR.ttf",
})

interface PopupProps {
    show: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    row: Row<any> | undefined
}

const Popup: React.FC<PopupProps> = ({show, close, row}) => {
    return (
        <Dialog open={show} onOpenChange={close}>
            <DialogContent className='bg-[#333C4B] outline-none border-none'>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <div dir='rtl' className='text-lg flex flex-col text-right mt-4 font-utheemu'>
                    {/* Details */}
                    <div className={`${waheed.className} underline mb-2`}>ތަފްސީލް</div>
                    <div className='text-justify font-utheemu'>{row?.original.detail}</div>
                    <br />
                    <div className='flex flex-row justify-between'>
                        {/* Date */}
                        <div className='flex flex-col'>
                            <div className={`${waheed.className} underline mb-3`}>ތާރީޚު</div>
                            <div>{row?.original.day} {months[row?.original.month - 1]} {row?.original.year}</div>
                        </div>
                        {/* Source */}
                        <div className='flex flex-col'>
                            <div className={`${waheed.className} underline mb-2`}>ސޯރސް</div>
                            <div>{row?.original.source}</div>
                        </div>
                    </div>
                    <br />

                    <div className='flex'>
                        {/* Edit Button */}
                        <Button
                        onClick={() => {}}
                        className='m-auto py-3 px-4 h-full place-items-center'
                        >
                            <Edit className='ml-2 h-5 w-5' />ބަދަލު ގެނައުމަށް 
                        </Button>

                        {/* Delete Button */}
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button
                                className='m-auto py-3 px-4 h-full place-items-center'
                                variant={"destructive"}>
                                    <Trash className='ml-2 h-5 w-5' /> ޑިލީޓް
                                </Button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle className={`text-black text-right ${waheed.className}`}>ޑިލީޓް ކުރަން ބޭނުންވާކަން ޔަގީން ހެއްޔެވެ؟</AlertDialogTitle>
                                <AlertDialogDescription dir='rtl' className={`text-right ${utheemu.className}`}>
                                    މި ޢަމަލަކީ ދާއިމީ ޢަމަލެއް ކަމުން މި "ދުވަސް" އަޅުގަނޑުމެންގެ ޑޭޓާބޭސްއިން ޑިލީޓް ކުރެވޭނެއެވެ.
                                </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter className={`gap-5 ${utheemu.className} font-bold`}>
                                    <AlertDialogCancel className='text-gray-500'>ކެންސަލް</AlertDialogCancel>
                                    <AlertDialogAction>ކުރިއަށްގެންދިޔުން</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}




export default Popup;
