import React, { Component } from 'react';

import {
  View, TextInput, FlatList, ActivityIndicator, Text, Image,
} from 'react-native';

import AnimeItem from '~/components/AnimeItem';

import api from '~/services/api';

import { general } from '~/styles';

import styles from './styles';

export default class Anime extends Component {
  state = {
    anime: this.props.navigation.state.params,
  };

  render() {
    console.tron.log(this.props.navigation.state.params);
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Image
            style={styles.image}
            source={{
              uri: this.state.anime.posterImage.original,
            }}
          />
          <Text>{this.state.anime.canonicalTitle}</Text>
          <Text>Total episodios: {this.state.anime.episodeCount}</Text>
          <Text>Sinopse: {this.state.anime.synopsis}</Text>
        </View>
      </View>
    );
  }
}
