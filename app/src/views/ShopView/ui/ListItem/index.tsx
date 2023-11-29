import { IoIosArrowForward } from 'react-icons/io'
import { PropsWithChildren } from 'react'

export function ListItem({ children }: PropsWithChildren) {
	return (
		<div className="text-gray-500 flex justify-between mb-3 cursor-pointer hover:text-gray-700">
			<p className="text-2xl">{children}</p>
			<IoIosArrowForward size={24}/>
		</div>
	)
}