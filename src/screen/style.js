import { StyleSheet } from "react-native";
const Style = StyleSheet.create({
  TextLogin: {
    margin: 25,
    fontSize: 25,
    fontWeight: 'bold',
  },
  ContainerButton: {
    flexDirection: 'row',
  },
  ContainerLogin: {
    borderRadius: 6,
    height: '30%',
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center"
  },
  TextSalvar: {
    color: "white",
    fontSize: 20
  },
  TextCancelar: {
    color: "white",
    fontSize: 20
  },
  InputLogin: {
    borderColor: '#ddd',
    borderWidth: 1.8,
    width: "90%",
    paddingLeft: 30,
    fontSize: 20,
    borderRadius: 6
  },
  BtnSalvarLogin: {
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 6,
    margin: 15,
    width: 150,
    height: 50,
    backgroundColor: "green"
  },
  BtnCancelarLogin: {
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 6,
    margin: 15,
    width: 150,
    height: 50,
    backgroundColor: "silver"
  }
});
export default Style;
