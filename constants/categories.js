const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Comércio', amount: 0, color: incomeColors[0] },
  { type: 'Investimentos', amount: 0, color: incomeColors[1] },
  { type: 'Renda extra', amount: 0, color: incomeColors[2] },
  { type: 'Depositos', amount: 0, color: incomeColors[3] },
  { type: 'Loteria', amount: 0, color: incomeColors[4] },
  { type: 'Presentes', amount: 0, color: incomeColors[5] },
  { type: 'Salario', amount: 0, color: incomeColors[6] },
  { type: 'Economia', amount: 0, color: incomeColors[7] },
  { type: 'Aluguéis', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Contas', amount: 0, color: expenseColors[0] },
  { type: 'Carro', amount: 0, color: expenseColors[1] },
  { type: 'Roupas', amount: 0, color: expenseColors[2] },
  { type: 'Viajem', amount: 0, color: expenseColors[3] },
  { type: 'Comida', amount: 0, color: expenseColors[4] },
  { type: 'Shopping', amount: 0, color: expenseColors[5] },
  { type: 'Casa', amount: 0, color: expenseColors[6] },
  { type: 'Entreterimento', amount: 0, color: expenseColors[7] },
  { type: 'Telefone', amount: 0, color: expenseColors[8] },
  { type: 'Pets', amount: 0, color: expenseColors[9] },
  { type: 'Outros', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
