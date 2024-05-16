'use strict';

const team = [
    {
        nome: 'Wayne Barrett',
        ruolo: 'Founder & CEO',
        foto: '',
    },
    {
        nome: 'Angela Carroll',
        ruolo: 'Chief Editor',
        foto: '',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Office Manager',
        foto: '',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Social Media Manager',
        foto: '',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: '',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: '',
    },
];

for (let i = 0; i < team.length; i++) {
    console.log(i);
    console.log(team[i]);
    const person = team[i];
    console.log(person);

    for (let key in person) {
        console.log(key);
        console.log(person[key]);
        console.log(`${key}: ${person[key]}`);
    }
}

const teamList = document.getElementById('team-list');

for (let i = 0; i < team.length; i++) {
    const person = team[i];
    console.log(person);

    const liElement = document.createElement('li');
    console.log(liElement);

    const nomePersona = document.createElement('h3');
    nomePersona.innerText = person.nome;
    console.log(nomePersona);

    const ruoloPersona = document.createElement('li');
    ruoloPersona.innerText = person.ruolo;
    console.log(ruoloPersona);

    const fotoPersona = document.createElement('li');
    fotoPersona.innerText = person.foto;
    console.log(fotoPersona);

    liElement.append(nomePersona);
    liElement.append(ruoloPersona);
    liElement.append(fotoPersona);
    console.log(liElement);
    teamList.append(liElement);
}