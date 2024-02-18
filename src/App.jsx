import { motion } from 'framer-motion'
import React, { useState } from 'react'

const App = () => {
   const [a, b] = useState(false);
   const vari1 = {
    initial:{x:"100%"},
    animate :{x:"0"},
    exit:{x: "100%"}
   }

   const vari2 = {
    initial : {opacity : 0},
    animate : {opacity : 1},
    exit : {opacity : 0}
   }
  return (
    <div className='w-full h-screen bg-zinc-900 text-white font-["gilroy]'>
      <nav className='w-full py-5 px-10 flex justify-between items-center'>
       <h3>Some Brand</h3>
       <div className='links flex gap-5 text-sm items-center'>
        <a href="#">Home</a>
        <a href="#">Pricing</a>
        <a href="">Contact</a>
        <a href="#">About</a>

        <button onClick={()=>b(!a)} className='px-3 py-2 bg-zinc-700 ml-20 rounded-lg'>
          Open Nav
        </button>
       </div>

      </nav>
    <motion.aside 
     variants={vari1}
    initial = "initial"
    animate = {a ? "animate" : "exit"}
    transition={{ease: [0.76, 0, 0.24, 1] , duration :1.2 , staggerChildren : 0.2}}
    className='w-96 h-screen bg-zinc-800 fixed right-0 top-0 py-40 px-10'>
      <motion.button onClick={()=>b(!a)} variants={vari2}
    transition={{ease: [0.76, 0, 0.24, 1] , duration :1.2 }}
      
      >close</motion.button>
      {["Home" , "About","Contact","Pricing"].map((item , index) => (
        <motion.a variants={vari2} 
    transition={{ease: [0.76, 0, 0.24, 1] , duration :1.2 }}
        key={index} className='block text-5xl font-semibold mt-10'>{item}</motion.a>
      ))}
    </motion.aside>
    </div>

  )
}

export default App