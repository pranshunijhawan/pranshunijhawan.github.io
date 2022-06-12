import { useState } from "react";
import IconType from "../../types/enums/IconTypes";
import { GetTheme } from "../../types/theme-service";
import Icon from "../../ui-components/icon/Icon";
import { ToggleOutline, ToggleContainer, ToggleButtonContainer, ToggleButtonOutlineContainer } from "./styles";

interface ToggleProps {
    themeHandler: any;
}

const Toggle = ({ themeHandler }: ToggleProps) => {

    const setTheme = GetTheme();
    const setIconTheme = setTheme ? IconType.Moon : IconType.Sun;

    const [darkMode, setDarkMode] = useState(setTheme);
    const [icon, setIcon] = useState(setIconTheme);

    const toggleClickHandler = () => {
        setDarkMode(!darkMode);
        const iconType = icon === IconType.Moon ? IconType.Sun : IconType.Moon;
        setIcon(iconType);
        themeHandler();
    }
    
    return (
        <ToggleOutline>
            <ToggleContainer onClick={toggleClickHandler}>
                <ToggleButtonOutlineContainer>
                    <ToggleButtonContainer isDarkMode={darkMode}>
                        <Icon iconType={icon} />
                    </ToggleButtonContainer>
                </ToggleButtonOutlineContainer>
            </ToggleContainer>
        </ToggleOutline>
    )
}

export default Toggle;