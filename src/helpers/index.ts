


export const setRoute = (component: string) => {
    switch (component) {
        case 'Animation101Screen':
            return 'Animation101Screen';

        case 'Animation102Screen':
            return 'Animation102Screen';

        case 'SwitchScreen':
            return 'SwitchScreen';

        case 'AlertScreen':
            return 'AlertScreen';

        case 'TextInputsScreen':
            return 'TextInputsScreen';

        case 'PullToRefreshScreen':
            return 'PullToRefreshScreen';

        case 'SectionListScreen':
            return 'SectionListScreen';

        case 'ModalScreen':
            return 'ModalScreen';

        case 'InfiniteScrollScreen':
            return 'InfiniteScrollScreen';

        case 'SlideScreen':
            return 'SlideScreen';

        case 'ChangeThemeScreen':
            return 'ChangeThemeScreen';

        default:
            return 'HomeScreen'
    }
}