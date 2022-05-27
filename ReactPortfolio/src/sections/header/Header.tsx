import { HeaderLogoContainer, Navigation } from "./styles";
import { HeaderContainer, LogoText } from "./styles";
import Image from '../../ui-components/Image';

interface HeaderProps {
    visibility: boolean;
}

const Header = ({ visibility }: HeaderProps) => {
                        
    return (
        <>
            <HeaderContainer show={visibility}>
                <HeaderLogoContainer>
                    <Image source={process.env.PUBLIC_URL + '/img/PN-logo-Fav-Icon.png'} width={40} height={40} />
                    <LogoText>Pranshu Nijhawan</LogoText>
                </HeaderLogoContainer>
            </HeaderContainer>
        </>
    )
}

export default Header;