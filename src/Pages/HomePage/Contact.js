import React, { useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Rightsvg from '../../components/Rightsvg'
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

// emailjs.init('reYT-0D9oKkzCqb4i')

const Contact = () => {
    const[message, setMessage] = useState("")
    const[email, setMail] = useState("")
    const[name, setName] = useState("")

    // const form = useRef();

    const publicKey = "reYT-0D9oKkzCqb4i";
    const SERVICE_ID = "service_86gxglw";
    const TEMPLATE_ID = "template_nwlnxog";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(message && email &&name){
          // const values = {
          //   from_name: name,
          //   email: email,
          //   role: 'viewer',
          //   message: message
          // }
          console.log(e.target)
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, publicKey).then(
            (result) => {
              console.log(result.text);
              Swal.fire({
                icon: "success",
                title: "Message Sent Successfully",
              });
            },
            (error) => {
              console.log(error.text);
              Swal.fire({
                icon: "error",
                title: "Ooops, something went wrong, try again!",
                text: error.text,
              });
            }
          );
        }
        
        e.target.reset();
      };

  return (
    <>
      {/* <Rightsvg /> */}
      <section className="min-h-screen bg-white dark:bg-gray-900 lg:flex w-full align-center justify-center relative">
          <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
            <div className='my-10 text-center mt-32'>
            <h3 className='text-3xl my-2'>Get in touch with us</h3>
            <p className='text-bold'>If you have any questions or any contributions , feel free to message us</p>
            </div>
            <Rightsvg />
            <form className='relative top-[-15%]' onSubmit={handleOnSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor='from_name'>Name</label>
                        <input type="text" placeholder="John Doe" name='from_name' onChange={(e) => setName(e.target.value)} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-bg-primary rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor='email'>Email address</label>
                        <input type="email" placeholder="johndoe@example.com" name='email' onChange={(e) => setMail(e.target.value)} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-bg-primary rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor='role'>Your Role</label>
                        <input type="text" placeholder="e.g Student" name='role' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-bg-primary rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200" htmlFor='message'>Message</label>
                    <textarea name='message' className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-bg-primary rounded-md md:h-56 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 outline-none" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <button type="submit" className="bg-primary w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-[#fff] transition-colors duration-300 transform rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Send a message
                </button>
            </form>
            </div>
        </section>
        <Footer />
    </>
    )
}

export default Contact