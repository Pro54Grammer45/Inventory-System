"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function NewBrand  ({ initialData={}, isUpdate=false }) {
  const router = useRouter()
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
    router.push('/inventory-dashboard/inventory/brands')
  }

  async function onSubmit(data) {
    console.log(data)
    if(isUpdate){
      //Update Request 
      const endpoint = `api/brands/${initialData.id}`
      const resourceName = 'Brand'  
      makePutRequest({setLoading,endpoint,data,resourceName,redirect});
    }else{
      const endpoint = 'api/brands'
      const resourceName = 'Brand'        
      makePostRequest({setLoading,endpoint,data,resourceName,reset});
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate ? 'Update Brand' : 'New Brand'} href='/inventory-dashboard/inventory/brands'/>
      {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl my-3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput 
            label='Brand Name' 
            name='name' 
            register={register} 
            errors={errors}
            className='w-full'
          />          
        </div>
        {/* Submit Button */}
        <div className="sm:col-span-1">
          <SubmitButton isLoading={loading} title={isUpdate ? 'Updated Brand' : 'New Brand'}/>
        </div>
      </form>
    </div>
  )
}

