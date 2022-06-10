import IconType from "../../types/enums/IconTypes";
import Center from "../../ui-components/Center";
import Icon from "../../ui-components/icon/Icon";
import { NavigationContainer, NavigationItemContainer } from "./styles";

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
                    <NavigationItemContainer key={index}>
                        <a href={item.href}><Icon iconType={item.iconType} /></a>
                    </NavigationItemContainer>
                ))}
            </NavigationContainer>
        </Center>
    )
}

export default NavigationMenu;