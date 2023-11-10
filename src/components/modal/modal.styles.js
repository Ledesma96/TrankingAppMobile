import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    blurContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    modalContent: {
        width: '80%',
        height: '60%',
        backgroundColor:"white",
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    modalForm:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentInput:{
        marginTop: 16,
        width: '100%',
        alignItems: 'center',
        position: 'relative',
    },
    contentBackground:{
        paddingHorizontal: 5,
        position: 'absolute',
        left: 16,
        fontSize: 18,
        top: '-5%',
        backgroundColor: 'white',
        zIndex: 1
    },
    label:{
        fontSize: 18,
    },
    inputs:{
        width: '95%',
        height: 50,
        borderWidth:1,
        borderRadius: 5,
        borderColor: colors.secondary,
        paddingLeft: 10,
        marginTop: 10,
    },
    modalContainerButton:{
        flexDirection:"row-reverse"
    },
    modalButtonConfirm: {
        padding:10,
        width:100,
        borderRadius:20,
        margin: 15,
        backgroundColor:"green"
    },
    modalButtonCancel:{
        padding:10,
        width:100,
        borderRadius:20,
        margin:15,
        backgroundColor:"#FF4500"
    },
    modalButtonText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold"
    }
})
export default styles