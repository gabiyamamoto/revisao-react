export default function ListaInvisivel() {
    const compras = ['Ovo', 'Leite', 'Pão'];

    return (
        <ul>
            {compras.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    );
}
