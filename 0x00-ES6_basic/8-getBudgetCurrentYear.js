export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const now = Date();

  budget[`income-${date +%Y}`] = income;
  budget[`gdp-${date + %Y}`] = gdp;
  budget[`capita-${date + %Y}`] = capita;

  return budget;
}
