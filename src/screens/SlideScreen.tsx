import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ImageSourcePropType, View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParam } from '../navigator/Navigation.types';
import { StackNavigationProp } from '@react-navigation/stack';

const { height: screenHeigth, width: screenWidth } = Dimensions.get('window');


interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png')
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png')
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png')
  },
]


export const SlideScreen = () => {
  const [activeIndex, setActiveInde] = useState<number>(0);
  const [completStep, setCompleteStep] = useState<boolean>(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParam>>()

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center'
        }}
      >
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />

        <Text
          style={styles.title}
        >
          {item.title}
        </Text>
        <Text
          style={styles.subTitle}
        >
          {item.desc}
        </Text>

      </View>
    )

  }


  return (
    <View
      style={{
        flex: 1,
        paddingTop: 50
      }}
    >
      <Carousel
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={(item) => {
          setActiveInde(item)
          if (item === 2) {
            setCompleteStep(true);
          }
        }}
      />

      <View

        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center'
        }}
      >

        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#5856d6'

          }}

        />

        {
          completStep && (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#5856d6',
                width: 140,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: 'white',
                }}
              >Enter</Text>
              <Icon
                name='chevron-forward-outline'
                color='white'
                size={30}
              />
            </TouchableOpacity>
          )
        }


      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6'
  },
  subTitle: {
    fontSize: 16,
  }
})
