import { useState } from "react";

const Radio = () => {
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

    const [checked, setChecked] = useState()
    const handleChange = (id) => {
        setChecked(id);
    }

    const handleSubmit = () => {
        console.log({ 'id': checked });
    }
    return (
        <>
            <h1>Radio</h1>
            <div>
                {courses.map((course) => {
                    return (
                        <div key={course.id} >
                            <input
                                checked={checked === course.id}
                                onChange={() => handleChange(course.id)}
                                type="radio" />
                            {course.name}
                            <br />
                        </div>

                    )
                })}

                <button onClick={handleSubmit}>Register</button>
            </div>
        </>
    )
}

export default Radio;