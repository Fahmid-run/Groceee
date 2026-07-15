import React from 'react'
import { BiArrowToRight, BiLock } from 'react-icons/bi'

function OrderSummery() {
  return (
    <div className='bg-surface rounded-lg p-4 border-gray-200 border'>
      <h1 className='text-lg font-medium'>
        Order Summary
      </h1>
      <div className='rounded-xs bg-primary-100'>
        <h3 className='text-sm text-primary-700 px-4 py-2'>You are $12 away from  free shipping!</h3>
      </div>


      <button className='btn rounded-md bg-primary-600 text-surface w-full'>Proceed to checkout <BiArrowToRight></BiArrowToRight></button>
      <span className='font-light text-xs text-center text-gray-700'><BiLock></BiLock> secure encrypted checkout</span>

    </div>
  )
}

export default OrderSummery