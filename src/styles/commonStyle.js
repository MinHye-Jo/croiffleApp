import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
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
  font4R10: {
    fontFamily: 'S-CoreDream-4Regular',
    fontSize: 10
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
    borderRadius: 3,
    borderColor: 'rgb(242, 243, 245)',
    backgroundColor: 'rgb(242, 243, 245)',
    fontFamily: 'S-CoreDream-4Regular',
    height: 50,
    padding: 10
  },
  loginBtn: {
    margin: 20,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    fontSize: 20,
    backgroundColor: 'rgb(0, 191, 213)'
  },
  LoginBtnTxt: {
    fontFamily: 'S-CoreDream-5Medium',
    fontSize: 15,
    color: '#ffff'
  }

});

export default styles;
