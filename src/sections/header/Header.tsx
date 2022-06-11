import { HeaderLogoContainer } from "./styles";
import { HeaderContainer } from "./styles";
import Image from '../../ui-components/Image';
import Scale from "../../ui-components/animated/Scale";
import { Link } from "react-scroll";

interface HeaderProps {
    visibility: boolean;
}

const Header = ({ visibility }: HeaderProps) => {
                        
    return (
        <>
            <HeaderContainer show={visibility}>
                <HeaderLogoContainer>
                    <Scale>
                        <Link to='home' smooth={true} duration={1500}>
                            <Image source={process.env.PUBLIC_URL + '/img/PN-logo-Fav-Icon.png'} width={60} height={60} />
                        </Link>
                    </Scale>
                </HeaderLogoContainer>
            </HeaderContainer>
        </>
    )
}

export default Header;