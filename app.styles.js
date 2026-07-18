import { StyleSheet } from 'react-native';
import { colors } from './src/styles/colors';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
       
    },
    scrollView: {
        flexGrow: 1,

     },
     content:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:80,
        paddingBottom:24,

     }, 
      header:{
        margimBottom:32,

      },
      title:{
        fontSize:32,
        fontWeight:'bold',
        color:colors.text,
        margimBottom:8,
      },
      subTitle:{
        color:colors.textSecondary,
        fontSize:16,
        padding:18

      },
card:{
    backgroundColor:colors.cardBackground,
    borderRadius:16,
    padding:24,
    marginBottom:24,

},
label: {
    color:colors.textSecondary,
    marginBottom:10,
    fontSize:14
   
},

currencyGrid:{
  flexDirection:'row',
  flexWrap:'wrap',
 marginHorizontal:-4,
 marginBottom:6,
 alignItems:'center',
 justifyContent:'center',
},
swapButton:{
  backgroundColor:colors.secondary,
  paddingVertical: 16,
  paddingHorizontal: 24,
  borderRadius:12,
  marginBottom: 24,
},

swapButtonText:{
color:'#ffff',
textAlign:'center',
fontSize:18,
fontWeight:'600',
},
convertButton:{
  backgroundColor:colors.primary,
  paddingVertical: 16,
  paddingHorizontal: 24,
  borderRadius:12,
  marginBottom: 24
},
convertButtonDisabled:{
  backgroundColor:colors.disabled,
}



});