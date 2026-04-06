import { useState } from 'react';

export default function DepositoDuplo() {
    const [dinheiro, setDinheiro] = useState(0);

    const transferir = () => {
        setDinheiro((valorAntigo) => valorAntigo + 100);
        setDinheiro((valorAntigo) => valorAntigo + 100);
    };

    return (
        <div>
            <h2>Saldo: R$ {dinheiro}</h2>
            <button onClick={transferir}>Depositar R$ 200,00</button>
        </div>
    );
}
