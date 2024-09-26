'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type parameters = {
    monthSelection: React.Dispatch<React.SetStateAction<string>>,
    daySelection: React.Dispatch<React.SetStateAction<number>>
}

const months = {
    'ޖަނަވަރީ': 1,
    'ފެބުރުވަރީ' : 2,
    'މާރިޗު' : 3,
    'އޭޕްރިލް' : 4,
    'މޭ' : 5,
    'ޖޫން' : 6,
    'ޖުލައި' : 7,
    'އޮގަސްޓް' : 8,
    'ސެޕްޓެންބަރު': 9,
    'އޮކްޓޫބަރު' : 10,
    'ނޮވެންބަރު': 11,
    'ޑިސެންބަރު' : 12
}

const days = {
    1: 31,
    2: 29,
}

const DateDropDown = (params: parameters) => {
    const placeholder = "މަސް ނަންގަވާ"
    const [dropDownState, setDropDownState] = useState(false)
    const [selected, setSelected] = useState(placeholder)

    const handleSelection = (selection: string) => {
        setSelected(selection);
        setDropDownState(false);
        params.monthSelection(selection);
    }
    
    return (
        <div className='text-black flex flex-row'>

            {/* Month Picker */}
            <div>
            <div 
            className='flex flex-row gap-4 bg-white w-[200px] px-4 py-2 mb-4 rounded-lg items-center justify-between text-center hover:cursor-pointer hover:bg-slate-100 transition-all'
            onClick={() => setDropDownState(!dropDownState)}
            > 
                <div className={`pt-1 ${selected === placeholder ? "opacity-50" : "opacity-100"} text-center w-full z-50`}>
                    {selected}
                </div>
                <ChevronDown className={`opacity-50 ${dropDownState ? "rotate-180" : "rotate-0"} transition-all duration-300`} />
            </div>

            <div 
            className={`flex flex-col -z-10 bg-white rounded-md items-center justify-center ${dropDownState ? "visible-menu" : "hidden-menu"}`}>
                {Object.keys(months).map((month, index) => (
                    <div 
                    key={index}
                    className='py-1 hover:bg-slate-100 hover:cursor-pointer w-full rounded-md items-center transition-all'
                    onClick={() => handleSelection(month)}
                    >{month}</div>
                ))}
            </div>
            </div>

            {/* Day Picker */}
            <div>

            </div>
        </div>
    )
}

export default DateDropDown;
