import IconType from "../../types/enums/IconTypes";
import Center from "../../ui-components/Center";
import NavigationItem from "./NavigationItem";
import { NavigationContainer, NavigationItemOutlineContainer } from "./styles";

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
                    <NavigationItemOutlineContainer key={index}>
                        <NavigationItem href={item.href} iconType={item.iconType} />
                    </NavigationItemOutlineContainer>
                ))}
            </NavigationContainer>
        </Center>
    )
}

export default NavigationMenu;