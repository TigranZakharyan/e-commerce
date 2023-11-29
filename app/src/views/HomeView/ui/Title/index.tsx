import { PropsWithChildren } from 'react'

export function Title({ children }: PropsWithChildren) {
	return (
		<h3 className="uppercase text-5xl font-extrabold text-center py-20">{children}</h3>
	)
}