import { conexao } from "../config/db";

export async function listarUsuario() {
    const [resultado] = await conexao.query(
        "SELEC * FROM usuarios ORDER BY id DESC"
    );
    return resultado
}

export async function buscarUsuarios(id) {
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?"
    );
    return resultado
}

export async function criarUsuarios(nome, email, senha_hash) {
    const [resultado] = await conexao.query(
        "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?,?,?)",
        [nome,email,senha_hash]
    );
    return resultado.insertID;
}

export async function buscarUsuariosPorEmail(email) {
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE email = ?"
        [email]
    );
    return resultado[0];
} 
    
