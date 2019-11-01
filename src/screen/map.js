import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

import MapView, { Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Modal from 'react-native-modal';

import Style from './style';
import api from "../navigation/api";

// import { Container } from './styles';
export default class MapUser extends Component {
  state = {
    isModalVisible: false,
    region: [],
    userPath: "",
    markers: [],
    users: [],
  };
  saveUserArray = (users, user) => {
    users = this.state.users;
    const repos = users.slice();
    repos.push(user);
    return repos;
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  // findCordinates = () => {
  //   Geolocation.getCurrentPosition(position => console.log(position));
  // };
  getUsers = async () => {
    const response = await api.get(`/users/${this.state.userPath}`);
    const newUser = await this.saveUserArray(this.state.users, response.data);
    this.setState({ users: newUser });
    console.log(this.state.users);
  };

  addMarker(coordinate) {
    this.setState({
      markers: [...this.state.markers, { latlng: coordinate }],
      region: [...this.state.region, { latlng: coordinate }]
    });
  }
  handlePathChange = userPath => {
    this.setState({ userPath });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={{
            latitude: -23.83172234659233,
            longitude: -46.11883420497178,
            latitudeDelta: 0.02,
            longitudeDelta: 0.01
          }}
          region={this.state.region.latlng}
          onLongPress={e => (
            this.addMarker(e.nativeEvent.coordinate), this.toggleModal()
          )}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          mapType="standard"
          zoomEnabled={true}
          pitchEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true}
          showsCompass={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
        >
          {this.state.markers.map((marker, i) => (
            <Marker coordinate={marker.latlng} key={i}>
              <Image
                source={{
                  uri: `https://avatars0.githubusercontent.com/u/${this.state.users.map(
                    item => item.id
                  )}?v=4`,
                }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
              <Modal isVisible={this.state.isModalVisible}>
                <View style={Style.ContainerLogin}>
                  <Text style={Style.TextLogin}>Adicionar novo local</Text>
                  <TextInput
                    onChangeText={this.handlePathChange}
                    style={Style.InputLogin}
                    placeholder="Usu?rio no Github"
                  />
                  <View style={Style.ContainerButton}>
                    <TouchableOpacity
                      onPress={this.toggleModal}
                      style={Style.BtnCancelarLogin}
                    >
                      <Text style={Style.TextCancelar}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={Style.BtnSalvarLogin}
                      onPress={() => (this.getUsers(), this.toggleModal())}
                    >
                      <Text style={Style.TextSalvar}>Salvar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}
