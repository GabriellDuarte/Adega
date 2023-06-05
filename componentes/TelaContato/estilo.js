import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    familia_icones:{
      borderRadius: 5,
      width: '90%',
      marginBottom: 15,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    familia_titulo:{
      fontSize: 30,
      borderStyle: 'solid',
      borderColor: '#222',
    },
    espaco_icones:{
      margin: 5
    }
  });

export default estilos;