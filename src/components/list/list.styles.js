import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        position: 'relative'
    },
    containerView:{
        width: "65%",
        marginTop:-15,
    },
    container_view:{
        flexDirection:"row"
    },
    flastlist:{
        marginTop:16,
        width:"100%",
        height:"100%",
    },
    pressable:{
        marginTop:3,
        justifyContent: "center",
        alignItems:"center"
    },
    card:{
        width: '90%',
        paddingLeft:20,
        margin:0,
        height:90,
        borderBottomWidth:1,
        borderColor:colors.primary
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
        color: colors.primary
    },
    circleOn:{
        flex: 1,
        position:"absolute",
        width: 18,
        height: 18,
        borderRadius:9,
        backgroundColor:'green',
        bottom:0
    },
    circleOff:{
        flex: 1,
        position:"absolute",
        width: 18,
        height: 18,
        borderRadius:9,
        backgroundColor:'red',
        bottom:0
    }
})

export default styles