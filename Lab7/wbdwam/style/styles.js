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
    input: {
      height: 40,
      margin: 12,
      width: 100,
      borderWidth: 1,
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    flexRow: {
      flexDirection: "row",
    },
    input: {
      borderColor: "#4630eb",
      borderRadius: 4,
      borderWidth: 1,
      flex: 1,
      height: 48,
      margin: 16,
      padding: 8,
    },
    listArea: {
      flex: 1,
      paddingTop: 40,
      width: 200,
    },
    sectionContainer: {
      marginBottom: 16,
      marginHorizontal: 16,
    },
    sectionHeading: {
      fontSize: 18,
      marginBottom: 8,
    },
  });
