import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
	return (
		<header className="sticky top-0 z-20 w-full px-12 py-6 justify-between flex">
			<div className='flex w-1/2'>
				<h1 className='font-garamond text-3xl'>ReyCo</h1>
			</div>
			<div className='flex w-1/2 justify-end gap-12 items-center'>
				<Link>About</Link>
				<Link>Our Founders</Link>
				<Link>Contact Us</Link>
			</div>
		</header>
	)
}

export default Nav