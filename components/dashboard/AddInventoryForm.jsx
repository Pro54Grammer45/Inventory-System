"use client"
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddInventoryForm = () => {
  const branches = [
    {
      label: "Branch A",
      value: "masvcasdvcmba1112sasc"
    },
    {
      label: "Branch B",
      value: "vdhfvdshvchd112121sacasc"
    },
    {
      label: "Branch C",
      value: "asncbasb15212sacasc"
    },
    {
      label: "Main A",
      value: "asnkdsvnjasb15212sacasc"
    },
    {
      label: "Main B",
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
    setLoading(true)
    const baseUrl = "http://localhost:3000"
    try {
      const response = await fetch(`${baseUrl}/api/adjustments/add`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if(response.ok){
        console.log(response)
        setLoading(false)
        reset()
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
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
                name='warehouseId'     
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