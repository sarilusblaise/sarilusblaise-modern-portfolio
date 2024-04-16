import React from 'react';

export default function ContactForm() {
	return (
		<form
			action=''
			className='text-zinc-500 flex flex-col items-start gap-8  w-full sm:w-4/6 md:w-4/6'
		>
			<input
				className='h-12 w-full p-2 border-b bg-transparent  border-b-zinc-700 border-solid focus:outline-none focus:border-b-zinc-500'
				type='text'
				name='name'
				placeholder='Name *'
			/>
			<input
				className='h-12 w-full p-2 border-b bg-transparent  border-b-zinc-700 border-solid focus:outline-none focus:border-b-zinc-500'
				type='email'
				name='email'
				placeholder='Email *'
			/>
			<textarea
				className=' w-full p-2 border-b bg-transparent  border-b-zinc-700 border-solid focus:outline-none focus:border-b-zinc-500'
				name='message'
				id=''
				cols='30'
				rows='10'
				placeholder='Message *'
			></textarea>
			<button type='button' className=''>
				send message
			</button>
		</form>
	);
}
