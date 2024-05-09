'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Contact = (props: Props) => {


    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(true)
    const [selected, setSelected] = useState(null)
    const [transfer, setTransfer] = useState(false)
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleClick = ( item : any, e : any) => {
        setSelected(item)
    }

    const handleSend = (formData: { [key: string]: string }) => {
        setLoading(true); // Start loading animation
        setTimeout(() => {
          setLoading(false);
          setTransfer(!transfer); // Switch to "Done" state
        }, 1000); // 1 second for loading animation
      };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let formErrors: { [key: string]: string } = {};
        Object.keys(formData).forEach((key) => {
          if (!formData[key]) {
            formErrors[key] = `${key} is required`;
          }
        });
        if (Object.keys(formErrors).length === 0) {
          setErrors({});
          handleSend(formData);
        } else {
          setErrors(formErrors);
        }
      };

  return (
        <div className=' w-full h-screen relative flex flex-col  py-8 gap-2'>
        <div className=' w-full justify-center items-end px-8 flex flex-col gap-4 h-fit'>
            <motion.div initial={{ opacity: 0, y: -10}} 
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1, delay:1}} 
                onClick={() => setOpen(!open)} 
                className='border p-4 bg-black/20 hover:scale-110 cursor-pointer hover:bg-black/60 rounded-xl duration-500 ease-in-out'>
                <div className='font-semibold text-xl p-4'>
                    Get in touch with us.
                </div>
            </motion.div>
        </div>
            
            {/* <div className={'w-full h-full flex'}> */}
            <div className={!open ? 'w-full h-full flex   \
            p-8' 
                : 'hidden'}>
                    <div className='w-full flex flex-end justify-end'>
                        <motion.div 
                        className={ ` w-fit p-4  rounded-3xl shadow-2xl  border flex  justify-end  relative items-center 
                            ${open ? 'backgoundBlur2' : 'bg-black/20 shadow-xl bg-opacity-15' }`}    >
                            <div 
                            // animate={open ? {opacity: 0, y:-80 } : { opacity: 1, y:0 }} transition={{ duration: 1, }} 
                            className={'h-fit  w-[450px] flex flex-col gap-4'}>
                                <div>
                                    <h2>Write us a message.</h2>
                                </div>
                                <div className='w-full relative overflow-hidden h-full  '>
                                    <motion.div  
                                        animate={open ? {opacity: 0, x: 400 } : { opacity: 1, x:0 }} transition={{ duration: 1}}
                                        className='flex flex-col gap-2'>
                                        <div
                                        className='font-light text-lg border border-white/40 p-2 bg-black/10 shadow-2xl cursor-pointer hover:bg-black/60 rounded-xl duration-500 ease-in-out'>
                                        <input  type="text" name="name"   onChange={() => handleChange} onClick={(e)=> handleClick('name', e)} placeholder='Full Name' className='w-full placeholder:font-semibold p-2 outline-none bg-transparent'/>
                                            
                                        </div>
                                        {errors.name && <span className="error">{errors.name}</span>}
                                    </motion.div>
                                </div>
                                <div className='w-full relative overflow-hidden h-full  '>
                                    <motion.div 
                                        animate={open ? {opacity: 0, x: 400 } : { opacity: 1, x:0 }} transition={{ duration: 1, delay: 0.2}}                             
                                        className='flex flex-col gap-2 '
                                        >
                                        {/* <label className='font-semibold text-white text-xl tracking-wider'>Full Name</label> */}
                                            <div
                                        className='font-light text-lg border border-white/40 p-2 bg-black/10 shadow-2xl cursor-pointer hover:bg-black/60 rounded-xl '>
                                                <input  type="text" name="email"  onChange={() => handleChange} onClick={(e)=> handleClick('name', e)} placeholder='Email' className='w-full placeholder:font-semibold p-2   outline-none bg-transparent'/>
                                            </div>
                                        {errors.email && <span className="error">{errors.email}</span>}
                                    </motion.div>
                                </div>
                                <div className='w-full relative overflow-hidden h-full  '>
                                    <motion.div   
                                        animate={open ? {opacity: 0, y: 100 } : { opacity: 1, y:0 }} transition={{ duration: 1}}                             
                                            className='font-light text-lg border border-white/40 p-2 bg-black/10 shadow-2xl hover:scale-110 cursor-pointer hover:bg-black/60 rounded-xl '>                                        
                                        <textarea  name="message"  onChange={() => handleChange} onClick={(e)=> handleClick('name', e)} placeholder='Message' className='w-full placeholder:font-semibold p-2 outline-none bg-transparent'/>
                                        {errors.message && <span className="error">{errors.message}</span>}
                                    </motion.div>
                                </div>
                                <div className='w-full relative overflow-hidden h-full  '>
                                    <motion.div 
                                        animate={open ? {opacity: 0, y: 100 } : { opacity: 1, x:0 }} transition={{ duration: 1, }}       
                                        onClick={() => handleSubmit} className='transition-all border p-4 hover:bg-opacity-80 rounded-xl cursor-pointer hover:bg-black/50 '>
                                        
                                        {transfer ?
                                            <div className=''>
                                                <motion.h2 
                                                    initial={{ x: 80}} 
                                                    animate={{ x: 0}}
                                                    exit={{  x: -80 }}
                                                    transition={{ duration: 1}} 
                                                    className='font-semibold text-xl text-center '>Sending</motion.h2>
                                            </div>
                                            :
                                            <motion.div >
                                                <motion.h2 
                                                    initial={{  x: 80}} 
                                                    animate={{  x: 0}}
                                                    exit={{  x: -80 }}
                                                    transition={{ duration: 1}} 
                                                    className='font-semibold text-xl text-center'>
                                                        Send Message
                                                    </motion.h2>
                                            </motion.div>
                                        }
                                    </motion.div>
                                </div>
                                {/* <motion.div  
                                className=' '>
                                </motion.div> */}
                               

                            </div>
                        </motion.div>
                    </div>
                
            </div>
        </div>
  )
}

export default Contact