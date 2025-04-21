interface DadosCadastro {
    nome: string;
    crm: string;
    especialidade: string;
    cep: string;
    rua: string;
    cidade: string;
    bairro: string;
    descricao: string;
    valor: string;
    telefone: string;
  }
  
  export const validateCadastro = (dados: DadosCadastro) => {
    const erros: Partial<Record<keyof DadosCadastro, string>> = {};
  
    // Nome
    if (!dados.nome.trim()) erros.nome = "Nome é obrigatório.";
    else if (!/^[A-Za-z\s]+$/.test(dados.nome)) erros.nome = "Nome inválido.";
  
    // CRM
    if (!dados.crm.trim()) erros.crm = "CRM é obrigatório.";
    else if (!/^\d{4,10}$/.test(dados.crm)) erros.crm = "CRM inválido.";
  
    // Especialidade
    if (!dados.especialidade.trim()) erros.especialidade = "Especialidade é obrigatória.";
  
    // CEP
    if (!/^\d{8}$/.test(dados.cep)) erros.cep = "CEP inválido.";
  
    // Rua, cidade, bairro
    if (!dados.rua.trim()) erros.rua = "Rua é obrigatória.";
    if (!dados.cidade.trim()) erros.cidade = "Cidade é obrigatória.";
    if (!dados.bairro.trim()) erros.bairro = "Bairro é obrigatório.";
  
    if (!dados.descricao.trim()) erros.descricao = "Descrição é obrigatória.";
  
    if (!dados.valor.trim() || isNaN(Number(dados.valor)) || Number(dados.valor) <= 0) {
      erros.valor = "Valor inválido.";
    }
  
    if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(dados.telefone)) erros.telefone = "Telefone inválido.";
  
    return erros;
  };
  