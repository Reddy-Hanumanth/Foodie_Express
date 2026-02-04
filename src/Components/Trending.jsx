import React from 'react'
import { assets } from '../assets/assets'

const Trending = () => {
  return (
    <div  className="max-w-6xl items-center justify-center mx-auto px-2 space-y-6 pb-12">
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>Trending Now</h1>

           <div className='flex gap-4 text-gray-600 cursor-pointer'>
            <i className="fa-solid fa-angle-left px-5 pt-3 bg-orange-900/15 rounded-full hover:bg-orange-400/30"></i>
            <i className="fa-solid fa-angle-right h-10 w-10 flex pt-3 items-center justify-center bg-orange-900/15 rounded-full px-5 hover:bg-orange-400/30"></i>
           </div>
        </div>
        

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            <div className='border border-orange-900/20 rounded-2xl outline-none h-[380px] hover:shadow-xl transition bg-[#f2efef] cursor-pointer space-y-4 '>
            
            <div>
                <img src={assets.The_Urban_Kitchen} alt="" className='w-full h-[200px] rounded-t-2xl overflow-hidden'/>
            </div>
                
            <div className='px-4 space-y-4'>
                <div className=' space-y-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>The Urban Kitchen</h1>
                    <i className='text-orange-500 font-bold'>$$</i>
                </div>
                <p className='opacity-50'>Fusion • Contemporary • Healthy</p>
            </div>
            {/* <div> */}
                <hr className='opacity-10'/>
            {/* </div> */}
            <div className='flex justify-between items-center'>
                <p className='opacity-50'>Free delivery on $25+ </p>
                <button className='bg-orange-600/15 p-2 px-6 rounded-xl text-orange-500 font-bold hover:bg-orange-500 hover:text-white'>+ Order</button>
            </div>
            </div>
            
            </div>
            <div className='border border-orange-900/20 rounded-2xl outline-none h-[380px] hover:shadow-xl transition bg-[#f2efef] cursor-pointer space-y-4 '>
                
                <div>
                    <img src={assets.pasta} alt="" className='w-full h-[200px] rounded-t-2xl overflow-hidden'/>
                </div>
                    
                <div className='px-4 space-y-4'>
                    <div className=' space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-bold'>The Urban Kitchen</h1>
                        <i className='text-orange-500 font-bold'>$$</i>
                    </div>
                    <p className='opacity-50'>Fusion • Contemporary • Healthy</p>
                </div>
                {/* <div> */}
                    <hr className='opacity-10'/>
                {/* </div> */}
                <div className='flex justify-between items-center'>
                    <p className='opacity-50'>Free delivery on $25+ </p>
                    <button className='bg-orange-600/15 p-2 px-6 rounded-xl text-orange-500 font-bold hover:bg-orange-500 hover:text-white'>+ Order</button>
                </div>
                </div>
                
            </div>
            <div className='border border-orange-900/20 rounded-2xl outline-none h-[380px] hover:shadow-xl transition bg-[#f2efef] cursor-pointer space-y-4 '>
                
                <div>
                    <img src={assets.Tokos05} alt="" className='w-full h-[200px] rounded-t-2xl overflow-hidden'/>
                </div>
                    
                <div className='px-4 space-y-4'>
                    <div className=' space-y-2'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-bold'>The Urban Kitchen</h1>
                        <i className='text-orange-500 font-bold'>$$</i>
                    </div>
                    <p className='opacity-50'>Fusion • Contemporary • Healthy</p>
                </div>
                {/* <div> */}
                    <hr className='opacity-10'/>
                {/* </div> */}
                <div className='flex justify-between items-center'>
                    <p className='opacity-50'>Free delivery on $25+ </p>
                    <button className='bg-orange-600/15 p-2 px-6 rounded-xl text-orange-500 font-bold hover:bg-orange-500 hover:text-white'>+ Order</button>
                </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Trending