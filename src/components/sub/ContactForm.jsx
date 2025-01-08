'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <motion.form 
      initial={{ opacity: 0, x: 150 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: .4 }} 
      viewport={{ once: true }} 
      className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
        <input 
          type="text" 
          name="name" 
          className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none dark:bg-zinc-900 dark:border-red-300 transition-colors" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none dark:bg-zinc-900 dark:border-red-300 transition-colors" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <input 
        type="text" 
        name="subject" 
        className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none dark:bg-zinc-900 dark:border-red-300 transition-colors" 
        placeholder="Subject" 
        value={formData.subject} 
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="message" 
        className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none dark:bg-zinc-900 dark:border-red-300 transition-colors" 
        placeholder="Your Message" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      ></textarea>
      <button 
        type="submit" 
        className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 dark:bg-zinc-800 dark:border-red-300 dark:text-gray-300
        dark:hover:bg-gradient-to-r from-blue-600 to-violet-600 dark:hover:text-white transition-colors cursor-pointer"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;