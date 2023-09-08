import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateScaleVertical, textScale} from './responsiveui';
import {foodData} from './constantData';



export default function SearchScreen() {
  const [isLiked, setLiked] = useState(false);
  // food card
const renderItemCard = ({item}) => {
  return (
    <>
      <View style={styles.cardContainer}>
        {/* image section */}
        <Image
          source={item.img}
          resizeMode="contain"
          style={styles.cardImage}
        />
        {/* text section */}
        <View style={styles.cardInnerContainer}>
          {/* row one */}
          <View style={styles.cardHeadTextContainer}>
            <Text style={[styles.cardHeadText, {flex: 0.9}]}>
              {item.headtext}
            </Text>
            <TouchableOpacity
            onPress={()=>setLiked(!isLiked)}
            style={{flex: 0.1, alignItems: 'flex-end'}}>
              <Image
                source={require('./icons/heart-filled.png')}
                resizeMode="contain"
                style={styles.heartBtn}
              />
            </TouchableOpacity>
          </View>
          {/* row two */}
          <Text style={styles.cardLocationText}>{item.origin}</Text>
          {/* row three */}
          <View style={styles.cardMoneyContainer}>
            <View style={styles.cardMoneyInnerContainer} />
            <Text style={styles.cardMoneyText}>$$$</Text>
          </View>
        </View>
      </View>
    </>
  );
};
  return (
    <View style={styles.contanier}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#757575'}
          style={styles.searchText}
        />
        <TouchableOpacity onPress={() => console.log('Search clicked')}>
          <Image
            source={require('./icons/search.png')}
            resizeMode="contain"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Nearby food list section */}
      <FlatList
        data={foodData}
        keyExtractor={item => item.id}
        renderItem={renderItemCard}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.nearbyText}>Nearby</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // card style
  cardMoneyText: {
    fontFamily: 'SF Pro Display',
    fontSize: textScale(12),
    color: '#757575',
    lineHeight: 14,
  },
  cardMoneyInnerContainer: {
    backgroundColor: '#757575',
    width: moderateScale(4),
    height: moderateScaleVertical(5),
    borderRadius: moderateScale(2),
  },
  cardMoneyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  cardLocationText: {
    fontFamily: 'SF Pro Display',
    fontSize: textScale(14),
    color: '#757575',
    lineHeight: 16,
  },
  heartBtn: {
    width: moderateScale(12),
    height: moderateScaleVertical(12),
  },
  cardHeadText: {
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    fontSize: textScale(16),
    color: '#212121',
    lineHeight: 20,
  },
  cardHeadTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardInnerContainer: {
    flex: 1,
    paddingLeft: moderateScale(16),
    rowGap: 4,
  },
  cardImage: {
    width: moderateScale(64),
    height: moderateScaleVertical(64),
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScaleVertical(16),
  },

  // nearby text
  nearbyText: {
    fontFamily: 'SF Pro Display',
    fontSize: textScale(20),
    lineHeight: 30,
    fontWeight: 'bold',
    marginVertical: moderateScaleVertical(12),
  },
  // search bar
  searchContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: moderateScale(40),
    height: moderateScaleVertical(40),
    marginTop: moderateScaleVertical(50),
    marginBottom: moderateScaleVertical(16),
    paddingHorizontal: moderateScale(20),
  },
  searchText: {
    color: '#212121',
    fontFamily: 'SF Pro Display',
    fontSize: textScale(14),
  },
  searchIcon: {width: moderateScale(16), height: moderateScaleVertical(16)},
  // global styles
  contanier: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: moderateScale(16),
  },
});
