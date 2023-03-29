import { useState } from 'react';

const Checkbox = () => {
    const courses = [
        {
            id: 1,
            name: 'Javascript',
        },
        {
            id: 2,
            name: 'ReactJS',
        },
        {
            id: 3,
            name: 'NodeJS',
        },
    ]


    const [lists, setLists] = useState([])

    const handleChange = (id) => {
        setLists(prev => {

            if (lists.includes(id)) {
                return lists.filter(item => item !== id);
            } else {
                return [...prev, id]

            }

        })
    }



    const handleSubmit = () => {
        console.log(lists)
    }
    return (
        <>
            <div>
                <h1>Checkbox</h1>
                {courses.map((course) => {
                    return (

                        <div key={course.id}>
                            <input
                                onChange={() => handleChange(course.id)}
                                type="checkbox" />
                            {course.name}
                            <br />
                        </div>
                    )
                })}
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Checkbox;