import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    list:{
        height:"100%",
        backgroundColor:"black"
    },
    title:{
        width:"85%",
        marginTop:16,
        fontSize: 22,
        fontWeight:"bold",
    },
    btn:{
        width:"45%",
        padding: 10,
        backgroundColor: colors.quaternary,
        borderRadius: 10,
        position: 'absolute',
        bottom: 10,
    },
    text:{
        color: colors.quinary,
        width:"100%",
        textAlign: "center",
        fontSize: 18,
        fontWeight:"bold",
    },
    messageModal:{
        fontSize: 12,
        marginLeft: 5
    }
})

export default styles