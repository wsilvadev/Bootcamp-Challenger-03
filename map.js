import React, { Component } from 'react';
import MapView from 'react-native-maps';

// import { Container } from './styles';

export default class MapUser extends Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -27.2177659,
          longitude: -49.6451598,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031
        }}
        showsUserLocation={true}
      />
    );
  }
}
