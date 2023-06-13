import { useContext, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const { theme: { colors } } = useContext(ThemeContext)


    const { isActive, isHappy, isHungry } = state

    const onChange = (value: boolean, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value
        })
    }


    return (
        <View
            style={{ marginHorizontal: 20 }}
        >
            <HeaderTitle title='Switches' />

            <View
                style={styles.switchRow}
            >
                <Text
                    style={{
                        ...styles.switchText,
                        color: colors.text
                    }}
                >isActive</Text>

                <CustomSwitch
                    onChange={(value) => onChange(value, 'isActive')}
                    isOn={isActive}
                />
            </View>
            <View
                style={styles.switchRow}
            >
                <Text
                    style={{
                        ...styles.switchText,
                        color: colors.text
                    }}
                >isHungry</Text>
                <CustomSwitch
                    onChange={(value) => onChange(value, 'isHungry')}
                    isOn={isHungry}
                />
            </View>
            <View
                style={styles.switchRow}
            >
                <Text
                    style={{
                        ...styles.switchText,
                        color: colors.text
                    }}
                >isHappy</Text>
                <CustomSwitch
                    onChange={(value) => onChange(value, 'isHappy')}
                    isOn={isHappy}
                />
            </View>


            <Text
                style={{
                    ...styles.switchText,
                    color: colors.text
                }}
            >
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchText: {
        fontSize: 25
    }
})
