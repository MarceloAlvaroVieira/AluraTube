import React from "react";
import dbService from "../../service/db-service";
import { StyledRegisterVideo } from "./style";

function useForm(props) {

    // const [title, setTitle] = React.useState()
    // const [url, setUrl] = React.useState()
    const [values, setValues] = React.useState(props.initialValues);

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name
            setValues({ ...values, [name]: value })
        },
        clearForm(){
            setValues({})
        }
    }
}


export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false)
    const formCadastro = useForm({
        initialValues: { titulo: "", url: "", playlist: ""}
    })

    return (
        <>
            <StyledRegisterVideo>
                <button className="add-video" onClick={() => { setFormVisivel(true) }}>
                    +
                </button>

                {formVisivel ? (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            dbService.insert({
                                title: formCadastro.values.titulo,
                                url: formCadastro.values.url,
                                thumb: `https://img.youtube.com/vi/${formCadastro.values.url.split("v=")[1]}/hqdefault.jpg`,
                                playlist: formCadastro.values.playlist
                            }).then((resultado) => {
                                console.log(resultado);
                                // console.log(formCadastro.values);
                                setFormVisivel(false)
                                formCadastro.clearForm();
                            })
                        }}
                    >
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                x
                            </button>

                            <input
                                name="titulo" placeholder="T??tulo do v??deo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange} />

                            <input
                                placeholder="URL" name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange} />

                            <input
                                placeholder="Playlist" name="playlist"
                                value={formCadastro.values.playlist}
                                onChange={formCadastro.handleChange} />

                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                ) : false}

            </StyledRegisterVideo>
        </>
    )
}