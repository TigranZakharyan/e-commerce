import Image from 'next/image'

type Props = {
    count: number
}
export function Stars({ count }: Props) {
	const WIDTH = 20
	const HEIGHT = 14
	return (
		<div className="flex gap-0.5 items-center">
			{new Array(count).fill(null).map((_, index) => {
				return (
					<div className="w-5 h-5 relative" key={index}>
						<Image src="/img/star.png" alt="Star" fill/>
					</div>
				)
			})}
		</div>
	)
}