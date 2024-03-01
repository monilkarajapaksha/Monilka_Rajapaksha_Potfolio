import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';


const ServiceCard = (index,title,icon) => {
  return(
    <Tilt className=" xs:w-[250px] w-full">
      <motion.dev
       variants={fadeIn(" right","spring",0.5 *index,0.75)}
       className=" w-full green-pink-gradient p=[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className=' bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]'>{title}</div>
      </motion.dev>
    </Tilt>
  )
  
}

const About = () => {
  return (
    <>
    <motion.dev variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview</h2>
    </motion.dev>
    <motion.p
    variants={fadeIn("","",0.1,0.1)}
    className=' mt-4 text-secondary text-17px max-w-3xl leading-[30px]'
    >I am an engineering undergraduate at the University of
    Ruhuna. As a computer engineering undergraduate, I
    am dedicated to merging my love for mathematics with
    the art of UI/UX design, seeking to create seamless and
    visually captivating user experience
    </motion.p>
    <div className=' mt-20 flex flex-wrap gap-10'>
      {services.map((services,index)=>{
        <ServiceCard key={services.title} index={index} {...services} />
      })}

    </div>
    </>
   
  )
}

export default About