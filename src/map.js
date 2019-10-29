import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import Style from './style';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Modal from 'react-native-modal';

// import { Container } from './styles';
export default class MapUser extends Component {
  state = {
    latitude: -27.2177659,
    longitude: -49.6451598,

    isModalVisible: false,
    markers: []
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { latitude, longitude } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031
          }}
          showsUserLocation={true}
        >
          <Marker
            onPress={this.toggleModal}
            coordinate={{ latitude, longitude }}
          >
            <Modal isVisible={this.state.isModalVisible}>
              <View style={Style.ContainerLogin}>
                <Text style={Style.TextLogin}>Adicionar novo local</Text>

                <TextInput style={Style.InputLogin} />
                <View style={Style.ContainerButton}>
                  <TouchableOpacity
                    style={Style.BtnCancelarLogin}
                    onPress={this.toggleModal}
                  >
                    <Text style={Style.TextCancelar}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Style.BtnSalvarLogin}
                    onPress={this.toggleModal}
                  >
                    <Text style={Style.TextSalvar}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </Marker>
        </MapView>
      </View>
    );
  }
}
