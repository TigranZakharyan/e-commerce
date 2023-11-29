import { Header, Footer } from '@/templates/RootTemplate/sections'
import { PropsWithChildren } from 'react'

export default function RootTemplate({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			{ children }
			<Footer />
		</>
	)
}