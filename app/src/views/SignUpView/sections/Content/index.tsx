'use client'
import { Button, Input, LinedText } from '@/components'
import { TUserSignUp } from '@/types'
import { useFormik } from 'formik'
import Link from 'next/link'

export function Content() {
	const formik = useFormik<TUserSignUp>({
		initialValues: {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			phone: 0
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
	})
	return (
		<>
			<div className="text-center">
				<h3 className="text-3xl font-bold">Sign Up</h3>
				<h4 className="text-2xl font-bold">Discover your style with us</h4>
			</div>
			<form className="flex flex-col items-center">
				<Input 
					type="text"
					label="E-mail"
					id="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<Input 
					type="password"
					label="Password"
					id="password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				<Input 
					type="number"
					label="Phone Number"
					id="phone"
					onChange={formik.handleChange}
					value={formik.values.phone}
				/>
				<Button>Sign Up</Button>
			</form>
			<LinedText>or</LinedText>
			<div>
				<Link href="/signin">Already a user? <strong><u>Sign In</u></strong></Link>
			</div>
		</>
	)
}