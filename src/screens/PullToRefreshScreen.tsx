import { useContext, useState } from 'react';

import { View, ScrollView, RefreshControl, Dimensions } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';


const dimension = Dimensions.get('screen').height

export const PullToRefreshScreen = () => {
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [data, setData] = useState<string>();

    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext);


    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
            setData('Hola Mundo')
        }, 1500)
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={dimension * 0.40}
                    progressBackgroundColor={dividerColor}
                    colors={[colors.text]}
                    tintColor={dark ? 'white' : 'black'}

                />
            }
        >
            <View
                style={styles.globalMargin}
            >

                <HeaderTitle
                    title='Pull to refresh'
                />
                {
                    data && (
                        <HeaderTitle
                            title={data}
                        />

                    )
                }


            </View>
        </ScrollView>
    )
}
