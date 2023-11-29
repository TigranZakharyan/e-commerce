'use client'
import { Button } from '@/components'
import { lightenDarkenColor } from '@/helpers'
import { ListItem, Separator, SideBarTitle } from '@/views/ShopView/ui'
import dynamic from 'next/dynamic'

const RangeSelector = dynamic(() => import('@/views/ShopView/ui').then((mod) => mod.RangeSelector), { ssr: false })

export function Sidebar() {
	const [ MIN_PRICE, MAX_PRICE ] = [ 0, 300 ]
	const COLORS = [ '#00ff00', '#ff0000', '#fcba03', '#fc8403', '#0af5e1', '#0000ff', '#0af5e1', '#f50ada', '#ffffff', '#000000' ]
	return (
		<div>
			<div className="border-2 border-gray-300 rounded-2xl p-6">
				<section>
					<SideBarTitle>Filters</SideBarTitle>
				</section>
				<Separator />
				<section>
					<ListItem>T-shirts</ListItem>
					<ListItem>Shorts</ListItem>
					<ListItem>Shirts</ListItem>
					<ListItem>Hoodie</ListItem>
					<ListItem>Jeans</ListItem>
				</section>
				<Separator/>
				<section>
					<SideBarTitle>Price</SideBarTitle>
					<RangeSelector
						className="w-full h-10"
						min={MIN_PRICE}
						max={MAX_PRICE}
						defaultValue={[ MIN_PRICE, MAX_PRICE ]}
						additionalText="$"
					/>
				</section>
				<Separator/>
				<section>
					<SideBarTitle>Colors</SideBarTitle>
					<div className="grid grid-cols-new5 grid-rows-new2 justify-between gap-y-3.5">
						{
							COLORS.map((e, index) => <div key={e + index}
								className="w-full h-full rounded-full border border-2 cursor-pointer"
								style={{
									backgroundColor: e,
									borderColor: lightenDarkenColor(e, 0.3)
								}}
							/>)
						}
					</div>
				</section>
				<Separator />
				<section>
					<Button className='md:w-full'>Apply Filter</Button>
				</section>
			</div>
		</div>
	)
}