"use client"
import ImageInput from '@/components/FormInputs/ImageInput'
import SelectInput from '@/components/FormInputs/SelectInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextareaInput'
import TextInput from '@/components/FormInputs/TextInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CreateItemForm ({ categories, units, brands, warehouses, suppliers, initialData={}, isUpdate=false}) {
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState("")

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
    router.push('/inventory-dashboard/inventory/items')
  }


  async function onSubmit(data) {
    data.imageUrl = imageUrl
    console.log(data)
    if(isUpdate){
      //Update Request 
      const endpoint = `api/items/${initialData.id}`
      const resourceName = 'Item'  
      makePutRequest({setLoading,endpoint,data,resourceName,redirect});
    }else{
      const endpoint = 'api/items'
      const resourceName = 'Item'        
      makePostRequest({setLoading,endpoint,data,resourceName,reset});
    }
  }
  return (
    <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl my-3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput 
            label='Item Title' 
            name='name' 
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
            name='quantity' 
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
          <SubmitButton isLoading={loading} title={isUpdate ? 'Update Item' : 'New Item'}/>
        </div>
      </form>
  )
}
