export default function PainelVip({ isVip }) {
    return (
        <div>
            <h1>Bem Vindo</h1>

            {isVip && <p>Você tem acesso ao lounge secreto!</p>}
        </div>
    );
}
