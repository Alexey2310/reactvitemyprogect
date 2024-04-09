import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { NavigationLinks } from '../data'

type NavigationProps = {
	navigationLinks: NavigationLinks
}
const Header = styled.header`
	position: fixed;
	padding: 1rem;
	width: 100%;
	background-color: var(--bgchead);
`
const HeaderContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`
const HeaderBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width:427px) {
		display: block;
	}
`
const HeaderLogo = styled(Link)`
	/* display: block; */
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: red;
	margin-right: 1rem;

	@media (max-width:427px) {
		display: none;
	}
`
const NavLinkE = styled(NavLink)`
	text-decoration: none;
	font-family: var(--fflinks);
	font-size: 20px;
	text-overflow: clip;
`
const HeaderNavigateBox = styled.nav``
const HeaderNavigate = styled.ul`
	list-style: none;
	display: flex;
	column-gap: 7px;
`
export const Navigate = ({
	navigationLinks
}: NavigationProps) => {
	return (
		<Header>
			<HeaderContainer>
				<HeaderBox>
					<HeaderLogo to={'/'}></HeaderLogo>
					<HeaderNavigateBox>
						<HeaderNavigate>
							{navigationLinks.map((link) => (
								<NavLinkE to={link.path} key={link.title}>
									{link.title}
								</NavLinkE>
							))}
						</HeaderNavigate>
					</HeaderNavigateBox>
				</HeaderBox>
			</HeaderContainer>
		</Header>
	)
}
