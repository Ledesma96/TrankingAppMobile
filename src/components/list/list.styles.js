import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
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
        height:"100%",
    },
    pressable:{
        justifyContent: "center",
        alignItems:"center"
    },
    card:{ 
        paddingLeft:20,
        margin:"auto",
        height:80,
        borderColor: colors.secondary
    },
    image:{
        width:65,
        height:65
    },
    radius:{
        width:65,
        height:65,
        borderRadius:32,
        overflow:"hidden"
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