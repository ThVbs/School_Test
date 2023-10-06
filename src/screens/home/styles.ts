import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E25',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 20, 
  },

  btn: {
    backgroundColor: 'red',
    width: '60%',
    margin: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },

  btnText: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: '600',
  },
});
