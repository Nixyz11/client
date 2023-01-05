import React from 'react'

const CountBox = ({title,value}) => {
  return (
    <div className='flex flex-col items-center w-[150px]'>
      <h4 className='font-epilogue font-bold p-3 text-[30px] text-white bg-[#1c1c24] rounded-t-[10px] text-center truncate'>
        {value}
      </h4>
      <p className='font-epilogue font-normal p-3 text-[16px] text-[#808191] bg-[#28282e] rounded-b-[10px] px-3 py-2 w-full text-center'>
        {title}
      </p>
    </div>
  )
}

export default CountBox