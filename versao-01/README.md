# Finanças pessoais no Power BI — Versão 01

Projeto em desenvolvimento. A versão 01 combina uma planilha Excel para registrar movimentações e um painel no Power BI para acompanhar despesas e reserva.

## O que a versão 01 inclui

- Registro de data, tipo, categoria, descrição e valor em reais.
- Categorias de despesa como Alimentação, Jogos, Entretenimento e Saídas, além de Moradia, Transporte, Saúde e Outros.
- Gráfico de barras com as despesas por categoria e gráfico de linha com a evolução mensal da reserva.
- Filtro por mês e indicadores de receitas, despesas, resultado do período e saldo da reserva.

## Como abrir a demonstração

1. Clone o repositório ou baixe e extraia o ZIP completo. Na pasta `versao-01/`, abra [FinancasPessoais.pbip](FinancasPessoais.pbip) no Power BI Desktop para Windows.
2. Em **Página Inicial → Transformar dados → Editar parâmetros**, configure `CaminhoPlanilha` com o caminho completo da [planilha de exemplo](dados/Lancamentos-exemplo.xlsx) dentro dessa pasta.
3. Confirme o parâmetro, clique em **Aplicar alterações** quando a faixa aparecer e depois clique em **Atualizar**.
4. Use o filtro **Mês** para escolher um período. Segure **Ctrl** para selecionar mais de um mês. Passe o mouse pelas barras ou pela linha para ver os valores exatos.

## Como lançar suas movimentações

Faça uma cópia da planilha de exemplo e apague os valores das linhas de demonstração. Preserve os cabeçalhos e a tabela do Excel chamada `Lancamentos`. Preencha uma movimentação por linha dentro da tabela e confirme que ela se expande ao acrescentar linhas. Digite sempre valores positivos em reais e datas reconhecidas pelo Excel.

| Tipo | Quando usar | Categoria |
| --- | --- | --- |
| Despesa | Pagamento de uma compra ou conta | A categoria do gasto |
| Receita | Salário ou outra entrada de renda | Renda |
| Saldo inicial | Valor que você já tinha na reserva na data escolhida para começar | Reserva |
| Aporte | Dinheiro transferido para a reserva | Reserva |
| Resgate | Dinheiro retirado da reserva | Reserva |

Use **Saldo inicial** uma vez se já houver dinheiro guardado. Se sacar da reserva para pagar uma compra, registre o resgate na categoria **Reserva** e a compra na categoria correspondente.

Para uso pessoal, configure `CaminhoPlanilha` em uma cópia do projeto fora do repositório público. Salve a planilha depois de incluir lançamentos e clique em **Atualizar** no Power BI. Mantenha a planilha pessoal e os arquivos de cache fora do GitHub.

## Como o painel calcula os valores

- **Despesas por categoria** soma apenas lançamentos do tipo Despesa nos meses selecionados.
- **Resultado do período** é o total de receitas menos o total de despesas da seleção. Aportes e resgates são transferências da reserva e ficam fora desse cálculo.
- **Reserva acumulada** soma o saldo inicial e os aportes e desconta os resgates até o fim de cada mês. Mesmo com um mês filtrado, o saldo inclui movimentações anteriores a ele.

## Como conferir os dados de exemplo

| Indicador | Resultado esperado |
| --- | ---: |
| Receitas de julho a outubro de 2026 | R$ 12.800,00 |
| Despesas de julho a outubro de 2026 | R$ 2.441,00 |
| Resultado de julho a outubro de 2026 | R$ 10.359,00 |
| Reserva ao fim de julho | R$ 1.200,00 |
| Reserva ao fim de agosto | R$ 1.650,00 |
| Reserva ao fim de setembro | R$ 1.450,00 |
| Reserva ao fim de outubro | R$ 1.950,00 |
| Despesas ao filtrar setembro | R$ 320,00 |

As categorias Saúde e Transporte aparecem em setembro. A reserva acumulada continua em R$ 1.450,00, pois o saldo inclui os movimentos de julho e agosto.

## Estrutura do projeto

| Caminho | Conteúdo |
| --- | --- |
| `FinancasPessoais.pbip` | Arquivo de abertura do projeto |
| `FinancasPessoais.Report/` | Página, gráficos e filtros no formato PBIR |
| `FinancasPessoais.SemanticModel/` | Consulta Power Query, calendário e medidas DAX |
| `dados/Lancamentos-exemplo.xlsx` | Planilha com dados fictícios para demonstração |

## Histórico

- **Versão 01** — Cadastro de movimentações, categorias, painel de despesas e acompanhamento da reserva.

[Documentação oficial sobre projetos do Power BI Desktop](https://learn.microsoft.com/pt-br/power-bi/developer/projects/projects-overview)
