import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateScaleVertical, textScale} from './responsiveui';
import BrokenLink from './BrokenLink';
import ModalCompFirst from './ModalCompFirst';
import BottomModalOne from './BottomModalOne';
import BottomModalTwo from './BottomModalTwo';

const optionsList = [
  {
    id: 1,
    text: 'Xbox.com',
    icon: require('./icons/xbox.png'),
  },
  {
    id: 2,
    text: 'Beehance.com',
    icon: require('./icons/beehance.png'),
  },
  {
    id: 3,
    text: 'Invision.com',
    icon: require('./icons/invision.png'),
  },
  {
    id: 4,
    text: 'Chrome.com',
    icon: require('./icons/chrome.png'),
  },
  {
    id: 5,
    text: 'Netflix.com',
    icon: require('./icons/netflix.png'),
  },
  {
    id: 6,
    text: 'Reddit.com',
    icon: require('./icons/reddit.png'),
  },
  {
    id: 7,
    text: 'Amazonprime.com',
    icon: require('./icons/amazon.png'),
  },
  {
    id: 8,
    text: 'Skype.com',
    icon: require('./icons/skype.png'),
  },
  {
    id: 9,
    text: 'Vimeo.com',
    icon: require('./icons/vimeo.png'),
  },
  {
    id: 10,
    text: 'Instagram.com',
    icon: require('./icons/instagram.png'),
  },
];

export default function LinkedDomainOptions() {
  const [isDomainLinked, setIsDomainLinked] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={[styles.container]}>
          {/* Header with profile img and middle text */}
          <View style={[styles.headContainer]}>
            <TouchableOpacity
              onPress={() => console.log('Navigate to Profile')}>
              <Image
                source={require('./icons/avatar.png')}
                resizeMode="contain"
                style={[styles.headImg]}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.commonText,
                {fontFamily: 'Gilroy-SemiBold', color: '#000000'},
              ]}>
              Linked Domains
            </Text>
            <View style={{width: moderateScale(44)}} />
          </View>

          {/* Linked domain options */}
          {isDomainLinked ? (
            <FlatList
              data={optionsList}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <>
                  <View
                    style={[
                      styles.optionsContainer,
                      item.id === 10 ? styles.noBorder : styles.withBorder,
                    ]}>
                    <View style={[styles.optionsIconsText]}>
                      <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={styles.headImg}
                      />
                      <Text
                        style={[
                          styles.commonText,
                          {fontFamily: 'Gilroy-Regular'},
                        ]}>
                        {item.text}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => setIsOpenModal(!isOpenModal)}>
                      <Image
                        source={require('./icons/three_dots.png')}
                        resizeMode="contain"
                        style={{height: moderateScaleVertical(16)}}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              )}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => (
                <>
                  <View style={[styles.lastSyncedContainer]}>
                    <Text style={[styles.lastText]}>
                      Linked on June 23-22 04:23 PM
                    </Text>
                    <Text style={[styles.lastText]}>
                      Last time Synchronized July-22-23 3:23 PM
                    </Text>
                  </View>
                </>
              )}
            />
          ) : (
            <BrokenLink />
          )}
        </View>
        {/* <ModalCompFirst
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          setIsDomainLinked={setIsDomainLinked}
        /> */}
        {/* <BottomModalOne isOpen={isOpenModal} setIsOpen={setIsOpenModal} /> */}
        <BottomModalTwo isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  // Last synced
  lastSyncedContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(12),
  },
  lastText: {
    fontFamily: 'Gilroy-Regular',
    color: 'rgba(0, 0, 0, 0.60)',
    fontSize: textScale(14),
    textAlign: 'center',
    lineHeight: 25,
  },
  // Link Options
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: moderateScaleVertical(15),
    marginBottom: moderateScaleVertical(15),
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  optionsIconsText: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: moderateScale(12),
  },
  withBorder: {
    borderBottomWidth: 1,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  // Header
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScaleVertical(16),
  },
  headImg: {
    width: moderateScale(44),
    height: moderateScaleVertical(44),
  },
  // Global Container
  commonText: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: textScale(16),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: moderateScale(16),
  },
});
