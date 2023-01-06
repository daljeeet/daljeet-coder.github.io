import React from 'react'

const SuggForm = () => {
  const handleFeedback = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='flex flex-col w-full p-2 rounded-xl border-2 border-darkbg mb-10 bg-blend-darken '>
    <h3 className="w-fit my-8 border-b-2 border-darkbg text-textcolor px-4 py-2 text-xl">Have any Suggessition or Feedback ?</h3>
    <form onSubmit={handleFeedback} >
            <input type="name" className='bg-darkbg border-2 h-10 w-5/6 rounded-md border-lightbg outline-0 color-textcolor px-4' placeholder='Your Name' />
            <input type="email" className='bg-darkbg border-2 outline-0 h-10 w-5/6 rounded-md my-4 border-lightbg color-white px-4' placeholder='Your Email' />
            <textarea name="Suggessition" cols="60" rows="6" className='bg-darkbg rounded-md w-5/6 border-lightbg border-2 border-lightbg p-4 outline-none max-h-32 ' placeholder='Write here...' ></textarea> <br />
            <input type="submit" className='border-2 py-1 px-3 my-2 border-darkbg rounded-md  cursor-pointer'  />
</form>
    </div>
  )
}

export default SuggForm