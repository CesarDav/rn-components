import { useRef } from "react";
import { Animated, Easing } from "react-native";


export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(-100)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 350,
                useNativeDriver: true
            }
        ).start();


    }


    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 350,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            position,
            {
                toValue: -100,
                duration: 350,
                useNativeDriver: true
            }
        ).start()
    }

    const startPosition = (initPosition: number, duration: number = 300) => {
        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                easing: Easing.bounce
            }
        ).start();
    }


    return {
        fadeIn,
        fadeOut,
        startPosition,
        opacity,
        position

    }
}

