export type Formacao = {
  id: number; instituicao: string; curso: string; nivel: string;
  data_inicio: string; data_fim: string | null; descricao: string | null;
};
export type Experiencia = {
  id: number; empresa: string; cargo: string;
  data_inicio: string; data_fim: string | null; descricao: string | null;
};
export type Projeto = {
  id: number; nome: string; descricao: string | null;
  link_repositorio: string | null; link_demo: string | null; ano: number | null;
};
export type Habilidade = { id: number; nome: string; categoria: string; nivel: string };
export type Pessoa = {
  id: number; nome: string; titulo: string; email: string; telefone: string | null;
  cidade: string; resumo: string; github: string | null; linkedin: string | null;
  formacoes: Formacao[]; experiencias: Experiencia[];
  projetos: Projeto[]; habilidades: Habilidade[];
};