'use client'

import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { MdCurrencyExchange, MdHistory } from "react-icons/md";
import { FaMessage, FaUser } from "react-icons/fa6";
import Profile from '@/components/Profile';
import { useRouter } from 'next/navigation';

interface ProfileData {
  id: number
  image: string
  name: string
  rating: number
  distance: number
  rate: string
}

export default function Page() {

  const profiles: ProfileData[] = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Douala Fx Hub",
      rating: 4.5,
      distance: 0.8,
      rate: "1 USD = 620 XAF"
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Central Exchange",
      rating: 4.8,
      distance: 1.2,
      rate: "1 USD = 618 XAF"
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Fast Change CM",
      rating: 4.2,
      distance: 2.5,
      rate: "1 USD = 615 XAF"
    }
  ]
  const router = useRouter()
   const handleSelect = (profile: ProfileData) => {
    const slug = profile.name.replace(/\s+/g, '-').toLowerCase()
    router.push(`/meetings/${slug}`)
  }

  return (
    <div className='bg-[#edf0ed] min-h-screen'>

      {/* Scrollable Content */}
      <div className='pb-24'> {/* important padding so footer doesn’t cover content */}

        {/* Header */}
        <div className='shadow bg-white pb-4'>
          <div className='flex px-5 gap-14 items-center pt-4'>
            <FaChevronLeft size={20} color='#102216' />
            <h1 className='font-semibold text-3xl text-[#102216]'>
              Offers Received
            </h1>
          </div>

          <div className='space-y-2 mt-4'>
            <p className='text-[12px] text-[#6d6e71] text-center'>
              SEARCHING FOR
            </p>
            <h1 className='font-bold text-2xl text-[#102216] text-center'>
              500 USD
            </h1>
          </div>

          <div className='flex items-center justify-around px-2 py-4'>
            <div className='flex items-center gap-2 py-2 text-[12px] px-3 rounded-full border border-green-400 bg-green-200 font-bold'>
              Best Rate <IoChevronDown />
            </div>

            <div className='flex items-center gap-2 py-2 text-[12px] px-3 bg-gray-100 rounded-full hover:border border-green-400 hover:bg-green-200 font-bold'>
              Closest <IoChevronDown />
            </div>

            <div className='flex items-center gap-2 py-2 text-[12px] px-3 bg-gray-100 rounded-full hover:border border-green-400 hover:bg-green-200 font-bold'>
              Rating <IoChevronDown />
            </div>
          </div>
        </div>

        {/* Profiles */}
        <div className='px-5'>
          {profiles.map((profile) => (
            <Profile
              key={profile.id}
              image={profile.image}
              name={profile.name}
              rating={profile.rating}
              distance={profile.distance}
              rate={profile.rate}
              onSelect={() => handleSelect(profile)}
            />
          ))}
        </div>

      </div>

      {/* FIXED FOOTER */}
      <div className='fixed bottom-0 left-0 w-full border-t border-gray-300 bg-white flex items-center justify-between px-5 py-3 shadow-md'>
        <div className='flex flex-col items-center cursor-pointer'>
          <MdCurrencyExchange size={20} color='#0ff05a' />
          <h1 className='text-[#0ff05a] text-sm'>Exchanges</h1>
        </div>

        <div className='flex flex-col items-center cursor-pointer'>
          <MdHistory size={20} color='gray' />
          <h1 className='text-gray-400 text-sm'>History</h1>
        </div>

        <div className='flex flex-col items-center cursor-pointer'>
          <FaMessage size={20} color='gray' />
          <h1 className='text-gray-400 text-sm'>Messages</h1>
        </div>

        <div className='flex flex-col items-center cursor-pointer'>
          <FaUser size={20} color='gray' />
          <h1 className='text-gray-400 text-sm'>Profile</h1>
        </div>
      </div>

    </div>
  )
}
