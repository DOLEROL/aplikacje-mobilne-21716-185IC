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
    },
    textStyle: {
      fontFamily: 'Times New Roman',
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
  });
