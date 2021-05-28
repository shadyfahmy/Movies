import { StyleSheet } from 'react-native';

export default StyleSheet.create({

     container: {
         backgroundColor: "#fff",
         margin: 10,
         height:200,
         shadowColor: 'black',
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.8,
         shadowRadius: 5,  
         elevation: 5,    
         flexDirection:"row"
     },
     img: {
         borderWidth:1,
         flex: 3,
         margin: 5
     },
     txt: {
         flex: 6,
         margin:5, 
         flexDirection: "column"
     },
     title: {
         fontSize: 20,
         fontWeight: "bold",
         flex: 2,
         color: "#4287f5"
     },
     overview: {
         flex:4
     },
     date: {
         flex:1,
         fontWeight: "bold"
     },
     image: {
         width: "100%",
         height: "100%"
     }
});