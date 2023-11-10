import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        position: 'relative',
        width: '80%',
        height: 50,
        flexDirection: 'row',
        backgroundColor:'#d9d9d9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        alignItems: 'center',
        marginBottom: -16,
    },
    icon:{
        position: 'absolute',
        left: 16,
    },
    task:{
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
    },
    conteinerItems:{
        width: '80%',
        height: '65%',
        backgroundColor:'#ededed',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 10,
        marginTop: 16,
        
    },
    items:{
        flexDirection: 'row',
        width: '90%',
        height: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    itemText:{
        fontSize: 18,
    },
    itemContainerCount:{
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    count:{
        fontSize: 18,
        fontWeight: 'bold',
    }
}) 

export default styles