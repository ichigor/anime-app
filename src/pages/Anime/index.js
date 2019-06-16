import React, { Component } from 'react';

import {
  View, Text, Image, ScrollView,
} from 'react-native';

import styles from './styles';

export default class Anime extends Component {
  state = {
    anime: this.props.navigation.state.params,
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.title}>{this.state.anime.canonicalTitle}</Text>
            {this.state.anime.posterImage === null ? (
              <Image style={styles.image} source={require('~/images/no_image.gif')} />
            ) : (
              <Image
                style={styles.image}
                source={{
                  uri: this.state.anime.posterImage.original,
                }}
              />
            )}
            <Text style={styles.episode}>Episode count: {this.state.anime.episodeCount}</Text>
            <Text style={styles.synopsis}>Synopsis: {this.state.anime.synopsis}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
