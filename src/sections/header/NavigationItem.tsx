import IconType from "../../types/enums/IconTypes";
import Icon from "../../ui-components/icon/Icon";
import { NavigationItemContainer } from "./styles";

interface NavigationItemProps {
    iconType: IconType;
    href: string;
}

const NavigationItem = ({ iconType, href }: NavigationItemProps) => {

    const clearHash = () => {
        setTimeout(() => {
            window.history.replaceState("", document.title, window.location.pathname);
        }, 1);
    }

    return (
        <a href={href} onClick={clearHash}>
            <NavigationItemContainer>
                <Icon iconType={iconType} />
            </NavigationItemContainer>
        </a>
    )
}

export default NavigationItem;