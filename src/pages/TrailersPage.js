
import '../../src/styles/components/pages/TrailersPage.css'

const TrailersPage = (props) => {
    return (
        <section id="trailer">
    <div class="trailer">
        <img src="img/Argentina1985.png" alt="imagen"></img>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EDK2FtU5oxg" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sunt rerum quos quia earum odio
            ratione maiores tempore expedita repellat! Cumque vel eveniet nisi quidem quis ipsum amet dolorem placeat.
        </p>

    </div>

    <div class="trailer">

        <img src="img/dune.png" alt="imagen"></img>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TTgk_iT8Uts" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sunt rerum quos quia earum odio
            ratione maiores tempore expedita repellat! Cumque vel eveniet nisi quidem quis ipsum amet dolorem placeat.
        </p>

    </div>

    <div class="trailer">
        <img src="img/Interstellar.png" alt="imagen"></img>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LYS2O1nl9iM" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sunt rerum quos quia earum odio
            ratione maiores tempore expedita repellat! Cumque vel eveniet nisi quidem quis ipsum amet dolorem placeat.
        </p>
    </div>
</section>
    );
}

export default TrailersPage