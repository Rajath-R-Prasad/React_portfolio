import React from 'react'

function Contact() {
  return (
    <>  
    <div id='contact' className='contact-container p-8 bg-gray-800 text-white h-screen flex flex-col items-center justify-center'>
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
      </div>
    </>
  )
}

export default Contact
