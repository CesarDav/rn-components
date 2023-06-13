
import { useContext } from 'react';

import { StyleSheet, View, Animated, Button, } from 'react-native';

import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {

    const { opacity, fadeIn, fadeOut, position, startPosition } = useAnimation();

    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View
            style={styles.container}
        >
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    backgroundColor: colors.primary,
                    opacity,
                    transform: [{
                        translateY: position
                    }]
                }}
            />

            <Button
                title='FadeIn'
                onPress={() => {
                    fadeIn();
                    startPosition(-100, 850)

                }}
                color={colors.primary}
            />
            <Button
                title='FadeOut'
                onPress={fadeOut}
                color={colors.primary}
            />

        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    purpleBox: {
        width: 150,
        height: 150,
        marginBottom: 20
    }
})