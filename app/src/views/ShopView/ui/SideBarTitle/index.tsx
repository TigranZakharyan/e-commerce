import { PropsWithChildren } from 'react'

export function SideBarTitle({ children }: PropsWithChildren) {
	return (
		<h2 className="font-bold text-2xl mb-6">{children}</h2>
	)
}