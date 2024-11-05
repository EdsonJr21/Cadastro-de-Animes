import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { v4 as uuidv4 } from 'uuid';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        const colaboradorComId = {
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        };
        props.aoColaboradorCadastrado(colaboradorComId);
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos abaixo para cadastrar seu anime</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome do Herói"
                    placeholder="Insira o nome do protagonista ou título do anime"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Número de Episódios"
                    placeholder="Quantos episódios esta saga possui?"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem do Cartaz"
                    placeholder="Cole o link da imagem do anime aqui"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Gênero do Anime"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card de Anime
                </Botao>
            </form>
        </section>

    )
}

export default Formulario