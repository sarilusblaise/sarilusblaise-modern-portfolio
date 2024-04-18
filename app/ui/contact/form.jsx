import React from 'react';

export default function ContactForm() {
	return (
		<form
			action=''
			className='text-zinc-500 flex flex-col items-start gap-8 sm:w-4/6 md:w-3/6 xl:w-[40%] max-w-full w-full overflow-x-hidden'
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
			<button
				type='button'
				className='w-full text-zinc-200 text-xl tracking-wide transition-[background] hover:bg-purple-700 uppercase font-bold block rounded-md px-8 py-4 bg-purple-900'
			>
				send message
			</button>
		</form>
	);
}
