// Array cardio part 2

const people = [
	{
		userName: "Bess", year: "1988", place: "Moon", "fav_place": "earth"
	},
	{
		userName: "Maxx", year: "1984", place: "Saturn", "fav_place": "earth"
	},
	{
		userName: "Boxx", year: "1831", place: "Pluto", "fav_place": "earth"
	},
	{
		userName: "Ohhx", year: "1350", place: "Sun", "fav_place": "earth"
	}
]

const comments = [
	{
		text: "This is Bess", id: 34957
	},
	{
		text: "This is Maxx", id: 242983
	},
	{
		text: "This is Boxx", id: 230138
	},
	{
		text: "Ohhx", id: 2038491
	}
]
// hotshot to find if the person is adult
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19)
console.log({isAdult})

// hotshot to find if all ther person is adult
const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19)
console.log({allAdult})

// find
const findBess = comments.find( comment => comment.id === 34957)
console.log(findBess.text)

// find index
const index = comments.findIndex( comment => comment.id === 230138)
console.log(index)
comments.splice(index, 1)
console.table(comments)