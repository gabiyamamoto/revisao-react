import { useState, useEffect } from 'react';

export default function BuscaAtenta() {
    const [termo, setTermo] = useState('Martelo');

    useEffect(() => {
        fetch(`https://loja.com/produtos?q=${termo}`).then();
    }, [termo]);

    return <input value={termo} onChange={(e) => setTermo(e.target.value)} />;
}
