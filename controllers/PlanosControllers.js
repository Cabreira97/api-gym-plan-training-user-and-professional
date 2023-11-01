import { Plano } from '../models/Plano.js';

export async function listarPlanos(req, res) {
  try {
    const planos = await Plano.findAll();

    res.json({ planos });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar planos' });
  }
}
