import { Button, Input, LinedText } from '@/components'
import Link from 'next/link'

export function Content() {
	return (
		<>
			<div className="text-center">
				<h3 className="text-3xl font-bold">Sign In</h3>
				<h4 className="text-2xl font-bold">Welcome Back</h4>
			</div>
			<form className="flex flex-col items-center">
				<Input 
					type="text"
					label="E-mail"
				/>
				<Input 
					type="password"
					label="Password"
				/>
				<Button>Sign In</Button>
			</form>
			<LinedText>or</LinedText>
			<div>
				<Link href="/signup">Don&apos;t have an account? <strong><u>Sign Up</u></strong></Link>
			</div>
		</>
	)
}