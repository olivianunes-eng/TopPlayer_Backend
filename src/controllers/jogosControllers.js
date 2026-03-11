import jogosModel from "../models/jogosModel.js";

const listar = async (req, res) => {
  try {
    const jogos = await jogosModel.listarJogos();
    res.json(jogos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const buscar = async (req, res) => {
  try {
    const { id } = req.params;

    const jogo = await jogosModel.buscarJogoId(id);

    if (!jogo) {
      return res.status(404).json({ mensagem: "Jogo não encontrado" });
    }

    res.json(jogo);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const criar = async (req, res) => {
  try {
    const data = req.body;

    const result = await jogosModel.criarJogo(data);

    res.status(201).json({
      mensagem: "Jogo criado",
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    await jogosModel.atualizarJogo(id, data);

    res.json({ mensagem: "Jogo atualizado" });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const remover = async (req, res) => {
  try {
    const { id } = req.params;

    await jogosModel.removerJogo(id);

    res.json({ mensagem: "Jogo removido" });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export default {
  listar,
  buscar,
  criar,
  atualizar,
  remover
};