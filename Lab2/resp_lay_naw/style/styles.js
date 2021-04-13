import { Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
    // Home page container
    homeContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 5,
      paddingRight: 5,
      ...Platform.select({
        ios: {
          backgroundColor: 'rgba(255, 204, 100, 0.9)',
          color: 'rgb(0, 0, 0)',
        },
        android: {
          backgroundColor: 'rgba(255, 255, 100, 0.9)',
          color: 'rgb(0, 0, 0)',
        },
        default: {
          backgroundColor: 'rgba(204, 204, 255, 0.9)',
          color: 'rgb(0, 0, 0)',
        }
      })
    },
    // Page1 container
    page1Container: {
      flex: 1,
      alignContent: 'flex-start',
      paddingLeft: 5,
      paddingRight: 5,
      ...Platform.select({
        ios: {
          backgroundColor: 'rgba(255, 204, 100, 0.9)',
          color: 'rgb(0, 0, 0)',
        },
        android: {
          backgroundColor: 'rgba(255, 255, 100, 0.9)',
          color: 'rgb(0, 0, 0)',
        },
        default: {
          backgroundColor: 'rgba(204, 204, 255, 0.9)',
          color: 'rgb(0, 0, 0)',
        }
      })
    },
    // Page2 container
    page2Container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingLeft: 5,
      paddingRight: 5,
      ...Platform.select({
        ios: {
          backgroundColor: 'rgba(255, 204, 100, 0.9)',
          color: 'rgb(0, 0, 0)',
        },
        android: {
          backgroundColor: 'rgba(255, 255, 100, 0.9)',
          color: 'rgb(0, 0, 0)',
        },
        default: {
          backgroundColor: 'rgba(204, 204, 255, 0.9)',
          color: 'rgb(0, 0, 0)',
        }
      })
    },
    // Page3 container
    page3Container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingLeft: 5,
      paddingRight: 5,
      ...Platform.select({
        ios: {
          backgroundColor: 'rgba(255, 204, 100, 0.9)',
          color: 'rgb(0, 0, 0)',
        },
        android: {
          backgroundColor: 'rgba(255, 255, 100, 0.9)',
          color: 'rgb(0, 0, 0)',
        },
        default: {
          backgroundColor: 'rgba(204, 204, 255, 0.9)',
          color: 'rgb(0, 0, 0)',
        }
      })
    },
    // Page3 img 
    page3ItemImg: {
      flexBasis: 260,
      resizeMode : 'contain',
    },
    page3ItemText1: {
      flexBasis: 'auto',
    },
    page3ItemText2: {
      flexBasis: 'auto',
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
    // Page1 img
    spreadImg: {
      width: 380,
      resizeMode : 'contain',
    },
    // Page2 img
    restImg: {
      height: 400,
      resizeMode : 'contain',
    },
  });
