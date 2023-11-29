import { PropsWithChildren } from 'react'

export default function Title({ children }: PropsWithChildren) {
	return (
		<h6 className="uppercase text-2xl text-gray-900 tracking-widest">{children}</h6>
	)
}