import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20
    },
    circle:{
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 200,
        height: 200,
    },
    camera:{
        marginTop: -40,
        marginLeft: 90,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInfo:{
        width: '100%',
        padding:8,
        justifyContent: 'center',
        alignContent: 'flex-start',
    },
    containerInfoView:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    info:{
        marginLeft: 8,
        marginRight: 8
    },
    input:{
        paddingLeft:8,
        width: 100,
    },
    icons:{
        marginLeft: 10,
    },
    prueba:{
        flex: 1,
        backgroundColor: "red"
    },
    relevant:{
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    nameAndId:{
        textAlign: 'center'
    },
    containerLogOut:{
        flexDirection:'row',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: 40,
        marginTop:25
    },
    pessableLogOut:{
        width: '30%',
    },
    textLogOut:{
        textAlign: 'center',
        width: '100%',
        borderWidth:1,
        borderRadius:5,
        borderColor: colors.secondary,
        padding:10,
        fontWeight: 'bold'
    }
})

export default styles