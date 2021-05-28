import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    text: {
        fontSize: 35,
        fontWeight:"bold",
        paddingTop:"4%"
    },

     container: {
         height:"10%",
         backgroundColor: "#e6ecf5",
         alignItems: "center",
         textAlignVertical: "center",
         alignContent: "center",
         shadowColor: 'black',
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.8,
         shadowRadius: 5,  
         elevation: 5,
         
     }
});