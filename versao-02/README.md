# Finanças pessoais no Excel Online — Versão 02

O **Painel** ocupa **A1:AD35**. À esquerda ficam o registro direto, os lançamentos recentes e os gastos do mês anterior. No centro ficam o filtro, os indicadores e a rosca de despesas. À direita ficam as tabelas e o gráfico da reserva.

## Abrir no Excel Online

Baixe a [planilha de exemplo](dados/Lancamentos-exemplo.xlsx) e use **Carregar um arquivo** no [Excel Online](https://excel.cloud.microsoft/). A pasta de trabalho tem duas abas, **Painel** e **Resumo**.

## Registrar no Painel

1. Em **Registrar despesas**, dê dois cliques em **Data** para abrir o calendário ou digite a data.
2. Selecione a categoria na lista. Digite o valor em reais na célula ao lado e escreva a descrição no último campo.
3. As linhas com data, categoria e valor positivo são incluídas automaticamente nos totais. A descrição é opcional.

Há quatro linhas de preenchimento direto. Use o **Histórico de movimentações** no **Resumo** para outros gastos, receitas, saldo inicial, aportes e resgates. Registre cada movimento uma vez. Se quiser liberar um espaço no Painel, transfira aquela despesa para o histórico como **Despesa** e limpe os campos da linha no Painel.

**Lançamentos recentes** reúne automaticamente os registros do Painel e do histórico, com as datas mais novas primeiro. A célula **Página** mostra quatro registros por vez.

## Enviar e limpar os campos

Em contas do Microsoft 365 com suporte a botões de Office Scripts, a rotina [enviar-despesas.ts](enviar-despesas.ts) transfere as despesas ao histórico, limpa os campos depois de confirmar a gravação e volta à primeira página dos lançamentos recentes.

No Excel Online, abra **Automatizar → Novo Script**, cole o conteúdo da rotina e salve. Em **Associar à pasta de trabalho**, escolha **Adicionar botão à planilha** e dê ao botão o nome **Enviar**. Use somente uma execução por vez.

O Excel Online com conta pessoal não oferece o botão de Office Scripts. Nesse caso, para reaproveitar os campos, copie a despesa para o **Histórico de movimentações** e limpe a linha do Painel depois de conferir a cópia. [Requisitos da Microsoft para botões de script](https://learn.microsoft.com/en-us/office/dev/scripts/develop/script-buttons)

## Ler o Resumo

O **Resumo** detalha os totais do período, os gastos por categoria, a reserva mensal e as despesas do mês anterior. A tabela **Histórico de movimentações** começa na linha 24. O atalho no Painel abre a primeira linha da tabela.

- **Mês do painel** filtra os totais de despesas e receitas. Deixe a célula vazia para somar todo o período.
- **Gastos do mês passado** usa o mês civil anterior à data atual, independente do filtro.
- **Evolução da reserva** mostra 12 meses. O saldo soma o saldo inicial e os aportes e desconta os resgates.

## Conferir a demonstração

A planilha publicada contém apenas dados fictícios. Para verificar os cálculos, deixe o filtro vazio ou escolha uma data de setembro de 2026.

| Seleção | Receitas | Despesas | Resultado | Reserva |
| --- | ---: | ---: | ---: | ---: |
| Todo o período | R$ 12.800,00 | R$ 2.441,00 | R$ 10.359,00 | R$ 1.950,00 |
| Setembro de 2026 | R$ 3.200,00 | R$ 320,00 | R$ 2.880,00 | R$ 1.450,00 |

Quando o mês anterior for outubro de 2026, o gráfico à esquerda mostra R$ 437,70 em despesas lançadas diretamente no Painel.
