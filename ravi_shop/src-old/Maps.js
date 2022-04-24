import React from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom'

export default function Maps() {

    const [todos, setTodos] = React.useState([]); // state hook
    const [redirect, setRedirect] = React.useState(false); // state hook

    const handleGetData = async () => {
        // axios.get('https://jsonplaceholder.typicode.com/todos/').then(
        //     (response) => {
        //         setTodos(response.data);
        //     }
        // ).catch(err => {
        //     console.log(err);
        // })
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
            setTodos(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        handleGetData()
    }, []);

    return (
        <div className='container'>
            <div>
                <h1>Todos</h1>
            </div>

            {
                redirect ? <Navigate to='/' /> : null
            }

            <div className='row'>
                {
                    todos.length > 0 ? todos.map((todo, index) => {
                        return <div key={index} className='col-md-4'>
                            <div className={todo.completed ? 'card bg-success' : 'card bg-danger'}>
                                <div className='card-body'>
                                    <h5 className='card-title'>{todo.title}</h5>
                                    <p className='card-text'>
                                        User Id: {todo.userId}
                                    </p>
                                </div>
                            </div>
                        </div>
                    }) : <div className='col-md-12'>
                        <div className='card bg-info'>
                            <div className='card-body'>
                                <h5 className='card-title'>No Todos</h5>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
