import { Stars } from '@/components'
import { Product } from '@/types'
import Image from 'next/image'

export function ShopCard(props: Product) {
	const { price, stars, name, img } = props
	return (
		<div>
			<div className="w-72 h-80 bg-gray-200 rounded-3xl mb-4 p-10">
				<div className="w-full h-full relative">
					<Image src={img} alt={name} fill/>
				</div>
			</div>
			<span className="uppercase text-sm font-bold mb-2">{name}</span>
			<div className="flex gap-2 mb-2">
				<Stars count={stars}/>
				<p className="font-medium">{stars}/<span className="text-gray-500">5</span></p>
			</div>
			<h5 className="font-bold text-2xl">${price}</h5>
		</div>
	)
}