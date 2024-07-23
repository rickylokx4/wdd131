// footer last LastModif getter

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const today = new Date();
const year = today.getFullYear();
const yearText = document.getElementById('currentyear');
yearText.innerHTML=today.getFullYear();

let LastModif = new Date(document.lastModified);
const lastModified = document.getElementById('lastModified')
lastModified.innerHTML="Last Modafied: "+ LastModif

// last tournaments filler

const players1 = [
	{
		position: "First Place",
		playerName: "Nando",
		Age: "38 Years old",
		team: "Iron-Man, Gambit, Dr. Doom ",
		imageUrl:
			"images/team1.webp"
	},
	{
		position: "Second Place",
		playerName: "The Andy",
		Age: "38 Years old",
		team: "Cyclops, Cap. Comando, Iron-Man",
		imageUrl:
			"images/team2.webp"
	},
	{
		position: "Third Place",
		playerName: "Ulises",
		Age: "28 Years old",
		team: "Colossus, Charlie, Cable ",
		imageUrl:
		"images/team3.webp"

	}
];
const players2 = [
	{
		position: "First Place",
		playerName: "The Lokx",
		Age: "37 Years old",
		team: "Iron-man, Psylocke, Juggernaut",
		imageUrl:
			"images/team4.webp"
	},
	{
		position: "Second Place",
		playerName: "Robert",
		Age: "22 years old",
		team: "ice-Man, B.B. Hood, Hulk",
		imageUrl:
			"images/team5.webp"
	},
	{
		position: "Third Place",
		playerName: "PlayandGo",
		Age: "25 years old",
		team: "Cammy, Rogue, Dr. Doom",
		imageUrl:
			"images/team6.webp"
	}
];
content1 = document.querySelector(".tournament-1");
content2 = document.querySelector(".tournament-2");

function createMainContent(playerList,content) {
	playerList.forEach(element => {
		let card = document.createElement("div");
		let tournament = document.createElement("h2");
		let position = document.createElement("h3");
		let playerName = document.createElement("p");
		let Age = document.createElement("p");
		let team = document.createElement("p");
		let image = document.createElement("img");

		tournament.textContent = `MVSC2 Tournament 2023`;
		position.textContent = element.position
		playerName.innerHTML = `<p class="info">Player Name:</p> ${element.playerName}`;
		Age.innerHTML = `<p class="info">Age:</p> ${element.Age}`;
		team.innerHTML = `<p class="info">Team:</p> ${element.team}`;

		card.setAttribute("class", "card");
		image.setAttribute("src", element.imageUrl);
		image.setAttribute("loading", "lazy");

		
		card.appendChild(position);
		card.appendChild(playerName);
		card.appendChild(Age);
		card.appendChild(team);
		card.appendChild(image);
		content.appendChild(card);
	});
}
createMainContent(players1,content1);
createMainContent(players2,content2);


// registration counter
