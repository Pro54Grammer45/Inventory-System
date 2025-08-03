"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest } from '@/lib/apiRequest'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewSupplier () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false)

  async function onSubmit(data) {
    console.log(data)
    const endpoint = 'api/supplier'
    const resourceName = 'Supplier'
    
    makePostRequest({setLoading,endpoint,data,resourceName,reset});
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title='New Supplier' href='/inventory-dashboard/inventory/supplier'/>
      {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl my-3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput 
            label='Supplier Title' 
            name='name' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Supplier Phone' 
            name='phone' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Supplier Email' 
            name='email'
            type='email' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Supplier Address' 
            name='address' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Supplier Contact Person' 
            name='contactPerson' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Supplier Code' 
            name='supplierCode' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Supplier TIN' 
            name='taxID' 
            register={register} 
            errors={errors}
          />
          <TextareaInput
            label='Supplier Payment Terms'
            name='paymentTerms'
            register={register}
            errors={errors}  
          />
          <TextareaInput
            label='Notes'
            name='notes'
            register={register}
            errors={errors}  
          />
        </div>
        {/* Submit Button */}
        <div className="sm:col-span-1">
          <SubmitButton isLoading={loading} title='Supplier'/>
        </div>
      </form>
    </div>
  )
}

