import { HeaderLogoContainer } from "./styles";
import { HeaderContainer } from "./styles";
import Image from '../../ui-components/Image';
import Focus from "../../ui-components/animated/Focus";

interface HeaderProps {
    visibility: boolean;
}

const Header = ({ visibility }: HeaderProps) => {
                        
    return (
        <>
            <HeaderContainer show={visibility}>
                <HeaderLogoContainer>
                    <Focus><Image source={process.env.PUBLIC_URL + '/img/PN-logo-Fav-Icon.png'} width={60} height={60} /></Focus>
                </HeaderLogoContainer>
            </HeaderContainer>
        </>
    )
}

export default Header;