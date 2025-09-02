import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../../emailjs-config.js';
import SocialLinks from '../SocialLinks/SocialLinks';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef();

  // GSAP animations with improved ScrollTrigger
  useGSAP(() => {
    gsap.fromTo('.contact-heading', 
      { opacity: 0, y: -50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
    
    gsap.fromTo('.contact-form', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.3, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    gsap.fromTo('.contact-info', 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        delay: 0.6, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );

    gsap.fromTo('.contact-social', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play reverse play reverse'
        }
      }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate form data
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Debug: Log the configuration
      console.log('EmailJS Config:', EMAILJS_CONFIG);
      console.log('Form Data:', formData);
      
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ user_name: '', user_email: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('EmailJS returned non-200 status:', result.status);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='contact-container  text-white h-max flex flex-col items-center justify-center overflow-hidden p-8 mt-14'>
      <div className='max-w-4xl w-full'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h2 className='contact-heading text-5xl md:text-6xl font-bold mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-500'>
              Get In Touch
            </span>
          </h2>
          <p className='contact-heading text-xl text-gray-300 max-w-2xl mx-auto'>
            Ready to collaborate? Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Contact Information */}
          <div className='contact-info lg:col-span-1'>
            <div className='bg-slate-800 bg-opacity-40 p-6 rounded-lg shadow-lg border border-slate-700'>
              <h3 className='text-2xl font-bold mb-6 text-cyan-300'>Let's Connect</h3>
              
              <div className='space-y-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-300 to-teal-500 rounded-full flex items-center justify-center'>
                    <svg className='w-6 h-6 text-slate-900' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold text-white'>Email</h4>
                    <p className='text-gray-300 text-sm'>rajath2010rrp@gmail.com</p>
                  </div>
                  
                </div>
                
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-300 to-teal-500 rounded-full flex items-center justify-center'>
                    <svg className='w-6 h-6 text-slate-900' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold text-white'>Location</h4>
                    <p className='text-gray-300'>Mysuru, India</p>
                  </div>
                </div>
                
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-cyan-300 to-teal-500 rounded-full flex items-center justify-center'>
                    <svg className='w-6 h-6 text-slate-900' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold text-white'>Response Time</h4>
                    <p className='text-gray-300'>Within 24 hours</p>
                  </div>
                  
                </div>
              </div>
              
                         </div>
           </div>

          {/* Contact Form */}
          <div className='contact-form lg:col-span-2'>
            <div className='bg-slate-800 bg-opacity-40 p-8 rounded-lg shadow-lg border border-slate-700'>
              <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label htmlFor='user_name' className='block text-sm font-medium text-gray-300'>
                      Your Name *
                    </label>
                    <input
                      type='text'
                      id='user_name'
                      name='user_name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-300 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300'
                      placeholder='Enter your name'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label htmlFor='user_email' className='block text-sm font-medium text-gray-300'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='user_email'
                      name='user_email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-300 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300'
                      placeholder='Enter your email'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-300'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-300 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none'
                    placeholder='Tell me about your project or just say hello!'
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className='p-4 bg-green-900 bg-opacity-50 border border-green-500 rounded-lg text-green-300'>
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className='p-4 bg-red-900 bg-opacity-50 border border-red-500 rounded-lg text-red-300'>
                    ❌ Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-cyan-300 to-teal-500 text-slate-900 font-bold py-4 px-6 rounded-lg hover:from-cyan-400 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                >
                  {isSubmitting ? (
                    <div className='flex items-center justify-center space-x-2'>
                      <div className='w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin'></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Social Links Section */}
        <div className='contact-social flex-col items-center justify-center text-center w-full mt-12'>
          <h3 className='text-2xl font-bold mb-6 text-cyan-300'>Connect With Me</h3>
          <p className='text-gray-300 mb-6'>Follow me on social media for more updates and projects</p>
          <SocialLinks variant="contact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
