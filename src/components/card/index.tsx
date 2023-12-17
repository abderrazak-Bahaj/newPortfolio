
import React from 'react'
import Image  from 'next/image'
import Link from 'next/link'
import {IconNavigate} from '@/assets/icons'
interface CardProps {
    image?: string
    title?: string
    details?: string
    link?: string
    linkText?: string
}

const Card: React.FC<CardProps> = ({ image="", title, details,link,linkText }) => {
    return (
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100">
      <Image unoptimized  alt='image' height={"350"} width={"350"} src={image}   className=" text-gray-500 dark:text-gray-400 mb-3 rounded-lg " />
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{details}</p>
      {link && <Link href={link} className="inline-flex items-center text-blue-600 hover:underline">
          {linkText}
          <IconNavigate className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"/>
      </Link>}
  </div>
    );
  };
  
  export default Card