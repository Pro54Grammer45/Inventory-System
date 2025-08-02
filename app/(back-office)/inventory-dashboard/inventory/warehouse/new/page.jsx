"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const NewWarehouse = () => {
  const selectOptions = [
    {
      label: "Main",
      value: "main"
    },
    {
      label: "Branch",
      value: "branch"
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
      const response = await fetch(`${baseUrl}/api/warehouse`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if(response.ok){
        console.log(response)
        setLoading(false)
        toast.success('New Unit created successfully!')
        reset()
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title='New Warehouse' href='/inventory-dashboard/inventory'/>
      {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl my-3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            label='Select the Warehouse Type'
            name='type'     
            register={register}
            className='w-full'
            options={selectOptions}
          />
          <TextInput 
            label='Warehouse Title' 
            name='title' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Warehouse Location' 
            name='location' 
            register={register} 
            errors={errors}
          />
          <TextareaInput
            label='Warehouse Description'
            name='description'
            register={register}
            errors={errors}  
          />
        </div>
        {/* Submit Button */}
        <div className="sm:col-span-1">
          <SubmitButton isLoading={loading} title='Warehouse'/>
        </div>
      </form>
    </div>
  )
}

export default NewWarehouse