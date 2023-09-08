import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function JsonPlaceHolder() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersData();
  }, []);
  const getUsersData = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    try {
      const response = await axios.get(URL);
      setUsers(
        response.data.filter(
          user =>
            user?.address?.geo?.lng > 0 && user?.company?.name.includes('o'),
        ),
      );
    } catch (error) {
      console.log('Fetch====', error);
    }
  };
  return (
    <>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={users}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const renderItem = ({item}) => {
  return (
    <>
      {/* task 1: remove negative lng users */}
      {/* task 2: users contains only with company name "Romaguera" */}
      <View style={{margin: 10, padding: 10, backgroundColor: '#F3FDE8'}}>
        <Text style={{color: 'black'}}>UserID : {item?.id}</Text>
        <Text style={{color: 'black'}}>Name : {item?.name}</Text>
        <Text style={{color: 'black'}}>City : {item?.address?.city}</Text>
        <Text style={{color: 'black'}}>Lat : {item?.address?.geo?.lat}</Text>
        <Text style={{color: 'black'}}>Long : {item?.address?.geo?.lng}</Text>
        <Text style={{color: 'black'}}>Company : {item?.company?.name}</Text>
      </View>
    </>
  );
};
