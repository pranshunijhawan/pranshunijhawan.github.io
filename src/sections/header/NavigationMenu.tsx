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

    const clearHash = () => {
        setTimeout(() => {
            window.history.replaceState("", document.title, window.location.pathname);
        }, 1);
    }

    return(
        <Center>
            <NavigationContainer>
                {navigationMenus && navigationMenus.map((item, index) => (
                    <a href={item.href} key={index} onClick={clearHash}>
                        <NavigationItemContainer>
                            <Icon iconType={item.iconType} />
                        </NavigationItemContainer>
                    </a>
                ))}
            </NavigationContainer>
        </Center>
    )
}

export default NavigationMenu;