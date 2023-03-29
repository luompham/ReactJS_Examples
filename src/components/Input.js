import { useState } from "react";

const Input = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        console.log({ name, email })

    }
    return (
        <>
            <h1>Input - Two way binding</h1>
            Name <input value={name} onChange={e => setName(e.target.value)} type="text" />
            <br />
            Email <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
            <br />
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Input;