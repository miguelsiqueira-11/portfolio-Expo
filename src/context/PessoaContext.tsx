import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { getJson } from '../services/api';
import { Pessoa } from '../types';

type Estado = {
  pessoa: Pessoa | null; carregando: boolean; erro: string | null; recarregar: () => void;
};

const PessoaContext = createContext<Estado | null>(null);

export function PessoaProvider({ children }: { children: ReactNode }) {
  const [pessoa, setPessoa] = useState<Pessoa | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const recarregar = useCallback(async () => {
    setCarregando(true);
    setErro(null);
    try {
      const dados = await getJson<Pessoa>('/pessoas/1/completo');
      setPessoa({
        ...dados,
        formacoes: dados.formacoes ?? [],
        experiencias: dados.experiencias ?? [],
        projetos: dados.projetos ?? [],
        habilidades: dados.habilidades ?? [],
      });
    } catch (e: any) {
      setErro(e?.message ?? 'Não foi possível carregar os dados.');
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    recarregar();
  }, [recarregar]);

  return (
    <PessoaContext.Provider value={{ pessoa, carregando, erro, recarregar }}>
      {children}
    </PessoaContext.Provider>
  );
}

export function usePessoa() {
  const ctx = useContext(PessoaContext);
  if (!ctx) throw new Error('PessoaProvider não está envolvendo as telas. Confira o src/app/_layout.tsx');
  return ctx;
}