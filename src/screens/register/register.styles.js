import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInputs:{
        width: "100%",
        justifyContent:'center',
        alignItems: 'center'
    },
    input:{
        width: "75%",
        height: 50,
        borderBottomWidth:1,
        borderColor: colors.secondary,
        paddingLeft: 10,
        marginTop: 16
    },
    passwordVisible:{
        width: "75%",
        marginTop: 10,
        justifyContent: 'flex-center',
        alignItems: 'flex-end'
    },
    textVisible:{
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 14
    },
    pessableRegister:{
        marginTop: 20,
        backgroundColor: colors.quaternary,
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textRegister:{
        color: colors.quinary,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    pressableLogin:{
        marginTop: 20,
        color: colors.quinary,
        width: "75%",
        height: 50,
        justifyContent: 'center',
        flexDirection:"row"
    },
    textLogin:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginRight: 10
    },
    textLoginLogin:{
        color: colors.quaternary,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    containerImg: {
        width: "100%",
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagen: {
        width:'65%',
        height:'100%',
        height: 150,
        resizeMode: 'contain',
    },
    marca:{
        fontSize: 22,
        fontFamily: 'Monserrat',
        marginTop: '-5%'
    }
})

export default styles;