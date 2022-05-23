import { HamburgerMenu, HeaderLogoContainer, Navigation } from "./styles";
import { HeaderContainer, LogoText } from "./styles";
import Image from '../../ui-components/Image';
import { useState } from "react";
import BlockReveal from "../../ui-components/block-reveal/BlockReveal";

interface Menu {
    name: string;
    hrefId: string;
}

export interface HeaderProps {
    menuItems: Menu[]
    tMenu?: any
}

const Header = ({ menuItems, tMenu }: HeaderProps) => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [visibility, setVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        tMenu(!isMenuOpen);
    }

    setTimeout(() => {
        setVisibility(true);
    }, 4200);

    const navMenu = <Navigation isMenuOpen={isMenuOpen}>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index} onClick={toggleMenu}><a href={item.hrefId}>{item.name}</a></li>
                            ))}
                        </ul>
                    </Navigation>
                        
    return (
        <>
            <HeaderContainer show={visibility}>
                <HeaderLogoContainer>
                    <Image source={process.env.PUBLIC_URL + '/img/PN-logo-Fav-Icon.png'} width={40} height={40} />
                    <LogoText>Pranshu Nijhawan</LogoText>
                </HeaderLogoContainer>
                <HamburgerMenu isMenuOpen={isMenuOpen} onClick={toggleMenu} />
            </HeaderContainer>
            {isMenuOpen && <BlockReveal color='var(--first-color)' children={navMenu} duration={1} fadeAnimationDelay={0.5}
                    blockAnimationDelay={0} fullScreen={false} leftToRight={true} />}
        </>
    )
}

export default Header;