import { useState } from "react";
import IconType from "../../types/enums/IconTypes";
import Icon from "../../ui-components/icon/Icon";
import { NavigationItemContainer } from "./styles";

interface NavigationItemProps {
    iconType: IconType;
    href: string;
}

const NavigationItem = ({ iconType, href }: NavigationItemProps) => {

    const [toggle, setToggle] = useState(false);

    const navigateTo = (id: string) => {
        const section = document.getElementById(id);

        if (section !== null) {
            section.scrollIntoView();
            setToggle(true);
        }

        setTimeout(() => {
            setToggle(false);
        }, 500);
    }

    return (
        <NavigationItemContainer toggle={toggle} onClick={() => navigateTo(href)}>
            <Icon iconType={iconType} />
        </NavigationItemContainer>
    )
}

export default NavigationItem;