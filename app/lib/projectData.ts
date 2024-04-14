type ProjectInfo = {name:string, description:string, code:string, demo:string, stacks:string[]}

export const projectsData:ProjectInfo[] = [
    {
		name: 'EspyonOtograf',
		description:
			'"Espyon-otograf" is a tool currently in development designed to help students, scholars, and professionals conduct a comprehensive check of spelling mistakes in French text documents. It can highlight these spelling errors and also correct them.',
		code: 'https://github.com/sarilusblaise/espyon-otograf',
		demo: 'https://espyon-otograf.vercel.app/',
        stacks:['react','nextJS', 'firebase', 'tailwindcss']
	},
	{
		name: 'TaskMaster',
		description:
			'TaskMaster is a user-friendly task management app to help users stay organized, prioritize tasks, and achieve their goals.It is built with React, tailwind css and ESlint.',
		code: 'https://github.com/sarilusblaise/TaskMaster',
		demo: 'https://main--my-task-master.netlify.app/',
        stacks:['react', 'tailwindcss','ESlint']
	},

	{
		name: 'Tictactoe',
		description:
			' Tic Tac Toe game is built using React, ESLint, and CSS, which provide a powerful combination of front-end development tools. The game follows the classic rules of Tic Tac Toe, where two players take turns marking X and O on a 3x3 grid until one player wins or the game ends in a draw.',
		
		code: 'https://github.com/sarilusblaise/tic-tac-toe-game',
		demo: 'https://mytic-tac-toe-game.netlify.app/',
        stacks:['react', 'css']
	},

	{
		name: 'Contact',
		description:
			'This is a contact management application that allows users to easily store and organize their contacts.This project come from the react-router tutorial which I have completed that allowed me to enhance my skills in the react router library',
		code: 'https://github.com/sarilusblaise/contact-app',
		demo: 'https://mycontact-app1.netlify.app/',
        stacks:['react', 'react-router', 'css']
	},

	{
		name: 'Feed app',
		description:
			'This is a basic social feed app that let users  create, edit, and delete posts on their personal feed.This project comes from the redux essentials skills tutorial that allowed me to better understand the core of the redux library state management.',
            code:'',
		demo: 'https://basic-feed-app.vercel.app/',
        stacks:['redux','react']
	},

	{
		name: 'Documentation',
		description:
			'This project is a simple documentation page. it is built with JS,HTML and CSS.As part of the responsive web design course on FreeCodeCamp, I successfully completed this project, providing an intuitive platform to explore and access documentation.',
		code: 'https://github.com/sarilusblaise/documentation-page',
		demo: 'https://sarilusblaise.github.io/documentation-page/',
        stacks:['html', 'javascript', 'css']
	},
];