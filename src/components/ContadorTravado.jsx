import { useState } from 'react';

export default function ContadorTravado() {
    const [cliques, setClique] = useState(0);

    const acionarBotao = () => {
        setClique(cliques + 1);
    };

    return (
        <div>
            <h1>Total de Cliques: {cliques}</h1>
            <button onClick={acionarBotao}>Aumentar</button>
        </div>
    );
}
