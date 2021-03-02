import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <span>{count}</span>
            <button className="btn" onClick={() => setCount(count - 1)}>
                -
            </button>
            <button className="btn" onClick={() => setCount(count + 1)}>
                +
            </button>
            <button className="btn" onClick={() => setCount(current => current + 1000)}>
                +1000
            </button>
            <span>{name}</span>
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
            
        </div>
    )
}

export default UseState
