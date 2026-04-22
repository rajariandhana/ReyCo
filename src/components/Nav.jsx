import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
	return (
		<header className="sticky top-0 z-20 w-full px-6 md:px-12 py-6 justify-between flex">
			<div className='flex w-1/2'>
				<h1 className='font-garamond text-3xl text-rose-300'>ReyCo</h1>
			</div>
			<div className='flex w-1/2 text-xs md:text-md justify-end gap-12 items-center'>
				<Link>About</Link>
				<Link>Founders</Link>
				<Link>Contact</Link>
			</div>
		</header>
	)
}

export default Nav