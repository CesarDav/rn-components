import { View, SectionList, Text } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama",]
    },
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama",]
    },

];
export const SectionListScreen = () => {
    return (
        <View
            style={{ ...styles.globalMargin, flex: 1 }}
        >

            <SectionList
                sections={casas}
                renderItem={({ item }) => <Text>{item}</Text>}
                ListHeaderComponent={() => <HeaderTitle title='Section list' />}
                ListFooterComponent={() => <HeaderTitle title={`Total home ${casas.length}`} />}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                stickySectionHeadersEnabled
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={`Total:${section.data.length}`} />
                )}
                SectionSeparatorComponent={() => <ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
