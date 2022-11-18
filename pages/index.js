import React from "react"
import styled from "styled-components"
import config from "../config.json"
import Menu from "../src/components/Menu/Menu"
import { StyledTimeline } from "../src/components/TimeLine"
import dbService from "../src/service/db-service"

function Inicio() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState('')
    const [playlists, setPlaylists] = React.useState({})

    React.useEffect(() => {
        dbService.select("*")
            .then((videos) => {
                const novasPlaylists = {...playlists}
                videos.data.forEach((video) => {
                    if(!novasPlaylists[video.playlist]){
                        novasPlaylists[video.playlist] = []
                    }
                    novasPlaylists[video.playlist].push(video)
                })
                setPlaylists(novasPlaylists)
                console.log('DADOS VINDOS DO SUPABASE:\n', playlists);
            })
    }, [])

    return (
        <>            <div>
                {/* porp Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Banner url={config.banner} />
                <Header />
                <TimeLine searchValue={valorDoFiltro} playlists={playlists}>
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

const StyledBanner = styled.div`    
    img {
        height: 300px; 
        width: 100%;
        object-fit: cover;
    }
`;
function Banner(props) {
    return (
        <StyledBanner>
            <img src={props.url} />
        </StyledBanner>
    )
}

const StyledHeader = styled.div`

    background-color: ${({ theme }) => theme.backgroundLevel1};

    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-bottom: 50px;
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

            <section className="config">
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

function TimeLine({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => video.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .map((video) => {
                                    /**Cadastrar vídeos do config.json */
                                    // supabase.from("Video").insert({
                                    //     title: video.title,
                                    //     url: video.url,
                                    //     thumb: `https://img.youtube.com/vi/${video.url.split("v=")[1]}/hqdefault.jpg`,
                                    //     playlist: playlistName
                                    // }).then((resultado) => {
                                    //     console.log(resultado);
                                    // })
                                    return (
                                        <a key={video.url} href={video.url}>
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
