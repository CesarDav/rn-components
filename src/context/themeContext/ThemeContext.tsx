import { FC, createContext, useReducer, useEffect } from 'react';

import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme, themeReducer, ThemeState } from './themeReducer';


interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}


export const ThemeContext = createContext({} as ThemeContextProps);


interface Props {
    children: React.ReactElement
}

export const ThemeProvider: FC<Props> = ({ children }) => {

    const colorShema = useColorScheme();
    const [theme, dispatch] = useReducer(themeReducer, colorShema === 'dark' ? darkTheme : lightTheme);

    useEffect(() => {
        (colorShema === 'light')
            ? setLightTheme()
            : setDarkTheme()

    },
        [colorShema])

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('dark theme');
    }
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('light theme');
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}