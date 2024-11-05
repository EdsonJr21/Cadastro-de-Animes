import './Rodape.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Rodape = () => {
    return (
        <footer className="footer">
            <section className="social-section">
                <ul className="social-icons">
                    <li>
                        <a href="https://github.com/EdsonJr21" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://br.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className='ft'>
                <img src="/imagens/ft.png" alt="Footer Logo" />
            </section>
            <section className='nm'>
                <p>Desenvolvido por <a href="https://github.com/EdsonJr21" target="_blank" rel="noopener noreferrer">EdsonJr21</a></p>
            </section>

        </footer>
    );
}

export default Rodape;
