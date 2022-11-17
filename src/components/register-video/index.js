import React from "react"
import { StyledRegisterVideo } from "./style"


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
        initialValues: { titulo: "", url: "" }
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
                            console.log(formCadastro.values);
                            setFormVisivel(false)
                            formCadastro.clearForm();
                        }}
                    >
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                x
                            </button>

                            <input
                                name="titulo" placeholder="Título do vídeo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange} />

                            <input
                                placeholder="URL" name="url"
                                value={formCadastro.values.url}
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