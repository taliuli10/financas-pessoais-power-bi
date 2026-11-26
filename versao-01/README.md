# Finanças pessoais no Excel Online — Versão 01

A pasta de trabalho reúne o registro de movimentações e os gráficos. Use a aba **Lançamentos** para preencher os dados e a aba **Painel** para acompanhar suas finanças.

## Abrir a demonstração

1. Baixe a [planilha de exemplo](dados/Lancamentos-exemplo.xlsx).
2. No [Excel Online](https://excel.cloud.microsoft/), entre na sua conta, clique em **Carregar um arquivo** e selecione a planilha.
3. Abra a aba **Painel**. A célula amarela **Mês do painel** pode ficar vazia para mostrar todos os lançamentos ou receber uma data, como `01/09/2026`, para consultar um mês.

## Registrar uma movimentação

Na aba **Lançamentos**, preencha **Data**, **Tipo**, **Categoria**, **Descrição** e **Valor**. Use um valor positivo em reais e adicione cada movimentação em uma linha da tabela. As listas em **Tipo** e **Categoria** ajudam a padronizar os lançamentos.

| Tipo | Quando usar | Categoria |
| --- | --- | --- |
| Despesa | Compra ou conta paga | Alimentação, Jogos, Entretenimento, Saídas, Moradia, Transporte, Saúde ou Outros |
| Receita | Salário ou outra entrada de renda | Renda |
| Saldo inicial | Valor que já estava na reserva na data de início | Reserva |
| Aporte | Transferência para a reserva | Reserva |
| Resgate | Retirada da reserva | Reserva |

Se usar dinheiro da reserva para pagar uma compra, registre duas linhas. Uma para o resgate e outra para a despesa na categoria correspondente.

Para começar com seus próprios dados, crie uma cópia privada, limpe os valores de exemplo e preserve os cabeçalhos e a tabela de lançamentos. Ao alterar os dados, o Excel recalcula o painel automaticamente.

## Ler o painel

- **Despesas por categoria** mostra em uma rosca quanto cada categoria representa no total gasto. Cada categoria tem uma cor na legenda.
- **Evolução da reserva** mostra o saldo ao fim de cada mês nos 12 meses que terminam no mês escolhido. Com a célula amarela vazia, a linha termina no mês do lançamento mais recente.
- **Resultado do período** é a diferença entre receitas e despesas. O saldo da reserva soma o saldo inicial e os aportes e desconta os resgates, incluindo os movimentos de meses anteriores.
- A aba **Resumo** mostra os valores que alimentam os gráficos.

## Conferir a demonstração

| Indicador | Valor esperado |
| --- | ---: |
| Receitas no período completo | R$ 12.800,00 |
| Despesas no período completo | R$ 2.441,00 |
| Resultado do período completo | R$ 10.359,00 |
| Reserva ao fim de outubro de 2026 | R$ 1.950,00 |
| Despesas ao selecionar setembro de 2026 | R$ 320,00 |
| Reserva ao selecionar setembro de 2026 | R$ 1.450,00 |
