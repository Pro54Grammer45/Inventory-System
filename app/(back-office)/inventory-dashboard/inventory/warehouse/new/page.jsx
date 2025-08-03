"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewWarehouse ({ initialData={}, isUpdate=false }) {
  const router = useRouter()
  const selectOptions = [
    {
      name: "Main",
      id: "main"
    },
    {
      name: "Branch",
      id:  "branch"
    },
]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  })

  const [loading, setLoading] = useState(false)

  function redirect(){
    router.push('/inventory-dashboard/inventory/warehouse')
  }

  async function onSubmit(data) {
    console.log(data)
    if(isUpdate){
      //Update Request 
      const endpoint = `api/warehouse/${initialData.id}`
      const resourceName = 'Warehouse'  
      makePutRequest({setLoading,endpoint,data,resourceName,redirect});
    }else{
      const endpoint = 'api/warehouse'
      const resourceName = 'Warehouse'        
      makePostRequest({setLoading,endpoint,data,resourceName,reset});
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate ? 'Update Warehouse' : 'New Warehouse'} href='/inventory-dashboard/inventory/warehouse'/>
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
            name='name' 
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
          <SubmitButton isLoading={loading} title={isUpdate ? 'Update Warehouse' : 'New Warehouse'}/>
        </div>
      </form>
    </div>
  )
}

