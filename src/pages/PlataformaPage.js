

import '../../src/styles/components/pages/PlataformaPage.css'

const PlataformaPage = (props) => {
    return (
        <section>
    <a href="https://www.netflix.com/ar/">
        <div className="netflix">
            <div className="netflixbarra">
                <img src="./img/netflixbarra.png" alt=""></img>
            </div>
        </div>
    </a>
    <a href="https://www.primevideo.com/">
        <div className="amazon">
            <div className="amazonprimebarra">
                <img src="./img/primevideo.png" alt=""></img>
            </div>
        </div>
    </a>
    <a href="https://www.hbomax.com/ar/es">
        <div className="hbo">
            <div className="hbobarra">
                <img src="./img/hbobarra.png" alt=""></img>
            </div>
        </div>
    </a>
    <a href="https://www.paramountplus.com/home/">
        <div className="paramount">
            <div className="paramountbarra">
                <img src="./img/paramountbarra.png" alt=""></img>
            </div>
        </div>
    </a>
    <a href="https://www.disneyplus.com/es-ar">
        <div className="disney">
            <div className="disneybarra">
                <img src="./img/disney2.png" alt=""></img>
            </div>
        </div>
    </a>
</section>
    );
}

export default PlataformaPage