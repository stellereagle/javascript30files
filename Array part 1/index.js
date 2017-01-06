const inventors = [
 { first: 'Marie', last: 'curie', year: 1867, passed: 1934 },
 { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
 { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
 { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
 { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]

const people = ['Black, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, henry', 'Beethoven, Ludwig', 'Begin, Meachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wende', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Agustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake William']

// filter
const fifteen = inventors.filter(invertor => (invertor.year >= 1500))
console.table(fifteen)

// map
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullNames)

// sort
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(ordered)
