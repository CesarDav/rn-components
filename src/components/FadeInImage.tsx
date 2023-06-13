
import { FC, useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View, } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { menuItems } from '../data/MenuItems';

interface Props {
    uri: string,
    style?: StyleProp<ImageStyle>
}

export const FadeInImage: FC<Props> = ({ uri, style }) => {
    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsloading] = useState<boolean>(true);

    const finishLoading = () => {
        setIsloading(false);
        fadeIn();
    }

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    color="#5856D6"
                    size={30}
                />
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    width: "100%",
                    height: 400,
                    opacity,
                    ...style as any,
                }}

            />
        </View>
    )
}
