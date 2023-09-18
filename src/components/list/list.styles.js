import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        flexDirection:"row",
    },
    containerView:{
        marginLeft:15
    },
    container_view:{
        flexDirection:"row"
    },
    flastlist:{
        width:"100%",
        marginBottom:100,
        overflow:"hidden",
        marginTop:70
    },
    pressable:{
        height:200, 
        flex:1,
        marginTop: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    card:{ 
        paddingLeft:20,
        margin:"auto",
        marginTop:8,
        height:80,
        borderColor: colors.secondary
    },
    image:{
        width:65,
        height:65,
        borderRadius:"50%"
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:5,
        marginTop:10,
        fontFamily:"Monserrat"
    },
    cityText:{
        marginLeft:5,
        color: colors.terciary
    }
})

export default styles