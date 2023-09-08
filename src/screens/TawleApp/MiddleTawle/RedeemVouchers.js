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
import {foodData, redeemedVoucherData} from './constantData';
import BottomModal from './BottomModal';

export default function RedeemVouchers() {
  const [isRedeemOpen, setIsRedeemModal] = useState(false);
  // redeemed voucher card
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
          <TouchableOpacity
            onPress={() => setIsRedeemModal(!isRedeemOpen)}
            style={styles.cardInnerContainer}>
            {/* row one */}
            <Text style={[styles.cardHeadText]}>{item.headtext}</Text>
            {/* row two */}
            <Text style={styles.cardLocationText}>{item.points} pts</Text>
            {/* row three */}
            <Text style={styles.cardMoneyText}>Use by {item.red_date}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <>
      <View style={styles.contanier}>
        {/* Header goes here */}
        {/* redeedmed vouchers list section */}
        <FlatList
          data={redeemedVoucherData}
          keyExtractor={item => item.id}
          renderItem={renderItemCard}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomModal
        isOpen={isRedeemOpen}
        setIsOpen={setIsRedeemModal}
        btnTitle={'Redeem for 120 Chairs'}
      />
    </>
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

  // global styles
  contanier: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: moderateScale(16),
  },
});
