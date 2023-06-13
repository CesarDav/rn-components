import 'react-native-gesture-handler';

import { Navigator } from './src/navigator/Navigator';
import { ThemeContext, ThemeProvider } from './src/context/themeContext/ThemeContext';


// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: '',
//     // background: 'white',
//     // card: '',
//     // text: '',
//     // border: '',
//     // notification: ''
//   }
// }


export default function App() {
  return (
    <ThemeProvider>

      <Navigator />

    </ThemeProvider>
  )
}