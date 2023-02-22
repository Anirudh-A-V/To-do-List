import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useStateContext } from '../contexts/ContextProvider';
import { ScrollView } from 'react-native-web';

const Home = ({ navigation }) => {
    const { tasks } = useStateContext();

    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
                <View>
                {/* {tasks.length > 0 && tasks.map((task, index) => {
                    return (
                        <View key={index} style={styles.task}>
                            <Text style={styles.taskTitle}>{task.title}</Text>
                            <Text style={styles.taskDescription}>{task.description}</Text>
                        </View>
                    )
                })} */}

                <FlatList 
                    data={tasks}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.task}>
                                <Text style={styles.taskTitle}>{item.title}</Text>
                                <Text style={styles.taskDescription}>{item.description}</Text>
                                </View>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
                </View>
                {/* View a list of tasks from tasks array of objects */}

                {/* <Text style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: 'red',
            }}>Hi</Text>

            <Text style={{
                fontSize: 95,
                fontWeight: 'bold',
                color: 'blue',
            }}>{counter}</Text>
            <TouchableOpacity onLongPress={() => { setCounter(counter + 1) }} onPress={() => { setCounter(counter + 1) }} style={{
                width: "100%",
                backgroundColor: 'red',
                padding: 10,

                alignItems: "center"
            }} >
                <Text style={{
                    color: "white",
                    fontSize: 20,
                }}>
                    Click Me
                </Text>
            </TouchableOpacity> */}

                <TouchableOpacity
                    onPress={() => { navigation.navigate('AddTask') }}
                    style={{ backgroundColor: "#1c77d9", width: 60, height: 60, borderRadius: 60, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{
                        color: "white",
                        fontSize: 30,
                    }}>
                        +
                    </Text>
                </TouchableOpacity>

                <StatusBar style="auto" />
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0e46b5',
    },
    taskDescription: {
        fontSize: 15,
        color: '#0e46b5',
    },
    task: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginTop: 10,
    }
});

export default Home;