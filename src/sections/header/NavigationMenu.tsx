import IconType from "../../types/enums/IconTypes";
import Center from "../../ui-components/Center";
import Icon from "../../ui-components/icon/Icon";
import { NavigationContainer, NavigationItemContainer } from "./styles";
import { Link } from "react-scroll";

interface NavigationMenuMetaData {
    iconType: IconType;
    href: string;
}

export interface NavigationMenuProps {
    navigationMenus: NavigationMenuMetaData[]
}

const NavigationMenu = ({ navigationMenus }: NavigationMenuProps) => {

    return(
        <Center>
            <NavigationContainer>
                {navigationMenus && navigationMenus.map((item, index) => (
                    <Link to={item.href} smooth duration={500} key={index} offset={-40} activeClass='active'>
                        <NavigationItemContainer>
                            <Icon iconType={item.iconType} />
                        </NavigationItemContainer>
                    </Link>
                ))}
            </NavigationContainer>
        </Center>
    )
}

export default NavigationMenu;