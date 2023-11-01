import {Aluno} from '../models/Aluno.js'
import {Plano} from '../models/Plano.js'


export async function criarAluno(req, res) {
  try {
    const { nome, fone, objetivo, num_treinos, plano_id } = req.body;

    const aluno = await Aluno.create({
      nome,
      fone,
      objetivo,
      num_treinos,
      plano_id
    });

    res.json({ aluno });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aluno' });
  }
}

export async function listarAlunos(req, res) {
  try {
    const alunos = await Aluno.findAll({
      include: [Plano]
    });

    res.json({ alunos });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar alunos' });
  }
}
