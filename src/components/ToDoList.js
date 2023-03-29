import { useState, useEffect } from "react";


const ToDoList = () => {
    const [input, setInput] = useState('');
    const [lists, setLists] = useState([]);
    useEffect(() => {
        const jobs = JSON.parse(localStorage.getItem('jobs'))
        console.log('get');
        return setLists(jobs ?? [])
    }, [])

    useEffect(() => {
        console.log('save');
        return window.localStorage.setItem('jobs', JSON.stringify(lists))
    }, [lists])

    const handleChange = (value) => {
        setInput(value)
    }

    const handleClickAdd = () => {
        setLists(prev => {
            return [...prev, input]
        })
        setInput('')
        console.log(JSON.parse(localStorage.getItem('jobs')))

    }

    const handleDeleteOne = () => {
        setLists(() => {
            const newLists = lists.filter((item, index, arr) => {
                return item !== arr[0]
            })
            return newLists
        })
    }
    const handleClearAll = () => {
        console.log('clear all');
        setLists([])
    }
    return (
        <>

            <input
                value={input}
                onChange={e => handleChange(e.target.value)}
                type="text"
                placeholder="Enter your jobs..."
            />
            <button className="ms-3" onClick={handleClickAdd}>Add</button>
            <button className="ms-3" onClick={handleDeleteOne}>Delete One</button>
            <button className="ms-3" onClick={handleClearAll}>Clear All</button>
            <ul className="my-3 ps-0">
                <h4>My jobs is:</h4>
                {lists.map((item, index) => {
                    return (
                        <li className="ps-3 list-style-type-none" key={item}>{item}</li>
                    )
                })}

            </ul>
        </>
    )
}




export default ToDoList;
