/* Crea una función que devuelva un array con als siguientes compañias ordenadas por el año de más moderno a más antiguo.

const companies = [
{ name: "Apple", ceo: "Tim Cook", year: 1976 },
{ name: "Microsoft", ceo: "Satya Nadella", year: 1975 },
{ name: "Amazon", ceo: "Jeft Bezos", year: 1994 },
{ name: "Google", ceo: "SUndar Pichai", year: 1998 },
{ name: "Netflix", ceo: "Reed Hastings", year: 1997 },
{ name: "Facebook", ceo: "Mark Zuckerberg", year: 2004 }
] */

function ordenar(array) {
  const nuevoArray = array.slice();
  nuevoArray.sort((comp1, comp2) =>
    comp1.year < comp2.year ? 1 : comp1.year > comp2.year ? -1 : 0
  );
  return nuevoArray;
}

const companies = [
  { name: "Apple", ceo: "Tim Cook", year: 1976 },
  { name: "Microsoft", ceo: "Satya Nadella", year: 1975 },
  { name: "Amazon", ceo: "Jeft Bezos", year: 1994 },
  { name: "Google", ceo: "SUndar Pichai", year: 1998 },
  { name: "Netflix", ceo: "Reed Hastings", year: 1997 },
  { name: "Facebook", ceo: "Mark Zuckerberg", year: 2004 },
];

console.log(ordenar(companies));
