import { Container, Logo } from '@/components'
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci'
import { LinkItem, SectionBox, Title } from './ui'

export default function Footer() {
	const ICON_SIZE = 40
	return (
		<div className="bg-gray-300 sm:py-40 py-10">
			<Container className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-32 grid-cols-1 gap-10">
				<div>
					<Logo/>
					<p className="text-gray-500 mt-5 mb-10">We have clothes that suits your style and which you’re proud
                        to
                        wear.
                        From women to men.</p>
					<div className="flex gap-3.5">
						<CiFacebook size={ICON_SIZE}/>
						<CiInstagram size={ICON_SIZE}/>
						<CiTwitter size={ICON_SIZE}/>
					</div>
				</div>
				<SectionBox>
					<Title>company</Title>
					<LinkItem>about</LinkItem>
					<LinkItem>features</LinkItem>
					<LinkItem>works</LinkItem>
					<LinkItem>career</LinkItem>
				</SectionBox>
				<SectionBox>
					<Title>help</Title>
					<LinkItem>customer support</LinkItem>
					<LinkItem>delivery details</LinkItem>
					<LinkItem>terms & conditions</LinkItem>
					<LinkItem>privacy policy</LinkItem>
				</SectionBox>
				<SectionBox>
					<Title>faq</Title>
					<LinkItem>account</LinkItem>
					<LinkItem>manage deliveries</LinkItem>
					<LinkItem>orders</LinkItem>
					<LinkItem>payments</LinkItem>
				</SectionBox>
			</Container>
		</div>
	)
}