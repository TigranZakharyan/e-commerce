import { useId } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string
}

export function Input(props: Props) {
	const id = useId()
	return (
		<div className="mb-4">
			{
				props.label && <label 
					className="block text-gray-700 text-sm font-bold mb-2" 
					htmlFor={props?.id ?? id}>{props.label}</label>
			}
			<input 
				type="text" 
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id={id}
				{...props}
			/>
		</div>
	)
}
