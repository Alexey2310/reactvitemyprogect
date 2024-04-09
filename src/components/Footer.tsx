import styled from 'styled-components'
import { FcUsb } from 'react-icons/fc'
import { FcTabletAndroid } from "react-icons/fc"
import { FcWiFiLogo } from "react-icons/fc"
const FooterE = styled.footer`
	padding: 2rem;
	background-color: pink;
  display: flex;
  justify-content: center;
`
const IconsContainer = styled.div``
export const Footer = () => {
	return (
		<FooterE>
			<IconsContainer>
				<FcUsb size={30} />
				<FcTabletAndroid size={30}/>
        <FcWiFiLogo size={30} />
			</IconsContainer>
		</FooterE>
	)
}
