import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import {UPLOAD_URL} from '@env';

export default function MultiImageUpload() {
  const [images, setImages] = useState([]);

  const handleCamera = () => {
    ImagePicker.openCamera({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      setImages([...images, image.path]);
    });
    console.log(images);
  };
  const handleGallery = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      setImages([...images, image.path]);
    });
    console.log(images);
  };
  const handleRemoveImage = indexToRemove => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
  };
  // image upload
  const handleUpload = async () => {
    const formDataArray = images.map((image, index) => {
      const body = new FormData();
      body.append('photo', {
        uri: image,
        name: `uploadedImage${index}.png`,
        filename: `imageName${index}.png`,
        type: 'image/png',
      });
      return body;
    });

    try {
      const uploadPromises = formDataArray.map(formData =>
        axios.post(UPLOAD_URL, formData, {
          headers: {'Content-Type': 'multipart/form-data'},
        }),
      );

      const responses = await Promise.all(uploadPromises);

      responses.forEach((response, index) => {
        if (response?.data?.status === 200) {
          console.log(`Upload ${index} successful:`, response.data);
        } else {
          console.log(`Upload ${index} failed:`, response.data);
        }
      });
      // clear image array
      setImages([]);
    } catch (error) {
      console.log('Upload error:', error);
    }
  };

  return (
    <>
      <Text style={{textAlign: 'center', marginTop: 16}}>Image Upload</Text>
      <View style={styles.container}>
        <FlatList
          data={images}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={
            <View style={{justifyContent: 'center', marginHorizontal: 6}}>
              <Text style={{color: '#0666EB', fontSize: 30}}>+</Text>
            </View>
          }
          style={styles.imageContainer}
          contentContainerStyle={{padding: 12}}
          renderItem={({item, index}) => (
            <View style={{position: 'relative'}}>
              <Image
                source={{uri: item}}
                resizeMode="contain"
                style={styles.imageCard}
              />
              <Text
                onPress={() => handleRemoveImage(index)}
                style={[styles.closeButton, {transform: [{rotate: '45deg'}]}]}>
                +
              </Text>
            </View>
          )}
        />
        <TouchableOpacity onPress={handleGallery} style={styles.btn}>
          <Text style={styles.btnText}>Open Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCamera} style={styles.btn}>
          <Text style={styles.btnText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleUpload}
          style={[styles.btn, {backgroundColor: '#85E6C5'}]}>
          <Text style={[styles.btnText, {fontSize: 16}]}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: -2,
    right: 4,
    // backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'red',
    // borderRadius: 10,
    borderCurve: 'circular',
    padding: 4,
    fontSize: 20,
  },
  btn: {backgroundColor: '#0666EB', padding: 12, borderRadius: 10},
  btnText: {textAlign: 'center', color: '#ffffff'},
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageContainer: {
    borderRadius: 10,
    backgroundColor: 'lightgray',
    borderColor: '#212121',
    borderWidth: 1,
    maxHeight: 124,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    rowGap: 16,
  },
});
