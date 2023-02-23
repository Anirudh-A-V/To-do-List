import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, { title: title, description: description }]);
        setTitle('');
        setDescription('');    
    }

    return (
        <StateContext.Provider
            value={{
                title,
                setTitle,
                description,
                setDescription,
                tasks,
                setTasks,
                addTask
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);