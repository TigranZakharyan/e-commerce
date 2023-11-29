import { PropsWithChildren } from 'react'

export function LinedText({ children }: PropsWithChildren) {
	return (
		<div className="flex items-center py-4 w-full">
			<div className="flex-grow h-px bg-gray-400"></div> 
			<span className="flex-shrink text-2xl text-gray-500 px-4 italic font-light uppercase">{children}</span>
			<div className="flex-grow h-px bg-gray-400"></div>
		</div>
	)
}