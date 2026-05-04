import React from 'react'
import loginimg from "../../../assets/Authentication-bro.svg"
import { Link } from 'react-router'
export default function Login() {
  return (
   <>

   <div className='flex justify-around items-center w-full'>

    <div>
        <img src={loginimg} className='w-[300px]' alt="" />
    </div>

    <div  className=' w-[40%] py-10 px-12 border-2 border-[#1ebbcc55] rounded-lg '>
        <h1 className='text-black font-bold text-2xl text-center'>Login</h1>


        <form action="" className='mt-6'>
            <div>
                <input placeholder='Email' type="email" className='py-3 px-6 w-full bg-[#ECEAEE] rounded-lg' name="" id="" />
            </div>
            <div className='mt-6'>
                <input placeholder='Passowrd' type="password" className='py-3 px-6 w-full bg-[#ECEAEE] rounded-lg' name="" id="" />
            </div>


            <button className='rounded-2xl py-3 bg-[#92E3A9] w-full mt-6'>Login</button>
            <Link to={"/register"} className='underline'>register</Link>
        </form>

    </div>

   </div>


   </>
  )
}
