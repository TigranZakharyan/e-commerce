import { ShopCard } from '@/components'
import { shopProducts } from '@/mock/shopProducts'
import { Product } from '@/types'
import { MdKeyboardArrowDown } from 'react-icons/md'

export function Content() {
	return (
		<div className="col-span-3">
			<div className="flex justify-between mb-7">
				<h2 className="text-4xl font-semibold">Clothing</h2>
				<div className="flex gap-6 text-gray-600">
					<p>Showing 1-10 of 100 Products</p>
					<div className="flex gap-2">
						<p>Sort by:</p>
						<button className="flex text-black">
							<span>Most Popular</span>
							<span className="mt-1"><MdKeyboardArrowDown /></span>
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap gap-14 justify-between">
				{
					shopProducts.map((e: Product) => <ShopCard key={e.id} {...e} />)
				}
			</div>
		</div>
	)
}