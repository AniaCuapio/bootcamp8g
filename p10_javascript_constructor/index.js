const mentors = [
    {
        name: "David",
        age: 23,
        skills: [
            {
                javascript: 10,
                css: 8.5,
                jquery: 9,
                node: 9
            }
        ]
    }, {
        name: "Charles",
        age: 24,
        skills: [
            {
                javascript: 10,
                css: 8,
                jquery: 9,
                node: 10
            }
        ]
    }, {
        name: "Michael",
        age: 22,
        skills: [
            {
                javascript: 10,
                css: 8.5,
                jquery: 10,
                node: 8.5
            }
        ]
    }, {
        name: "Israel",
        age: 30,
        skills: [
            {
                javascript: 9.5,
                css: 10,
                jquery: 9,
                node: 8
            }
        ]
    }
]

/*
crear una funcion constructura para la clase Mentor, que reciba nombre, edad, y notas del mentor;
crear un objeto de la clase Mentor por cada entrada del array "mentors";
a cada mentor agregarle un método que me permita saber el promedio de sus skills;
*/

function Mentor(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    // this.averageSkills = function () {
    //     let { javascript, css, jquery, node } = this.skills[0]
    //     let average = (javascript + css + jquery + node) / 4
    //     return average
    // }
    this.averageSkills = function () {
        let skillsObject = this.skills[0]
        let skillsValues = Object.values(skillsObject)
        console.log(skillsValues)
        let total = 0;
        skillsValues.map((skill) => {
            total += skill
            return total
        })
    }
}

var mentorsCollection = mentors.map((mentor) => {
    return new Mentor(mentor.name, mentor.age, mentor.skills)
})

console.log(mentorsCollection)