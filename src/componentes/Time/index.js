import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria };

    return (
        (props.colaboradores.length > 0) ? (
            <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <input
                    type='color'
                    className='input-cor'
                    value={props.corSecundaria}
                    onChange={event => {
                        props.mudaCor(event.target.value, props.id);
                    }}
                />
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => (
                        <Colaborador
                            key={colaborador.id}
                            id={colaborador.id}
                            nome={colaborador.nome}
                            imagem={colaborador.imagem}
                            cargo={colaborador.cargo}
                            corDeFundo={colaborador.corDeFundo || props.corSecundaria}
                            aoDeletar={props.aoDeletar}
                        />
                    ))}
                </div>
            </section>
        ) : null
    );
};

export default Time;
