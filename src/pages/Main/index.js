import React, { Component } from 'react';

import {
  View, TextInput, FlatList, ActivityIndicator, Text,
} from 'react-native';

import AnimeItem from '~/components/AnimeItem';

import api from '~/services/api';

import { general } from '~/styles';

import styles from './styles';

export default class Main extends Component {
  state = {
    searchInput: '',
    data: [],
  };

  async componentWillMount() {
    // const animes = await api.get('/anime');
    const animes = await api.get("/anime?filter[text]='shield hero'");
    this.setState({ data: animes.data.data });
  }

  findData = async () => {
    const anime = await api.get("/anime?filter[text]='shield hero'");
    // console.tron.log(anime.data.data);
    return anime;
  };

  navigateToAnime = (anime) => {
    this.props.navigation.navigate('Anime', anime);
  };

  search = async (searchInput) => {
    this.setState({ searchInput });
    // const anime = await api.get('/anime?filter[text]=', searchInput);
    // this.setState({ data: anime.data.data });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={general.searchInput}
            autoCorrect={false}
            placeholder=""
            placeholderTextColor="#666"
            underlineColorAndroid="transparent"
            value={this.state.searchInput}
            onChangeText={this.search}
          />
        </View>
        {this.state.data.length !== 0 ? (
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <AnimeItem
                anime={item.attributes}
                onPress={() => {
                  (this.state.data = item.attributes.canonicalTitle),
                  this.navigateToAnime(item.attributes);
                }}
              />
            )}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}
