
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ], {
            cancelable: true,
            onDismiss: () => console.log('cancel'),
        })
    }

    const showPrompt = () => {
        Alert.prompt(
            'Promnt Title',
            'Promnt Menssage',
            (valor: string) => console.log(valor)
        )
    }

    return (
        <View
            style={styles.globalMargin}
        >
            <HeaderTitle
                title='Alerts'
            />

            <Button
                title='Show Alert'
                onPress={showAlert}
            />

            <Button
                title='Show Propms'
                onPress={showPrompt}
            />
        </View>
    )
}
