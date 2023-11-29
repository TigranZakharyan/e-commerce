import { Container, ShopCard } from '@/components'
import { Title } from '../../ui'
import { products } from '@/mock/products'

export function ItemsSection() {
	return (
		<div className="pb-20">
			<Container>
				<Title>new arrivals</Title>
				<div className="flex sm:justify-between flex-wrap justify-center">
					{
						products.map((e, index) => <ShopCard key={e.id} {...e} />)
					}
				</div>
				<Title>top selling</Title>
				<div className="flex sm:justify-between flex-wrap justify-center">
					{
						products.map((e, index) => <ShopCard key={e.id} {...e} />)
					}
				</div>
			</Container>
		</div>
	)
}