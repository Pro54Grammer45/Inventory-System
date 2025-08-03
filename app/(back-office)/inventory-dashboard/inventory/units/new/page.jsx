"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewUnits ({ initialData={}, isUpdate=false }) {
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
    router.push('/inventory-dashboard/inventory/units')
  }

  async function onSubmit(data) {
    console.log(data)
    if(isUpdate){
      //Update Request 
      const endpoint = `api/units/${initialData.id}`
      const resourceName = 'Unit'  
      makePutRequest({setLoading,endpoint,data,resourceName,redirect});
    }else{
      const endpoint = 'api/units'
      const resourceName = 'Unit'        
      makePostRequest({setLoading,endpoint,data,resourceName,reset});
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate ? 'Update Unit' : 'New Unit'} href='/inventory-dashboard/inventory/units'/>
      {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl my-3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput 
            label='Unit Name' 
            name='name' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Unit Abbreviation' 
            name='abbreviation' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          
        </div>
        {/* Submit Button */}
        <div className="sm:col-span-1">
          <SubmitButton isLoading={loading} title={isUpdate ? 'Update Unit' : 'New Unit'}/>
        </div>
      </form>
    </div>
  )
}

