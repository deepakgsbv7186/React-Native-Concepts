import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';

const SelectCountryScreen = _props => {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('71');
  useEffect(() => {
    getCountryData();
  }, []);
  const getCountryData = async () => {
    const URL = 'https://restcountries.com/v3.1/all';
    try {
      const response = await axios.get(URL);
      if (response.status === 200) {
        setCountry(
          response.data.map((country, index) => {
            return {
              value: `${++index}`,
              lable: country?.name?.common,
              image: {
                uri: country?.flags?.png,
              },
            };
          }),
        );
      }
    } catch (error) {
      console.log('Country data ======', error);
    }
  };
  // console.log(country);
  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      search
      maxHeight={400}
      value={selectedCountry}
      data={country}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={e => {
        setSelectedCountry(e.value);
      }}
    />
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
