import CartaoUsuario from './components/ex1-CartaoUsuario.jsx';
import ContadorTravado from './components/ex2-ContadorTravado.jsx';
import ListaInvisivel from './components/ex3-ListaInvisivel.jsx';
import PainelAlunos from './components/ex4-PainelAlunos.jsx';
import ListagemAntiga from './components/ex5-ListagemAntiga.jsx';
import AlertaPerigoso from './components/ex6-AlertaPerigoso.jsx';
import BuscaSegura from './components/ex7-BuscaSegura.jsx';
import Mural from './components/ex8-Mural.jsx';
import PuxadorInfinito from './components/ex9-PuxadorInfinito.jsx';
import CaixaVermelha from './components/ex10-CaixaVermelha.jsx';
import AtualizaOcupacao from './components/ex11-AtualizaOcupacao.jsx';
import Catalogo from './components/ex12-Catalogo.jsx';
import PainelVip from './components/ex13-PainelVip.jsx';
import DepositoDuplo from './components/ex14-DepositoDuplo.jsx';
import BuscaAtenta from './components/ex15-BuscaAtenta.jsx';


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
            <Catalogo produtos={[
                { id: 1, nome: 'Produto 1' },
                { id: 2, nome: 'Produto 2' }
            ]} />
            <PainelVip isVip={true}/>
            <DepositoDuplo />
            <BuscaAtenta />
        </>
    );
}

export default App;
