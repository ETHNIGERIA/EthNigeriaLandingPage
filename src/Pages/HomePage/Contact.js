import React from 'react'
import Rightsvg from '../../components/Rightsvg'

const Contact = () => {
  return (
    <>
      <Rightsvg />
      <section className="min-h-screen bg-white dark:bg-gray-900 lg:flex w-full align-center justify-center mt-24">
    <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
        <div className='my-10 text-center'>
          <h3 className='text-3xl my-2'>Get in touch with us</h3>
          <p className='text-bold'>consectetur adipiscing elit duis tristique sollicitudin</p>
        </div>
        <form>
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Name</label>
                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-[#E2E2E2] rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-[#E2E2E2] rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
            </div>

            <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-[#E2E2E2] rounded-md md:h-56 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 outline-none" placeholder="Message"></textarea>
            </div>

            <button className="bg-[#0178D4] w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-[#fff] transition-colors duration-300 transform rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send a message
            </button>
        </form>
    </div>
</section>

    </>
    )
}

export default Contact