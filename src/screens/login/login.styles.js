import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerInputs:{
        width: "100%",
        justifyContent:'center',
        alignItems: 'center'
    },
    viewPassword:{
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        width: "75%",
        height: 50,
        borderBottomWidth:1,
        borderColor: colors.secondary,
        paddingLeft: 10,
        marginTop: 16,
    },
    eyeIcon:{
        marginLeft: -24,
        marginTop: 10,
        color: colors.secondary,
    },
    placecholderLogin:{
        marginTop: 20,
        backgroundColor: colors.quaternary,
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textLogin:{
        color: colors.quinary,
        fontSize: 18,
        marginLeft: 10
    },
    placecholderRegister: {
        flexDirection: "row",
        marginTop: 20,
    },
    textRegister:{
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginRight: 10
    },
    textRegisterRegister:{
        color: colors.quaternary,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    containerImg: {
        marginTop: '-20%',
        marginBottom: '10%',
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
        marginTop: '-5%',
      }
})

export default styles;