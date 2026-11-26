type Movimento = [number, string, string, string, number];
type EnvioPendente = { indice: number; movimento: Movimento };

function main(workbook: ExcelScript.Workbook): number {
  const painel = workbook.getWorksheet("Painel");
  const resumo = workbook.getWorksheet("Resumo");
  const historico = workbook.getTable("Lancamentos");
  if (!painel || !resumo || !historico) {
    throw new Error("Abra a planilha da versão 02 antes de executar o envio.");
  }
  const colunas = historico.getHeaderRowRange().getValues()[0];
  const esperadas = ["Data", "Tipo", "Categoria", "Descrição", "Valor"];
  if (colunas.length !== esperadas.length || esperadas.some((nome, i) => colunas[i] !== nome)) {
    throw new Error("A tabela Lancamentos precisa ter as cinco colunas da versão 02.");
  }

  const categorias = ["Alimentação", "Jogos", "Entretenimento", "Saídas", "Moradia", "Transporte", "Saúde", "Outros"];
  const grade = painel.getRange("B7:K10").getValues();
  const tarefas = grade.map((linha, i) => {
    const data = linha[0];
    const categoria = linha[2];
    const valor = linha[5];
    const descricao = linha[7];
    const controle = resumo.getRange(`R${11 + i}`);
    const pendente = lerEnvio(controle.getValue(), i + 7);
    if ([data, categoria, valor, descricao].every(campo => campo === "")) {
      return { numero: i + 7, movimento: null, pendente, controle };
    }
    if (
      typeof data !== "number" || !Number.isInteger(data) || data < 61 || data > 2958465 ||
      typeof categoria !== "string" || categorias.indexOf(categoria) < 0 ||
      typeof valor !== "number" || !Number.isFinite(valor) || valor < 0.01
    ) {
      throw new Error(`Confira a data, a categoria e o valor da linha ${i + 7} antes de enviar.`);
    }
    const movimento: Movimento = [data, "Despesa", categoria, String(descricao), Math.round((valor + Number.EPSILON) * 100) / 100];
    if (pendente && !movimentosIguais(pendente.movimento, movimento)) {
      throw new Error(`A linha ${i + 7} mudou após uma tentativa de envio. Confira o histórico antes de continuar.`);
    }
    return { numero: i + 7, movimento, pendente, controle };
  });

  let enviados = 0;
  for (const tarefa of tarefas) {
    let registro = tarefa.pendente;
    if (!registro && tarefa.movimento) {
      registro = { indice: historico.getRowCount(), movimento: tarefa.movimento };
      tarefa.controle.setValue(JSON.stringify(registro));
    }
    if (!registro) continue;

    if (historico.getRowCount() === registro.indice && tarefa.movimento) {
      historico.addRow(-1, registro.movimento);
    }
    const salvo = historico.getRangeBetweenHeaderAndTotal().getValues()[registro.indice];
    if (!salvo || !movimentosIguais(salvo, registro.movimento)) {
      throw new Error(`O envio da linha ${tarefa.numero} precisa ser conferido no histórico. Nenhum campo dessa linha foi limpo.`);
    }
    painel.getRange(`B${tarefa.numero}:K${tarefa.numero}`).clear(ExcelScript.ClearApplyTo.contents);
    tarefa.controle.clear(ExcelScript.ClearApplyTo.contents);
    enviados++;
  }
  if (enviados > 0) painel.getRange("H13").setValue(1);
  return enviados;
}

function lerEnvio(valor: string | number | boolean, linha: number): EnvioPendente | null {
  if (valor === "") return null;
  const erro = `Conferência de envio inválida na linha ${linha}. Verifique o histórico antes de continuar.`;
  if (typeof valor !== "string") throw new Error(erro);
  let registro: EnvioPendente;
  try {
    registro = JSON.parse(valor) as EnvioPendente;
  } catch {
    throw new Error(erro);
  }
  if (!registro || !Number.isInteger(registro.indice) || registro.indice < 0 ||
      !Array.isArray(registro.movimento) || registro.movimento.length !== 5) {
    throw new Error(erro);
  }
  return registro;
}

function movimentosIguais(a: (string | number | boolean)[], b: Movimento): boolean {
  return a.length === b.length && b.every((valor, i) => valor === a[i]);
}
