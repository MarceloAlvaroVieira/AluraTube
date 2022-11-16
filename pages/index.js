import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/css-reset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/TimeLine"


function Inicio() {
    const estiloInicio = { backgroundColor: "red" }

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div estiloInicio>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists}>
                    Conteudo
                </TimeLine>

            </div>
        </>
    )
}

// function Menu() {
//     return (
//         <div>Menu</div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src={`banner`} /> */}

            <section className="user-info">
                <img src={`http://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>

            </section>
        </StyledHeader>
    )
}

function TimeLine(props) {
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

export default Inicio
