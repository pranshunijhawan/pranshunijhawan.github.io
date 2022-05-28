import { HeaderLogoContainer } from "./styles";
import { HeaderContainer } from "./styles";
import Image from '../../ui-components/Image';
import Focus from "../../ui-components/animated/Focus";
import Slide from "../../ui-components/animated/Slide";

interface HeaderProps {
    visibility: boolean;
}

const Header = ({ visibility }: HeaderProps) => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
                        
    return (
        <>
            <HeaderContainer show={visibility}>
                <HeaderLogoContainer>
                    <Slide><Image source={process.env.PUBLIC_URL + '/img/PN-logo-Fav-Icon.png'} width={60} height={60} onClick={scrollToTop} /></Slide>
                </HeaderLogoContainer>
            </HeaderContainer>
        </>
    )
}

export default Header;