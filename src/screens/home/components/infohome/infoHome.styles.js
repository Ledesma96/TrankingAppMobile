import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    card:{
        height:'40%',
        backgroundColor:'#ededed',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 10,
    },
    cardContent:{
        height:'100%',
        backgroundColor:'#ededed',
        borderRadius: 10
    },
    cardContainer:{
        justifyContent:"center",
        alignItems:"center",
    },
    count:{
        fontSize:40,
        marginBottom:5
    },
    icons:{
        marginBottom:5,
    }
})

export default styles