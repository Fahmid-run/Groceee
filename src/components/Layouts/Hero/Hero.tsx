import React from 'react';

import { RxArrowTopRight } from 'react-icons/rx';

function Hero() {
  return (
    <div className="min-h-screen px-10 md:px-20  lg:px-40 flex items-center justify-center  bg-linear-to-r to-primary-500 from-primary-800 text-surface">
      <div className="flex justify-between items-center flex-col md:flex-row w-full">
        <div className="left w-full md:w-3/2 *:my-3">
          <div className='w-fit rounded-2xl bg-white/20 px-3 py-1'>
            <h4 className='font-extralight text-xs'>100% organic certified</h4>
          </div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">From Fields To Your Kitchen</h1>
          <p className='font-light text-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit
            facere nam quasi eum animi repellendus, aperiam enim, debitis
            inventore architecto, placeat perferendis distinctio ab fugiat
            voluptatem tempore. Corrupti, nisi!
          </p>
          <div className="flex gap-4">
            <button className="btn rounded-2xl text-primary-600">
              Shop Now <RxArrowTopRight></RxArrowTopRight>
            </button>

            <button className="btn rounded-2xl text-surface bg-primary-800">
              Explore Categrories <RxArrowTopRight></RxArrowTopRight>
            </button>
          </div>
        </div>

        <div className="right flex items-center justify-end">
          <div className="w-full md:w-100 lg:w-150 ">
            <img
              className="object-cover w-full"
              src="../../../../public/assets/apple.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
