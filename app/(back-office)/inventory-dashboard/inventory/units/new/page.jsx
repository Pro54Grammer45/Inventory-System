"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewUnits = () => {
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
      const response = await fetch(`${baseUrl}/api/units`,{
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
    <div>
      {/* Header */}
      <FormHeader title='New Units' href='/inventory-dashboard/inventory'/>
      {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl my-3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput 
            label='Unit Name' 
            name='title' 
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
          <SubmitButton isLoading={loading} title='Unit'/>
        </div>
      </form>
    </div>
  )
}

export default NewUnits