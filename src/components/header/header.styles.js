import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        zIndex:2,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        position:"absolute",
        bottom:0,
        height: 60,
        backgroundColor:colors.primary,
        position:"fixed"
    },
    icons:{
        color:"white"
    }
})

export default styles