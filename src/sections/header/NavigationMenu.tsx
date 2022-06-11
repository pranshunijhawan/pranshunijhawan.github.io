import IconType from "../../types/enums/IconTypes";
import Center from "../../ui-components/Center";
import NavigationItem from "./NavigationItem";
import { NavigationContainer } from "./styles";

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
                    <NavigationItem href={item.href} iconType={item.iconType} key={index} />
                ))}
            </NavigationContainer>
        </Center>
    )
}

export default NavigationMenu;