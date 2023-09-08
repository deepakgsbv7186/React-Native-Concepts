import axios from 'axios';

const HOME = '192.168.29.43';
const OFFICE = '192.168.2.1';

const URL = `http://${HOME}:3000/books/`;
// GET
export const getAPIdata = async () => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (error) {
    console.log('GET===== ', error);
  }
};

// POST
export const postAPIdata = async newbook => {
  try {
    const result = await axios.post(URL, newbook, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result.data;
  } catch (error) {
    console.log('POST===== ', error);
  }
};

// DELETE
export const deleteAPIdata = async id => {
  try {
    const _URL = `${URL}${id}`;
    const result = await axios.delete(_URL);
    return result;
  } catch (error) {
    console.log('DELETE=======', error);
  }
};

// PATCH
export const editAPIdata = async (id, book) => {
  try {
    const _URL = `${URL}${id}`;
    // if (book) {
    const result = await axios.patch(_URL, book, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result;
    // }
  } catch (error) {
    console.log('PATCH===== ', error);
  }
};

// Country Data
export const getCountryData = async () => {
  const URL = 'https://restcountries.com/v3.1/all';
  try {
    const response = await axios.get(URL);
    if (response.status === 200) {
      const countryData = response.data.map((country, index) => ({
        value: `${++index}`,
        label: country?.name?.common,
        image: {
          uri: country?.flags?.png,
        },
      }));
      return countryData;
    }
  } catch (error) {
    console.error('Country data error:', error);
  }
  return [];
};
