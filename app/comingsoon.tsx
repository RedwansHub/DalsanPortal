'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ComingSoon = (props: Props) => {
  return (
    <motion.div 
    className="w-full absolute h-full flex justify-center items-center flex-col gap-4">
        <motion.h2 
            initial={{ opacity: 0, scale: 0}} animate={{ opacity: 1, scale: 1}} transition={{ duration: 2}} 
            className="w-full text-center text-8xl font-bold">Dalsan Industries</motion.h2> 
        <motion.h2 
            initial={{ opacity: 0, y: 80}} animate={{ opacity: 1, y: 0}} transition={{ duration: 1, delay: 1}} 
        className="w-full text-center text-xl font-medium">Coming Soon</motion.h2> 
    </motion.div>
  )
}

export default ComingSoon