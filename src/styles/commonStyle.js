import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  hr: {
    borderBottomColor: "rgb(225, 225, 225)",
    borderBottomWidth: 1,
    marginBottom: 30
  },

});

export default styles;
