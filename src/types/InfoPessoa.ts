export type InfoPessoaProps = {
  id: number;
  nome: string;
  telefone?: string;
  cpf?: string;
  crm?: string;
  especialidade?: string;
  queryValue?: number;
  status?: string;
  roles?: string;
  tipo: 'medico' | 'paciente';
  endereco?: string; // endereço formatado como string
};
