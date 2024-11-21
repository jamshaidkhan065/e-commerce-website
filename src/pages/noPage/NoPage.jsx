import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (<>
  <button className='absolute px-2 py-2 my-2 text-white font-bold bg-pink-500 border border-pink-600 rounded-lg'><Link to={'/'}>Home</Link></button>
    <div > <img src="https://media.licdn.com/dms/image/v2/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1581099611064?e=1736380800&v=beta&t=_b3qxld3t1gqDcKHKKtPDxuhIFU94zB31rb2nuc5Ygw" alt="" /></div>
  </>)
}

export default NoPage