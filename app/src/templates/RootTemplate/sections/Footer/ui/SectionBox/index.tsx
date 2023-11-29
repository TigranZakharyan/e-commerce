import { PropsWithChildren } from 'react'

export default function SectionBox({ children }: PropsWithChildren) {
	return <div className="grid gap-5 content-start">{children}</div>
}