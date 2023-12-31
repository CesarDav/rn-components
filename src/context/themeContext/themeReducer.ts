import { Theme } from '@react-navigation/native';


type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }



export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.6)',
    colors: {
        primary: '#084F64',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal'
    }
}
export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.4)',
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'black',
        notification: 'teal'
    }
}




export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return {
                currentTheme: 'light',
                dark: false,
                dividerColor: 'rgba(0,0,0,0.6)',
                colors: {
                    primary: '#084F64',
                    background: 'white',
                    card: 'white',
                    text: 'black',
                    border: 'black',
                    notification: 'teal'
                }
            }
        case 'set_dark_theme':
            return {
                currentTheme: 'dark',
                dark: true,
                dividerColor: 'rgba(255,255,255,0.4)',
                colors: {
                    primary: '#75CEDB',
                    background: 'black',
                    card: 'black',
                    text: 'white',
                    border: 'black',
                    notification: 'teal'
                }
            }
        default:
            return state;
    }

}