"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Dhuvas_Type = {
    day: string,
    month: number,
    year: number,
    detail: string,
    source: string
}

export const months = [
    'ޖަނަވަރީ',
    'ފެބުރުވަރީ',
    'މާރިޗު',
    'އޭޕްރިލް',
    'މޭ',
    'ޖޫން',
    'ޖުލައި',
    'އޮގަސްޓް',
    'ސެޕްޓެންބަރު',
    'އޮކްޓޫބަރު',
    'ނޮވެންބަރު',
    'ޑިސެންބަރު'
]

const findMonth = (monthNum: number) => {
    let month = "";
    months.filter((item, index) => {
        if (monthNum === (index + 1)) {
            month = item;
        }
    })
    return month;
}

export const columns: ColumnDef<Dhuvas_Type>[] = [
    {
        accessorKey: "year",
        header: () => <div className="text-right text-white font-bold">އަހަރު</div>,
        cell: ({ row }) => {
            const deet = String(row.getValue("year"))
            return <div dir="rtl" className="text-right">{deet}</div>
        }
    },
    
    {
        accessorKey: "detail",
        header: () => <div className="text-right text-white font-bold">ތަފްސީލު</div>,
        cell: ({ row }) => {
            const deet = String(row.getValue("detail"))
            return <div dir="rtl" className="text-right">{deet}</div>
        }
    },
    {
        accessorKey: "day",
        header: () => <div className="text-right text-white font-bold">ދުވަސް</div>,
        cell: ({ row }) => {
            const deet = String(row.getValue("day"))
            return <div dir="rtl" className="text-right">{deet}</div>
        }
    },
    {
        accessorKey: "month",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className=""
              >
                <div dir="rtl" className="text-right text-white font-bold text-lg">މަސް</div>
                <ArrowUpDown className="ml-2 h-4 w-4" color="white" />
              </Button>
            )
        },
        cell: ({ row }) => {
            const deet = parseInt(row.getValue("month"))
            const month = findMonth(deet)
            return <div dir="rtl" className="text-center">{month}</div>
        },
    },
]
