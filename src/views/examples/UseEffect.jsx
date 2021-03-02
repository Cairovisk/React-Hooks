import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1;
    if(n === 0) return 1;
    return calcFatorial(n - 1) * n;
};

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [numberColor, setNumberColor] = useState("red")

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number]);

    useEffect(function() {
        if (fatorial > 10000) {
            setNumberColor("blue")
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className={`text ${numberColor}`}>{fatorial === -1 ? "Inexistente" : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
