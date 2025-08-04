import { Pencil} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import DeleteBtn from './DeleteBtn'

export default function DataTable({ data=[], columns=[], resourceTitle=''}) {
  return (
    <div className = 'relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    {
                        columns.map((columnName,i)=>{
                            return(
                                <th key={i} scope='col' className='px-6 py-3'>
                                    {columnName}
                                </th>
                            )
                        })
                    }
                    <th scope='col' className='px-6 py-3'>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,i)=>{
                        return(
                            <tr key={i} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 '>
                                {/* {
                                    columns.map((columnName,i)=>{
                                        return(
                                            <td key={i} className='px-6 py-4'>
                                                {item[columnName]}
                                            </td>
                                        )
                                    })
                                } */}
                                {
                                    columns.map((columnName,i)=>(
                                        <td key={i} className='px-6 py-4'>
                                            {
                                                columnName.includes(".") ? (
                                                    columnName.split(".").reduce((obj,key) => obj[key],item)
                                                ) : columnName === "createdAt" ||
                                                columnName === "updatedAt" ? (
                                                    new Date(item[columnName]).toLocaleDateString()
                                                ) : columnName === 'imageUrl' ? (
                                                    <img 
                                                        src={item[columnName]} 
                                                        alt={`Image is for ${resourceTitle}`}
                                                        className='w-10 h-10 object-cover rounded-full' 
                                                    />
                                                ) : (
                                                    item[columnName]
                                                )
                                            }
                                        </td>
                                    ))
                                }
                                <td className='px-6 py-4 text-right flex items-center space-x-4'>
                                    <Link 
                                        href={`/inventory-dashboard/inventory/${resourceTitle}/update/${item.id}`} 
                                        className='font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1'
                                    >
                                        <Pencil className='w-4 h-4'/>
                                        <span>Edit</span>
                                    </Link>
                                    <DeleteBtn id={item.id} endpoint={resourceTitle}/>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      
    </div>
  )
}
