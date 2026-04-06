import CartaoUsuario from './components/CartaoUsuario.jsx';
import ContadorTravado from './components/ContadorTravado.jsx';
import ListaInvisivel from './components/ListaInvisivel.jsx';
import PainelAlunos from './components/PainelAlunos.jsx';
import ListagemAntiga from './components/ListagemAntiga.jsx';
import AlertaPerigoso from './components/AlertaPerigoso.jsx';
import BuscaSegura from './components/BuscaSegura.jsx';
import Mural from './components/Mural.jsx';
import PuxadorInfinito from './components/PuxadorInfinito.jsx';
import CaixaVermelha from './components/CaixaVermelha.jsx';
import AtualizaOcupacao from './components/AtualizaOcupacao.jsx';
import Catalogo from './components/Catalogo.jsx';
import PainelVip from './components/PainelVip.jsx';
import BuscaAtenta from './components/BuscaAtenta.jsx';


function App() {
    return (
        <>
            <CartaoUsuario nomePerfil="julia" idade={20} />
            <ContadorTravado />
            <ListaInvisivel />
            <PainelAlunos />
            <ListagemAntiga />
            <AlertaPerigoso />
            <BuscaSegura />
            <Mural />
            <PuxadorInfinito />
            <CaixaVermelha />
            <AtualizaOcupacao />
            <Catalogo />
            <PainelVip />
            <BuscaAtenta />
        </>
    );
}

export default App;
