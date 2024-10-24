import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required!";
    if (!formData.email) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S/.test(formData.email)) {
      errors.email = "Email is invalid!";
    }
    if (!formData.message) errors.message = "Message is required!";

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors) > 0) {
      setErrors(validationErrors); // Set the errors according to the validatio n
    } else {
      setErrors({}); // Empty the errors
      setIsSending(true);

      emailjs
        .send(
          'service_1ga3od2',  // Service ID
          'template_3gip6aa', // Template ID
          formData,           // Form Data
          'QgHDxDAwpRkDtWTtd' // Public Key
        )
        .then((response) => {
          toast.success("Message sent successfully!");
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.log("FAILED..." + error);
          toast.error("Failed to send the message. Please try again.")
        })
        .finally(() => {
          setIsSending(false);
        })
    }
  }

  return (
    <div className='p-4 lg:w-3/4' id='contact'>
      <Toaster/>
      <h2 className='my-8 text-4xl font-semibold tracking-tighter text-center'>Let's Connect</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex mb-4 space-x-4'>
          {/* Form: Name */}
          <div className='lg:w-1/2'>
            <input 
              type='text'
              id='name'
              name='name'
              value={formData.name}
              placeholder='Name'
              onChange={handleChange}
              className='w-full px-3 py-2 mb-8 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none'
              />
            {errors.name && (
              <p className='text-sm text-rose-800'>{errors.name}</p>
            )}
          </div>

          {/* Form: Email */}
          <div className='lg:w-1/2'>
            <input 
              type='email'
              id='email'
              name='email'
              value={formData.email}
              placeholder='Email'
              onChange={handleChange}
              className='w-full px-3 py-2 mb-8 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none'
              />
            {errors.email && (
              <p className='text-sm text-rose-800'>{errors.email}</p>
            )}
          </div>
        </div>
        <div>
          {/* Form: Message */}
          <div className='w-full mb-4'>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              placeholder='Message'
              onChange={handleChange}
              className='w-full px-3 py-2 mb-8 text-sm bg-transparent border rounded-lg appearance-none border-stone-50/30 focus:border-stone-400 focus:outline-none'
              rows='6'
              />
            {errors.message && (
              <p className='text-sm text-rose-800'>{errors.message}</p>
            )}
          </div>
          
          <button 
            type='submit' 
            className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isSending}
          >
            <div className='flex items-center justify-center gap-2'>
              {isSending ? 'Sending...' : 'Send'}
              <FiSend/>
            </div>

          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm