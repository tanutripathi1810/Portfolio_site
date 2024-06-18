import React from 'react';
import {useState,useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../util/motion';

//template_upvrrmc
//service_fz7nzv4
//67U-OXQR3cwWnTvLD

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
  name:'',
  email:'',
  message:'',
});

const [loading, setLoading] = useState(false);


const handleChange =(e)=>{
  const {target}=e;
  const {name,value} = target;

  setForm({...form,[name]:value,})

};
const handleSubmit=(e)=>{
  e.preventDefault();
  setLoading(true);

  emailjs.send('service_fz7nzv4','template_upvrrmc',
    {
      from_name: form.name,
      to_name:'Tanu',
      from_email:form.email,
      to_email:'tripathitanu02@gmail.com',
      message:form.message
    },
    '67U-OXQR3cwWnTvLD'
  )
  .then(()=>{
    setLoading(false);
    alert('Thank you. I will get back to you as soon as possible.');

    setForm({
      name:'',
      email:'',
      message:''
    });
  },
(error)=>{
  setLoading(false);
  console.error(error);

  alert("Ahh, something went wrong. Please try again.")
});

}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
    <form 
    ref={formRef}
    onSubmit={handleSubmit}
    className="mt-12 flex flex-col gap-8"
    >
      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input type="text" name='name' value={form.name}
        onChange={handleChange}
        placeholder="What's your name"
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlines-none border-none font-medium' />
      </label>

      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your Email</span>
        <input type="email" name='email' value={form.email}
        onChange={handleChange}
        placeholder="What's your email "
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlines-none border-none font-medium' />
      </label>

      <label className='flex flex-col'>
        <span className='text-white font-medium mb-4'>Your message</span>
        <textarea rows="7"  name='message' value={form.message}
        onChange={handleChange}
        placeholder="What do you want to say?"
        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlines-none border-none font-medium' />
      </label>

    <button
    type='submit'
    className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
      {loading ? "Sending..." : "Send"}
    </button>

    </form>
  </motion.div>

  <motion.div variants={slideIn('right','tween',0.2,1)}
  className='xl:w-[400px] xl:h-[550px] xl:mx-10 md:h-[550px] h-[350px]'

  >
    <EarthCanvas/>
  
  </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");