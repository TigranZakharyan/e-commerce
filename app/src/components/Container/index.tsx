export function Container({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={`container px-2.5 mx-auto ${className}`}>{children}</div>
	)
}

