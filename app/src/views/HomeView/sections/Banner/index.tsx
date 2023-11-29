import { Button, Container } from '@/components'

export function Banner() {
	return (
		<div className="md:py-32 py-12 relative">
			<div
				className="md:block hidden bg-banner w-full h-full -z-1 bg-no-repeat bg-cover bg-fixed bg-right blur-lg absolute left-0 top-0"></div>
			<Container className="relative z-10">
				<div className="md:w-7/12 grid gap-4">
					<h1 className="uppercase md:text-8xl text-6xl font-black">find clothes that matches your
                        style</h1>
					<p className="md:text-gray-400 text-gray-600 text-lg">Browse through our diverse range of
                        meticulously crafted
                        garments,
                        designed to bring out your
                        individuality and cater to your sense of style.</p>
					<Button>Shop Now</Button>
				</div>
			</Container>
		</div>
	)
}