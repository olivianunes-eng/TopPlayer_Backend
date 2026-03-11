import db from "../config/db.js";

const listarJogos = async () => {
  const [rows] = await db.query("SELECT * FROM jogos");
  return rows;
};

const buscarJogoId = async (id) => {
  const [rows] = await db.query("SELECT * FROM jogos WHERE id = ?", [id]);
  return rows[0];
};

const criarJogo = async (data) => {
  const { nome, genero } = data;

  const [result] = await db.query(
    "INSERT INTO jogos (nome, genero) VALUES (?, ?)",
    [nome, genero]
  );

  return result;
};

const atualizarJogo = async (id, data) => {
  const { nome, genero } = data;

  const [result] = await db.query(
    "UPDATE jogos SET nome = ?, genero = ? WHERE id = ?",
    [nome, genero, id]
  );

  return result;
};

const removerJogo = async (id) => {
  const [result] = await db.query(
    "DELETE FROM jogos WHERE id = ?",
    [id]
  );

  return result;
};

export default {
  listarJogos,
  buscarJogoId,
  criarJogo,
  atualizarJogo,
  removerJogo
};