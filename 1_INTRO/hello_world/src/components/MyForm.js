import './MyForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
    // gereciamento de dados

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value);
    }
    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando formulario');
        console.log(name, email, bio, role);

        setName("");
        setEmail("");
        setBio("");
    }

    return (
        <div>
            {/* 1 - criação de form */}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite o seu nome' value={name} onChange={handleName} />
                </div>
                {/* 2 - label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name='email' placeholder='Digite o seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

<label>
    <span>Função no sistemas</span>
    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="user">Usuário</option>
        <option value="editor">Editor</option>
        <option value="admin">Administrador</option>
    </select>
</label>

                <input type="submit" value={'Enviar'} />
            </form>
        </div>
    )
}

export default MyForm