import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <div className='fixed top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-r from-[#07A2FF] to-[#FB9618] p-2 lg:p-3 rounded-l-md shadow-md space-y-4 z-50'>
      <Link
        href='https://wa.me/+8801988616365'
        target='_blank'
        rel='noopener noreferrer'
        className='block text-white hover:text-green-400 transition-colors duration-300'
      >
        <FaWhatsapp className='w-5 h-5 lg:w-6 lg:h-6' />
      </Link>
      <Link
        href='https://www.facebook.com/adspremiere'
        target='_blank'
        rel='noopener noreferrer'
        className='block text-white hover:text-blue-500 transition-colors duration-300'
      >
        <FaFacebookF className='w-5 h-5 lg:w-6 lg:h-6' />
      </Link>
      <Link
        href='https://www.instagram.com/adspremiere'
        target='_blank'
        rel='noopener noreferrer'
        className='block text-white hover:text-pink-500 transition-colors duration-300'
      >
        <FaInstagram className='w-5 h-5 lg:w-6 lg:h-6' />
      </Link>
    </div>
  );
}
