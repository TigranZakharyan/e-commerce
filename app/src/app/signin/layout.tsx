import { AuthTemplate } from '@/templates'
import { PropsWithChildren } from 'react'

export default function SignInLayout({ children }: PropsWithChildren) {
	return (
		<AuthTemplate>
			{children}
		</AuthTemplate>
	)
}