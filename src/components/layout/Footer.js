
import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer>
        <div className="containerpie">

            <div className="copy">
                <p>© 2023 Quevemos</p>

            </div>

            <div className="pie">
                <img src="img/LOGO.png" alt=""></img>
            </div>

            <div className="containerlogos">
                <div className="listalogos">
                    <li><a href="https://www.instagram.com"> <img src="img/logoinstagram.png" alt=""></img></a></li>
                    <li><a href="https://www.facebook.com"> <img src="img/facebook.png" alt=""></img></a></li>
                    <li><a href="https://www.twitter.com"><img src="img/twitter.png" alt=""></img></a></li>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer