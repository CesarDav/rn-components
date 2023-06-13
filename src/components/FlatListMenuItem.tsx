import { FC, useContext } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, } from "@react-navigation/native";

import { MenuItem } from "../interfaces";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParam } from "../navigator/Navigation.types";
import { setRoute } from "../helpers";
import { ThemeContext } from "../context/themeContext/ThemeContext";


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem: FC<Props> = ({ menuItem }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParam>>();
    const { theme: { colors } } = useContext(ThemeContext)

    // const { colors } = useTheme();


    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate(setRoute(menuItem.component))}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    size={23}
                    color={colors.primary}
                />

                <Text
                    style={{
                        ...styles.itemText,
                        color: colors.text
                    }}
                >
                    {menuItem.name}
                </Text>

                <Icon
                    style={{
                        position: 'absolute',
                        right: 0
                    }}
                    name='chevron-forward-outline'
                    size={23}
                    color='#5856D6'
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    }
})
