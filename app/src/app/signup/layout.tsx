import { AuthTemplate } from '@/templates'
import { PropsWithChildren } from 'react'

export default function SignUpLayout({ children }: PropsWithChildren) {
	return (
		<AuthTemplate>
			{children}
		</AuthTemplate>
	)
}