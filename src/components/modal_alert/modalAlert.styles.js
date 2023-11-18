import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        width: '60%',
        height: 35,
        bottom: 65,
        left: '20%', 
        right: 0,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 10,
      },
})

export default styles