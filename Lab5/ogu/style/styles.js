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
      fontFamily: 'Times New Roman',
      color: 'rgb(255, 255, 255)',
    },
    fontSize26:{
      fontSize: 26,
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
    button: {
      alignItems: "center",
      backgroundColor: "#ff3333",
      padding: 10,
      minWidth: 150,
      margin: 2
    },
    rightSwipeItem: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 10,
    },
    leftSwipeItem: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 220
    },
      listItem: {
      height: 75,
      alignItems: 'center',
      justifyContent: 'center'
    },
    ScrollView:{
      marginLeft: 25,
      marginRight: 25,
    },
    ContainerSwipe: {
      flex: 1,
      paddingTop: 20,
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
  });
