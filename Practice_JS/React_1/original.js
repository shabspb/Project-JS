const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers
    .filter(name => name) // фильтруем все имена в массиве на наличие имени
    .map((item) => item.toLowerCase().trim()); // делаем все буквы низкого регистра и убираем пробелы в начале и конце    

/* const employersNames = [];
for (let i = 0; i < employers.length; i++) {
    if (employers[i].length > 0 && employers[i].length != '') {
        employersNames.push(employers[i]);
    }
} */
/* for (let i = 0; i < employersNames.length; i++) {
    employersNames[i] = employersNames[i].toLowerCase().trim();
} */

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {
    cash,
    eu,
    rus
} = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];


/* function calcCash(own = 0) {
    own = own || 0;
    let everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    for (let i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
} */

const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);

const money = calcCash(cash);

const makeBusiness = ({
    owner = 'Sam',
    director = 'Victor',
    cash,
    emp
}) => {
    /* director = director || 'Victor'; */
    /* const sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor'); */
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}. \n And we have a sponsors: \n ${sumSponsors} \n Note. Be careful with ${eu[0]}. It's a huge risk.`);
};
makeBusiness({
    cash: money,
    emp: employersNames
});