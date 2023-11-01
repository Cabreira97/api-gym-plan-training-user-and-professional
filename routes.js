import { Router } from "express"
import { criarTreino, excluirTreino, listarTreinos } from "./controllers/TreinosControllers.js";
import { criarAluno, listarAlunos } from "./controllers/AlunosControllers.js";
import { listarProfissionais } from "./controllers/ProfissionalControllers.js";
import { listarPlanos } from "./controllers/PlanosControllers.js";

const router = Router()

router.get('/alunos', listarAlunos)
      .post('/alunos', criarAluno)

router.get('/treinos',listarTreinos)
      .post('/treinos',criarTreino)
      .delete('/treinos/:id', excluirTreino)

router.get('/profissionais',listarProfissionais)

router.get('/planos', listarPlanos);
export default router