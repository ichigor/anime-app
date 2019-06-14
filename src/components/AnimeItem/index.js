import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import { general } from '~/styles';

import styles from './styles';

const AnimeItem = ({ anime, onPress }) => (
  <TouchableOpacity onPress={onPress} style={general.containerItem}>
    <View style={styles.info}>
      <Image
        style={styles.image}
        source={{
          uri: anime.posterImage.tiny,
        }}
      />
      <Text style={general.titleItem}>{anime.canonicalTitle}</Text>
    </View>
    {/* <Icon name="chevron-right" size={16} /> */}
  </TouchableOpacity>
);

export default AnimeItem;
