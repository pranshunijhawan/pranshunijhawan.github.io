import { useState } from "react";
import IconType from "../../types/enums/IconTypes";
import Icon from "../../ui-components/icon/Icon";
import { ToggleOutline, ToggleContainer, ToggleButtonContainer } from "./styles";

interface ToggleProps {
    themeHandler: any;
}

const Toggle = ({ themeHandler }: ToggleProps) => {

    const [darkMode, setDarkMode] = useState(true);
    const [icon, setIcon] = useState(IconType.Moon);

    const toggleClickHandler = () => {
        setDarkMode(!darkMode);
        const iconType = icon === IconType.Moon ? IconType.Sun : IconType.Moon;
        setIcon(iconType);
        themeHandler();
    }
    
    return (
        <ToggleOutline>
            <ToggleContainer onClick={toggleClickHandler}>
                <ToggleButtonContainer isDarkMode={darkMode}>
                    <Icon iconType={icon} />
                </ToggleButtonContainer>
            </ToggleContainer>
        </ToggleOutline>
    )
}

export default Toggle;