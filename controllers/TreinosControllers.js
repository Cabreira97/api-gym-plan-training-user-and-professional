import { sequelize } from '../databases/conecta.js';
import { Aluno } from '../models/Aluno.js';

import { Profissional } from '../models/Profissional.js';
import { Treino } from '../models/Treino.js';


export async function criarTreino(req, res) {
  try {
    const { descricao, data, hora, aluno_id, profissional_id } = req.body;

    const treino = await Treino.create({
      descricao,
      data,
      hora,
      aluno_id,
      profissional_id
    });

    await Aluno.increment('num_treinos',
      { by: 1, where: { id: aluno_id }}
    );

    res.json({ treino });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar treino' });
  }
}

export async function listarTreinos(req, res) {
  try {
    const treinos = await Treino.findAll({
      include: [Aluno, Profissional]
    });

    res.json({ treinos });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar treinos' });
  }
}

export async function excluirTreino(req, res) {
  const treinoId = req.params.id; 
  const t = await sequelize.transaction();

  try {
    const treino = await Treino.findByPk(treinoId);

    if (!treino) {
      res.status(404).json({ error: 'Treino não encontrado' });
      return;
    }

    const alunoId = treino.aluno_id;

    await treino.destroy({ transaction: t });

    await Aluno.decrement('num_treinos',
      { by: 1, where: { id: alunoId }, transaction: t }
    );

    await t.commit();
    res.json({ message: 'Treino excluído com sucesso' });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: 'Erro ao excluir o treino' });
  }
}