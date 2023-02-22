import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useStateContext } from '../contexts/ContextProvider';

const AddTask = ({ navigation }) => {
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');

    const { addTask, setTitle, setDescription } = useStateContext();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Task</Text>
            <TextInput
                style={styles.taskname}
                placeholder="Task Name"
                onChangeText={
                    (newText) => {
                        console.log(newText);
                        setTitle(newText)
                    }
                }
            />
            <TextInput
                style={styles.taskdetails}
                multiline={true}
                placeholder="Task Description"
                textAlign='left'
                onChangeText={newText => setDescription(newText)}
            />
            <TouchableOpacity style={styles.button} onPress={addTask}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#0e46b5',
    },
    taskname: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginTop: 10,
    },
    taskdetails: {
        width: "80%",
        height: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginTop: 10,
    },
    button: {
        width: 100,
        backgroundColor: '#1c77d9',
        padding: 10,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
})

export default AddTask