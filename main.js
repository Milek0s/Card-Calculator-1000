let cards = {
  cA: 0,
  cK: 0,
  cQ: 0,
  cJ: 0,
  c10: 0,
  c9: 0,
  m100: false,
  m80: false,
  m60: false,
  m40: false,
  restart() {
    this.cA = 0;
    this.cK = 0;
    this.cQ = 0;
    this.cJ = 0;
    this.c10 = 0;
    this.c9 = 0;
    this.m100 = false;
    this.m80 = false;
    this.m60 = false;
    this.m40 = false;
  },
};
const render = (thisCards) => {
  document.querySelector("#cA").innerHTML = thisCards.cA;
  document.querySelector("#c10").innerHTML = thisCards.c10;
  document.querySelector("#c9").innerHTML = thisCards.c9;
  //
  document.querySelector("#cK").innerHTML = thisCards.cK;
  document.querySelector("#cQ").innerHTML = thisCards.cQ;
  document.querySelector("#cJ").innerHTML = thisCards.cJ;

  document.querySelector("#m100").className = `red ${
    thisCards.m100 ? "active" : ""
  }`;
  document.querySelector("#m80").className = `red ${
    thisCards.m80 ? "active" : ""
  }`;
  document.querySelector("#m60").className = `${thisCards.m60 ? "active" : ""}`;
  document.querySelector("#m40").className = `${thisCards.m40 ? "active" : ""}`;
  calculate(thisCards);
};
const calculate = (thisCards) => {
  let oczka = 0;
  let punkty = 0;
  let suma = 0;
  let meldunki = 0;

  oczka += thisCards.cA * 11;
  suma += thisCards.cA;
  //
  oczka += thisCards.c10 * 10;
  suma += thisCards.c10;
  //
  oczka += thisCards.c9 * 0;
  suma += thisCards.c9;
  //
  oczka += thisCards.cK * 4;
  suma += thisCards.cK;
  //
  oczka += thisCards.cQ * 3;
  suma += thisCards.cQ;
  //
  oczka += thisCards.cJ * 2;
  suma += thisCards.cJ;

  if (thisCards.m100) meldunki += 100;
  if (thisCards.m80) meldunki += 80;
  if (thisCards.m60) meldunki += 60;
  if (thisCards.m40) meldunki += 40;

  punkty = Math.round((oczka - 1) / 10) * 10;

  document.querySelector("#oczka").innerHTML = oczka;
  if(suma===7) document.querySelector("#oczka").className = "blue";
  else if (suma % 3) document.querySelector("#oczka").className = "red";
  else document.querySelector("#oczka").className = "";

  document.querySelector("#punkty").innerHTML = punkty+meldunki;
  if (punkty > oczka) document.querySelector("#punkty").className = "yellow";
  else document.querySelector("#punkty").className = "";
};
render(cards);

document.querySelector("#restart").addEventListener("click", () => {
  cards.restart();
  render(cards);
});
document.querySelector("#m100").addEventListener("click", () => {
  cards.m100 = !cards.m100;
  render(cards);
});
document.querySelector("#m80").addEventListener("click", () => {
  cards.m80 = !cards.m80;
  render(cards);
});
document.querySelector("#m60").addEventListener("click", () => {
  cards.m60 = !cards.m60;
  render(cards);
});
document.querySelector("#m40").addEventListener("click", () => {
  cards.m40 = !cards.m40;
  render(cards);
});
document.querySelector("#btcA").addEventListener("click", () => {
  if (cards.cA < 4) cards.cA++;
  render(cards);
});
document.querySelector("#btc10").addEventListener("click", () => {
  if (cards.c10 < 4) cards.c10++;
  render(cards);
});
document.querySelector("#btcK").addEventListener("click", () => {
  if (cards.cK < 4) cards.cK++;
  render(cards);
});
document.querySelector("#btcQ").addEventListener("click", () => {
  if (cards.cQ < 4) cards.cQ++;
  render(cards);
});
document.querySelector("#btcJ").addEventListener("click", () => {
  if (cards.cJ < 4) cards.cJ++;
  render(cards);
});
document.querySelector("#btc9").addEventListener("click", () => {
  if (cards.c9 < 4) cards.c9++;
  render(cards);
});
document.querySelector("#bt-cA").addEventListener("click", () => {
  if (cards.cA > 0) cards.cA--;
  render(cards);
});
document.querySelector("#bt-c10").addEventListener("click", () => {
  if (cards.c10 > 0) cards.c10--;
  render(cards);
});
document.querySelector("#bt-c9").addEventListener("click", () => {
  if (cards.c9 > 0) cards.c9--;
  render(cards);
});
document.querySelector("#bt-cK").addEventListener("click", () => {
  if (cards.cK > 0) cards.cK--;
  render(cards);
});
document.querySelector("#bt-cQ").addEventListener("click", () => {
  if (cards.cQ > 0) cards.cQ--;
  render(cards);
});
document.querySelector("#bt-cJ").addEventListener("click", () => {
  if (cards.cJ > 0) cards.cJ--;
  render(cards);
});
