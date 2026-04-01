import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    /* Modal styles */
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modal: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 12,
        textAlign: 'center',
    },
    closeButton: {
        marginTop: 12,
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 8,
    },
    closeText: {
        color: '#fff',
        fontSize: 14,
    },
    modalChildText: {
        textAlign: 'center',
    },
    /* ScrollView styles */
    scrollContainer: {
        flex: 1,
        padding: 16,
    },
    scrollContent: {
        alignItems: 'center',
    },
    scrollItem: {
        width: '100%',
        maxWidth: 420,
        backgroundColor: '#f2f2f2',
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginBottom: 12,
        alignItems: 'center',
    },
    scrollItemText: {
        fontSize: 16,
        color: '#222',
    },
      item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title2: {
    fontSize: 32,
  },
});