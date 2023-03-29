import { useState } from "react";

const GetRandomGift = () => {

    const gifts = [
        'SSD Kingston 250GB',
        'CPU i9',
        'Ram 16GB Samsung'
    ]

    const [gift, setGift] = useState()
    console.log(gift)
    const handleClick = () => {
        const giftsLength = gifts.length
        const randomIndex = Math.floor(Math.random() * giftsLength)
        setGift(gifts[randomIndex])
    }
    return (
        <>
            <h1 className="my-3">{gift ?? 'Chưa có phần thưởng'}</h1>
            <button className="btn btn-primary my-3" onClick={handleClick}>Lấy thưởng</button>
        </>
    )
};

export default GetRandomGift;