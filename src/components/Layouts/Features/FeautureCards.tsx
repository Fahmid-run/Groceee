import React from 'react'
import { BiLeaf } from 'react-icons/bi'

function FeautureCards() {
  return (
    <div className="rounded-2xl bg-surface px-10 py-4 flex justify-center items-center flex-col h-80 *:my-3">
      <div className='bg-primary-200 rounded-xl p-5'>
        <BiLeaf></BiLeaf>
      </div>
      <h2 className="font-bold text-xl">Lorem ipsum</h2>
      <p className="text-xs font-light text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolore
        accusamus deleniti voluptatibus cumque optio debitis pariatur sint
        officiis
      </p>
    </div>
  );
}

export default FeautureCards