import { Get, Add } from "./storage-services/local-storage-service";

const THEME_KEY = 'isDarkThemeEnabled';
const DEFAULT_DARK_THEME = 'true'

const Initialize = () => {
    Add(THEME_KEY, DEFAULT_DARK_THEME);
}

export const GetTheme = (): boolean => {
    const storedTheme = Get(THEME_KEY);
    
    if (storedTheme === null) {
        Initialize();
        return DEFAULT_DARK_THEME === 'true';
    }

    return storedTheme === 'true';
}

export const SetTheme = (isDarkTheme: boolean) => {
    Add(THEME_KEY, isDarkTheme.toString());
}