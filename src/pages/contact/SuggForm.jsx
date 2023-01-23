import React from 'react'

const SuggForm = () => {
  const handleSubmit=(e)=>{
    // e.preventDefault()
  }
  
  return (
    <div  className='flex bg-black/20 shadow-[20px_25px_20px] shadow-darkbg shadow-xl flex-col justify-center items-center w-full p-2 rounded-xl border-2 border-darkbg mb-10 bg-blend-darken '>
    <h3 className="w-fit my-8 border-b-2 border-darkbg text-textcolor px-4 py-2 text-xl text-center">Have any Suggessition or Feedback ? </h3>
    <form target="_blank" action="https://formsubmit.co/2a7dbf0560568d3826d835b3c6d41f4b" method="POST" onSubmit={handleSubmit} >
            <input type="name" className='bg-gradf/40 border-2 border-fontcolor h-10 w-5/6 rounded-md border-lightbg outline-0 color-textcolor px-4' placeholder='Your Name' name='name' required  />
            <input type="email" className='bg-gradf/40 border-2 border-fontcolor outline-0 h-10 w-5/6 rounded-md my-4 border-lightbg color-white px-4' placeholder='Your Email' name='email' required />
            <textarea name="suggession" cols="60" rows="6" className='bg-gradf/40 border-2 border-fontcolor rounded-md w-5/6 border-lightbg border-2 border-lightbg p-4 outline-none max-h-32 ' placeholder='Write here...' required ></textarea> <br />
            <input type="submit" className='bg-gradf/40 border-2 border-fontcolor py-1 px-3 my-2 border-darkbg rounded-md font-semibold cursor-pointer'  />
</form>
    </div>
  )
}

export default SuggForm