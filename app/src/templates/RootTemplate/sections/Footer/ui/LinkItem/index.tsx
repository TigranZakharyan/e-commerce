import { PropsWithChildren } from 'react'

export default function LinkItem({ children }: PropsWithChildren) {
	return <p className="text-gray-700 text-2xl capitalize">{children}</p>
}