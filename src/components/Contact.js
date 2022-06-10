import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='bg-[#0a192f]  w-full h-screen p-4 flex justify-center items-center'>
            <form method="POST" action='https://getform.io/f/9c572df0-9283-491d-8e92-43230c586a5e' className='flex flex-col max-w-[600px] w-full'>
                <div className="py-8">
                    <p className='text-4xl  inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
                    <p className='text-gray-300 py-4'>Submit email to me </p>
                </div>
                <input className='my-4 p-2 bg-[#435695] ' type="text" placeholder='Name' name='name' required />
                <input className='my-4 p-2 bg-[#435695]' type="email" placeholder='Email' name='email' required />
                <textarea className='my-4 p-2 bg-[#435695]' name="message" id="" placeholder='Message' rows="5" required></textarea>
                <button className='text-white border-2 hover:bg-pink-600  px-4 my-8 mx-auto flex items-center'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;