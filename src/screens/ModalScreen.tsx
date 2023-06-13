import { useState } from 'react';

import { Text, View, Modal, Button } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';

export const ModalScreen = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <View>
            <HeaderTitle
                title='Modal Screen'
            />

            <Button
                title='Open Modal'
                onPress={() => setOpenModal(!openModal)}
            />
            <Modal
                animationType='fade'
                transparent
                visible={openModal}

            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'white',
                            width: 220,
                            height: 200,
                            justifyContent: 'center',
                            alignItems: 'center',
                            elevation: 10,
                            borderRadius: 5
                            // shadowOpacity:

                        }}
                    >

                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20
                            }}
                        >
                            Modal
                        </Text>
                        <Text
                            style={{
                                fontWeight: '300',
                                fontSize: 16,
                                marginBottom: 20
                            }}
                        >
                            Cuerpo del modal
                        </Text>
                        <Button

                            title='Cerrar'
                            onPress={() => setOpenModal(!openModal)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
