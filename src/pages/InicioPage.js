
import '../../src/styles/components/pages/InicioPage.css'




const InicioPage = (props) => {

    /*const images = ['themask.png', 'Argentina1985.png', 'dune.png', 'Interstellar.png', 'topgun.png', 'LostinTranslation.png', 'inception.png', 'aqedsqhm.png'];*/


    return (
        <main>
            <h1>¿Qué miramos hoy?</h1>
            <div className="container">
                <button type="button" className="btnbody">Series</button>
                <button type="button" className="btnbody">Peliculas</button>
                <button type="button" className="btnbody">Cortos</button>
                <button type="button" className="btnbody">Documentales</button>
            </div>
            
            

            <div className="container-card">

                <div className="card">
                    <figure>
                        <img src="img/brad.png" alt=""></img>
                    </figure>
                    <div className="contenido-card">
                        <h3>Actores</h3>
                        <p>Grandes peliculas, grandes carreras, grandes sueños.</p>
                        <a href="#">Leer Màs</a>
                    </div>
                </div>

                <div className="card">
                    <figure>
                        <img src="img/anne.png"></img>
                    </figure>
                    <div className="contenido-card">
                        <h3>Actrices</h3>
                        <p>Fuertes personalidades que cautivan con belleza.</p>
                        <a href="#">Leer Màs</a>
                    </div>
                </div>

                <div className="card">
                    <figure>
                        <img src="img/nolan.png" alt=""></img>
                    </figure>
                    <div className="contenido-card">
                        <h3>Directores</h3>
                        <p>Historias que sorprenden, momentos irrepetibles.</p>
                        <a href="#">Leer Màs</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default InicioPage