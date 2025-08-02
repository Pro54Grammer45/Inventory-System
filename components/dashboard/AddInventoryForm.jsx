"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddInventoryForm = () => {
  const branches = [
    {
      label: "Branch A",
      value: "masvcasdvwewew1112sasc"
    },
    {
      label: "Branch B",
      value: "vdhfvdshvchd8888sacasc"
    },
    {
      label: "Branch C",
      value: "asncbeeeee2sacasc"
    },
    {
      label: "Main A",
      value: "asnkdwwwwwwwsb15212sacasc"
    },
    {
      label: "Main B",
      value: "tttttttttttg776712sacasc"
    },
  ]

  const items = [
    {
      label: "Item A",
      value: "masvcasdvcmba1112sasc"
    },
    {
      label: "Item B",
      value: "vdhfvdshvchd112121sacasc"
    },
    {
      label: "Item C",
      value: "asncbasb15212sacasc"
    },
    {
      label: "Item D",
      value: "asnkdsvnjasb15212sacasc"
    },
    {
      label: "Item E",
      value: "asncbajsdhdg776712sacasc"
    },
  ]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false)

  async function onSubmit(data) {
    console.log(data)
    const endpoint = 'api/adjustments/add'
    const resourceName = 'Add Adjustment'
        
    makePostRequest({setLoading,endpoint,data,resourceName,reset});
  }
  return (
    <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl p-4 my-3 mx-auto bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput 
                label='Reference Number' 
                name='referenceNumber' 
                register={register} 
                errors={errors}
                type='number'
                className='w-full'
            />
            <SelectInput
                label='Select the Item'
                name='itemId'     
                register={register}
                className='w-full'
                options={items}
            />
            <TextInput 
                label='Enter quantity of stock to add' 
                name='addStockQty' 
                register={register} 
                errors={errors}
                type='number'
                className='w-full'
            />
            <SelectInput
                label='Select the Warehouse to receive the stock'
                name='receivingWarehouseId'     
                register={register}
                className='w-full'
                options={branches}
            />
            <TextareaInput
                label='Adjustment Notes'
                name='notes'
                register={register}
                errors={errors}  
            />
        </div>
        {/* Submit Button */}
        <div className="sm:col-span-1">
            <SubmitButton isLoading={loading} title='Adjustment'/>
        </div>
      </form>
  )
}

export default AddInventoryForm