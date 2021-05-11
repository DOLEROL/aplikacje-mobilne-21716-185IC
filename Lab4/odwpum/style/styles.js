import { Platform, StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
    Container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 5,
      paddingRight: 5,
      ...Platform.select({
        ios: {
          backgroundColor: 'rgba(255, 204, 100, 0.9)',
        },
        android: {
          backgroundColor: 'rgba(255, 77, 77, 0.7)',
          paddingTop: 40,
        },
        default: {
          backgroundColor: 'rgba(204, 204, 255, 0.9)',
        }
      })
    },
    safeArea: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    Item: {
      backgroundColor: 'rgb(255, 51, 51)',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      minWidth: 91.75,
      textAlign: 'center',
    },
    Title: {
      fontSize: 32,
      color: 'white',
      textAlign: 'center',
    },
    textStyle: {
      //fontFamily: 'Times New Roman',
      color: 'rgb(255, 255, 255)',
    },
    // Text styles
    baseText:{
      fontFamily: "Cochin",
      fontSize: 15,
    },
    titleText: {
      fontWeight: "bold",
    },
    homeTitleText: {
      fontWeight: "bold",
      textAlign: "center",
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
