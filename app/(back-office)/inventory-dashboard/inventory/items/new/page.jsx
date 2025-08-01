"use client"
import FormHeader from '@/components/dashboard/FormHeader'
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { UploadButton, UploadDropzone } from '@/lib/uploadthing'
import { Pencil } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const NewItem = () => {
  const [imageUrl, setImageUrl] = useState("")

  const categories = [
    {
      label: "Electronics",
      value: "astat77875afdagf8"
    },
    {
      label: "Clothes",
      value: "astat7654675abnjbagf8"
    },
]

  const units = [
    {
      label: "Kg",
      value: "astat778151asfvafdagf8"
    },
    {
      label: "Pcs",
      value: "astat765vbhadsjvnjbagf8"
    },
]

const brands = [
    {
      label: "HP",
      value: "asjacbasjb8151asfvafdagf8"
    },
    {
      label: "Zara",
      value: "bvdfhisjat765vbhadsjvnjbagf8"
    },
]

const warehouses = [
    {
      label: "Warehouse A",
      value: "mnvmcn65415mvdnfmdn"
    },
    {
      label: "Warehouse B",
      value: "orgorj596ksfskknfk"
    },
    {
      label: "Warehouse C",
      value: "ppojorj596ksfskknfk"
    },
]

const suppliers = [
    {
      label: "Supplier A",
      value: "zsvbvcn65415mvdnfmdn"
    },
    {
      label: "Supplier B",
      value: "tutuyurj596ksfskknfk"
    },
    {
      label: "Supplier C",
      value: "uojkjkrj596ksfskknfk"
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
    data.imageUrl = imageUrl
    console.log(data)
    setLoading(true)
    const baseUrl = "http://localhost:3000"
    try {
      const response = await fetch(`${baseUrl}/api/items`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if(response.ok){
        console.log(response)
        setLoading(false)
        setImageUrl("")
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
      <FormHeader title='New Item' href='/inventory-dashboard/inventory'/>
      {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl my-3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput 
            label='Item Title' 
            name='title' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <SelectInput
            label='Select the Item Category'
            name='categoryId'     
            register={register}
            className='w-full'
            options={categories}
          />
          <TextInput 
            label='Item SKU' 
            name='sku' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Item Barcode' 
            name='barcode' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <TextInput 
            label='Item Quantity' 
            name='qty' 
            register={register} 
            errors={errors}
            className='w-full'
          />
          <SelectInput
            label='Select the Item Unit'
            name='unitId'     
            register={register}
            className='w-full'
            options={units}
          />
          <SelectInput
            label='Select the Item Brand'
            name='brandId'     
            register={register}
            className='w-full'
            options={brands}
          />
          <TextInput 
            label='Buying Price' 
            name='buyingPrice' 
            register={register} 
            errors={errors}
            type='number'
            className='w-full'
          />
          <TextInput 
            label='Selling Price' 
            name='sellingPrice' 
            register={register} 
            errors={errors}
            type='number'
            className='w-full'
          />
          <SelectInput
            label='Select the Item Supplier'
            name='supplierId'     
            register={register}
            className='w-full'
            options={suppliers}
          />
          <TextInput 
            label='Re-Order Point' 
            name='reOrderPoint' 
            register={register} 
            errors={errors}
            type='number'
            className='w-full'
          />
          <SelectInput
            label='Select the Item Warehouse'
            name='warehouseId'     
            register={register}
            className='w-full'
            options={warehouses}
          />
          <TextInput 
            label='Item Weight in Kgs' 
            name='weight' 
            register={register} 
            errors={errors}
            type='number'
            className='w-full'
          />
          <TextInput 
            label='Item Dimensions in cm (20 x 30 x 40)' 
            name='dimensions' 
            register={register} 
            errors={errors}            
            className='w-full'
          />
          <TextInput 
            label='Item Tax Rate in %' 
            name='taxRate'
            type='number' 
            register={register} 
            errors={errors}            
            className='w-full'
          />
          <TextareaInput
            label='Item Description'
            name='description'
            register={register}
            errors={errors}  
          />
          <TextareaInput
            label='Item Notes'
            name='notes'
            register={register}
            errors={errors}  
          />
          
          <ImageInput
            label='Item Image'
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />

        </div>
        {/* Submit Button */}
        <div className="sm:col-span-1">
          <SubmitButton isLoading={loading} title='Item'/>
        </div>
      </form>
    </div>
  )
}

export default NewItem