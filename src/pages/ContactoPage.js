
import '../../src/styles/components/pages/ContactoPage.css'


const ContactoPage = (props) => {
    return (
        <div class="contenedorformulario">
            <div class="contenedorform">
                <form class="form">
                    <h1>Contactanos</h1>
                    <div class="form section">
                        <input type="text" placeholder="Nombre"></input>
                    </div>
                    <div class="form section">
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div class="form section">
                        <textarea class="form_input" placeholder="Mensaje..."></textarea>
                    </div>
                    <button id="botoncontacto"><b>Enviar</b></button>
                </form>
            </div>
        </div>
    );
}

export default ContactoPage