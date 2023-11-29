export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>){
	return (
		<button
			{...props}
			className={`hover:bg-primary w-full md:w-56 transition rounded-full text-center py-4 bg-gray-950 text-white ${props.className}`}>{props.children}</button>
	)
}