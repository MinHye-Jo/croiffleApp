import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowFlex2Left: {
    flex: 2,
    alignItems: 'flex-start'
  },
  rowFlex1Right: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10
  },
  font5M15: {
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: 15
  },
  font5M15blue: {
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: 15,
    color: 'rgb(0, 191, 213)'
  },
  font5M20: {
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: 20
  },
  font4R10: {
    fontFamily: 'S-CoreDream-4Regular',
    fontSize: 10
  },
  font4R15: {
    fontFamily: 'S-CoreDream-4Regular',
    fontSize: 15
  },
  prevHeaderFont: {
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: 20,
    color: '#fff'
  },
  hr: {
    borderBottomColor: "rgb(225, 225, 225)",
    borderBottomWidth: 1,
    marginBottom: 30
  },
  loginFont: {
    fontFamily: 'S-CoreDream-4Regular',
    fontSize: 25,
    color: 'rgb(0, 191,213)'
  },
  loginFont2: {
    fontFamily: 'S-CoreDream-4Regular',
    fontSize: 15,
    paddingTop: 10
  },
  greyInput: {
    borderRadius: 5,
    borderColor: 'rgb(242, 243, 245)',
    backgroundColor: 'rgb(242, 243, 245)',
    fontFamily: 'S-CoreDream-4Regular',
    height: 50,
    padding: 10
  },
  blueBtn: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    fontSize: 20,
    backgroundColor: 'rgb(0, 191, 213)'
  },
  greyBtn: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    fontSize: 20,
    backgroundColor: 'rgb(174, 174, 174)'
  },
  btnTxtWhite: {
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: 15,
    color: '#ffff'
  },
  greyBox: {
    borderRadius: 5,
    borderColor: 'rgb(242, 243, 245)',
    backgroundColor: 'rgb(242, 243, 245)',
  },
  greyTxtBox: {
    borderRadius: 5,
    borderColor: 'rgb(242, 243, 245)',
    backgroundColor: 'rgb(242, 243, 245)',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  storeWhiteBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 50,
    paddingLeft: 10
  },
  storeGreyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'rgb(242, 243, 245)',
    backgroundColor: 'rgb(242, 243, 245)',
    height: 50,
    paddingLeft: 10
  },
  image25: {
    resizeMode: 'contain',
    width: 25,
    height: 25
  },
  inputMaskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'rgb(242, 243, 245)',
  },
  inputMask: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'S-CoreDream-4Regular',
    fontSize: 15
  },
  redText: {
    color: 'rgb(255, 83, 83)',
    fontFamily: 'S-CoreDream-5Medium',
  }
});

export default styles;
