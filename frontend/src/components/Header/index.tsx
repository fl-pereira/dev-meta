import logo from '../../assets/img/logo-d3vmeta.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="container-logo">
                <img src={logo} alt="Logo D3V Meta" />
                    <h1 className="titulo-pagina">DEV<em><strong>Meta</strong></em></h1>
                    <p className="subtitulo-pagina">// Desenvolvido por <em><a href="https://linkedin.com/in/felipeluizpereira" target="_blank">Felipe Pereira</a></em></p>
            </div>
        </header>
    )
}

export default Header