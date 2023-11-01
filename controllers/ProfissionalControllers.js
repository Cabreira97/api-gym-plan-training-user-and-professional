import {Profissional} from '../models/Profissional.js';

export async function listarProfissionais(req, res) {
  try {
    const profissionais = await Profissional.findAll();

    res.json({ profissionais });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar profissionais' });
  }
}
