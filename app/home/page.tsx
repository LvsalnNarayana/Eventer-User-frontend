import React from 'react'
import Header from '../components/header/header'

const Home = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    return (
        <>
            <Header />
            <div className='px-5'>
                {
                    todos.map((todo: any) => {
                        return (
                            <div className="bg-red-200 rounded-md px-5 py-3 my-3" key={todo.id}>
                                <h1 className="text-black">{todo.title}</h1>
                                <p className="text-black">{todo.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home