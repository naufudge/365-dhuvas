import React, { Dispatch, SetStateAction } from 'react'
import { columns } from "./columns"
import { DataTable } from './data-table'
import { Input } from '@/components/ui/input'
import { Plus, Search } from 'lucide-react'
import AddPopup from './AddPopup'

export type Dhuvas_Type = {
    day: string,
    month: number,
    year: number,
    detail: string,
    source: string
}

const DaysTable = (params: {
  dhuvas: Dhuvas_Type[],
  setQuery: Dispatch<SetStateAction<string>>,
  query: string,
  setSearchHidden: Dispatch<SetStateAction<boolean>>,
  searchHidden: boolean
  setAddPopup: Dispatch<SetStateAction<boolean>>,
  showAddPopup: boolean,
}) => {

  const filteredData = params.dhuvas.filter((row) =>
    row.detail?.includes(params.query.toLowerCase()) ||
    row.month?.toString()?.includes(params.query.toLowerCase()) ||
    row.source?.includes(params.query.toLowerCase())
  );

  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='flex w-full place-items-center gap-4 col-span-10 ml-5'>
          <Input
            dir='rtl'
            value={params.query}
            className={`text-black text-lg transition-all duration-150 ${params.searchHidden ? "" : "hidden"}`}
            onChange={(e) => params.setQuery(e.target.value)}
            placeholder='ހޯދަން ބޭނުންފުޅުވާ މަޢުލޫމާތު ލިޔުއްވަވާ...'
          />
        </div>

        <div>
          <div className='justify-end place-items-center flex h-full'>
            <div
            onClick={() => {
              params.setSearchHidden(!params.searchHidden)
              params.setQuery("")
            }}
            className='hover:bg-slate-100 hover:bg-opacity-20 hover:cursor-pointer p-3 rounded-full'>
              <Search className='' />
            </div>
          </div>
        </div>

        <div className='flex justify-end h-fit'>
          <div 
          className='hover:bg-slate-100 hover:bg-opacity-20 hover:cursor-pointer p-3 rounded-full w-fit'
          onClick={() => params.setAddPopup(true)}
          >
            <Plus />
          </div>
        </div>
      </div>
      
      <br/>
    <AddPopup show={params.showAddPopup} setShow={params.setAddPopup} />

    <DataTable columns={columns} data={filteredData}></DataTable>
    </div>
  )
}

export default DaysTable;
