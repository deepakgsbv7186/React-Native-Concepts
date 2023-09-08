import {TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const VectorIcon = ({name, size, color, type, onPress, style, ...props}) => {
  // const {name, size, color, type, onPress, style} = props;

  let IconComponent;
  switch (type) {
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    case 'FontAwesome6':
      IconComponent = FontAwesome6;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'AntDesign':
      IconComponent = AntDesign;
      break;
    case 'Entypo':
      IconComponent = Entypo;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'EvilIcons':
      IconComponent = EvilIcons;
      break;
    case 'Octicons':
      IconComponent = Octicons;
      break;
    case 'Fontisto':
      IconComponent = Fontisto;
      break;
    case 'SimpleLineIcons':
      IconComponent = SimpleLineIcons;
      break;
    default:
      IconComponent = MaterialIcons;
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <IconComponent name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default VectorIcon;
