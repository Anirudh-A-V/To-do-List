import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/themed';

import { useStateContext } from '../contexts/ContextProvider';
import { ScrollView } from 'react-native-web';

const Home = ({ navigation }) => {
    const { tasks, setTasks } = useStateContext();

    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
            <View>
                {tasks.map((task, index) => {
                    console.log("Home.js")
                    console.log(task)
                    return (
                        <View key={index} style={styles.task}>
                            <Text style={styles.taskTitle}>{task.title}</Text>
                            <Text style={styles.taskDescription}>{task.description}</Text>
                        </View>
                    )
                })}

            </View>

            <View
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    margin: 20,

                }}
            >
                <TouchableOpacity
                    onPress={() => { navigation.navigate('AddTask') }}
                    style={{
                        backgroundColor: "#1c77d9",
                        width: 60,
                        height: 60,
                        borderRadius: 60,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{
                        color: "white",
                        fontSize: 30,
                    }}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    margin: 20,
                }}
            >
                <TouchableOpacity
                    onPress={() => { setTasks([]) }}
                    style={{
                        backgroundColor: "#e00d0d",
                        width: 60,
                        height: 60,
                        borderRadius: 60,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Icon

                        name='trash-outline'
                        type='ionicon'
                        color='#fff'
                    />


                </TouchableOpacity>
            </View>

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
        // justifyContent: 'center',
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 350,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginTop: 15,
    }
});

export default Home;