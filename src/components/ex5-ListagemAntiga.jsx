export default function ListagemAntiga() {
    const itens = ['Espada', 'Escudo', 'Poção'];

    return (
        <ul>
            {itens.map((item) => {
                return <li>{item}</li>;
            })}
        </ul>
    );
}
