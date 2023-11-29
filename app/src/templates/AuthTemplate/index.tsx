import { Container } from '@/components'
import { PropsWithChildren } from 'react'

export default function AuthTemplate({ children }: PropsWithChildren) {
	return (
		<main>
			<Container className="py-20 flex flex-col items-center gap-7">
				{children}
			</Container>
		</main>
	)
}
