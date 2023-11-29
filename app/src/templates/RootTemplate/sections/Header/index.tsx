'use client'
import { useState } from 'react'
import { SlBasket } from 'react-icons/sl'
import { CgProfile } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { Container, Logo } from '@/components'
import routes from '@/core/routes'
import Link from 'next/link'

export default function Header() {
	const [ open, setOpen ] = useState<boolean>(false)
	const ICON_SIZE = 28

	const toggleOpenMenu = () => {
		setOpen(!open)
	}

	return (
		<header className="xl:h-32 h-16 bg-white flex">
			<Container
				className="mx-auto relative flex flex-1 flex-initial items-center justify-between xl:gap-24 gap-2.5 border-b">
				<div className="flex gap-2.5">
					<button className="xl:hidden block" onClick={toggleOpenMenu}>
						<AiOutlineMenu size={ICON_SIZE}/>
					</button>
					<Logo/>
				</div>
				<ul className={`absolute gap-2 z-50 xl:static translate-y-full xl:translate-y-0 bottom-0 left-1 right-1 xl:w-auto font-medium xl:flex flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 ${open ? 'flex' : 'hidden'}`}>
					{
						routes.map((e, index) => {
							return (
								<li key={e.title + index}>
									<a href={e.path}
										className="block text-black rounded xl:bg-transparent hover-text"
										aria-current="page">{e.title}</a>
								</li>
							)
						})
					}
				</ul>
				<div className="flex-1 hidden md:flex">
					<input className="w-full h-12 bg-slate-200 px-4 rounded-full outline-0" type="text"
						placeholder="Search for products..."/>
				</div>
				<div className="flex gap-2.5">
					<button className="md:hidden block"><BiSearch size={ICON_SIZE}/></button>
					<button className="hover:text-primary transition"><SlBasket size={ICON_SIZE}/></button>
					<Link href="/signin" className="hover:text-primary transition"><CgProfile size={ICON_SIZE}/></Link>
				</div>
			</Container>
		</header>
	)
}