import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: 350,
        padding: 16,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      },
      line: {
        height: 5, 
        backgroundColor: 'black', 
        width: '20%', 
        alignSelf: 'center', 
        borderRadius: 2.5,
      },
      conteinerVel:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        
      },
      conteinerVelTitle:{
        fontSize: 18,
        fontWeight: '500',
        
      },
      conteinerVelText:{
        marginLeft: 8,
        
      },
      conteinerPackage:{
        marginTop: 10,
        
      },
      conteinerPackageTitle:{
        fontSize: 18,
        fontWeight: '500',
        
      },
      conteinerPackageView:{
        flexDirection: 'row',
        marginLeft: 8,
        marginTop: 8,
        alignItems: 'center',
      },
      conteinerPackageViewText:{
        marginLeft: 8
      }
})

export default styles