import { Content, Sidebar } from '@/views/ShopView/sections'
import { Container } from '@/components'

export function ShopView() {
	return (
		<main>
			<Container className="grid grid-cols-4 gap-5 py-20">
				<Sidebar/>
				<Content />
			</Container>
		</main>
	)
}