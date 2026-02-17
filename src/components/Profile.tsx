'use client'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaLocationPin } from "react-icons/fa6";

interface ProfileProps {
  image: string
  name: string
  rating: number
  distance: number
  rate: string
  onSelect?: () => void
}

export default function Profile({
  image,
  name,
  rating,
  distance,
  rate,
  onSelect
}: ProfileProps) {
  return (
    <div className='mt-4 bg-white rounded-md p-4 shadow-sm'>

      {/* Profile */}
      <div className='flex items-center gap-7'>
        <div className='w-16 h-16 rounded-full border shadow-xl border-green-400'>
          <img
            className='w-full h-full rounded-full object-cover'
            src={image}
            alt={name}
          />
        </div>

        <div>
          <h1 className='font-bold text-xl line-clamp-1'>{name}</h1>

          <div className='flex items-center gap-2'>
            <p className='flex items-center gap-1'>
              <FaStar color='yellow' size={16} />
              <span className='text-sm text-gray-500'>{rating}</span>
            </p>

            <GoDotFill color='gray' size={10} />

            <p className='flex items-center gap-1 text-sm text-gray-500'>
              <FaLocationPin size={10} />
              {distance} km away
            </p>
          </div>
        </div>
      </div>

      {/* Exchange Rate */}
      <div className='flex items-center justify-between mt-4 px-2'>
        <div>
          <h1 className='text-gray-400 text-sm'>Exchange Rate</h1>
          <p className='font-bold text-xl'>{rate}</p>
        </div>

        <button
          onClick={onSelect}
          className='bg-green-400 text-black font-semibold rounded-md py-2 px-4 hover:bg-green-500 transition'
        >
          Select
        </button>
      </div>
    </div>
  )
}
