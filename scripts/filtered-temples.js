const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const today = new Date();
const year = today.getFullYear();
const yearText = document.getElementById('currentyear');
yearText.innerHTML = today.getFullYear();

let LastModif = new Date(document.lastModified);
const lastModified = document.getElementById('lastModified')
lastModified.innerHTML = "Last Modafied: " + LastModif

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Arequipa",
		location: "Cayma, Arequipa, Peru",
		dedicated: "2019, december, 15",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
	},
	{
		templeName: "Los Olivos",
		location: "Los Olivos, Lima, Perú",
		dedicated: "2024, January, 14",
		area: 107639,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/3f3327a93b9f11eeb2f0eeeeac1e45f6554046d6/full/320%2C/0/default"
	},
	{
		templeName: "Colonia Juarez",
		location: "Colonia Juarez, Chiuahua, mexico",
		dedicated: "1999, March, 6",
		area: 6792,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/9130468c8099ce6d57d408945a4d94ebc97d969a/full/320%2C/0/default"
	},
	{
		templeName: "Trujillo",
		location: "Trujillo, Lalibertad, Peru",
		dedicated: "2015, June, 21",
		area: 27986,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/trujillo-peru/400x250/trujillo-peru-temple-exterior-1449769-wallpaper.jpg"
	},
	{
		templeName: "Coban",
		location: "Coban, Guatemala",
		dedicated: "2024, June, 9",
		area: 8800,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/4b129a33b4b311ee9c99eeeeac1e820ae5a7a3bb/full/320%2C/0/default"
	},
];

function createMainContent(container){
	container.forEach(element => {
		let card = document.createElement("div");
		let name = document.createElement("h3");
		let location = document.createElement("p");	
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let image = document.createElement("img");
		name.textContent = element.templeName
		location.innerHTML = `<p class="info">Location:</p> ${element.location}`;
		dedicated.innerHTML = `<p class="info">Dedicated:</p> ${element.dedicated}`;
		area.innerHTML = `<p class="info">Area:</p> ${element.area} sq. ft.`;

		card.setAttribute("class", "card");
		image.setAttribute("src" ,element.imageUrl);
		image.setAttribute("alt" ,`${element.templeName} temple`);
		image.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(image);
		document.querySelector(".container").appendChild(card);
	});

	
}
createMainContent(temples);

const homeLink = document.getElementById("homeLink");
const oldLink = document.getElementById("oldLink");
const newLink = document.getElementById("newLink");
const largeLink = document.getElementById("largeLink");
const smallLink = document.getElementById("smallLink");
const heading = document.querySelector("mainTitle");

homeLink.addEventListener("click", () => {
	document.querySelector(".container").innerHTML =null;
	createMainContent(temples);
	heading.textContent = " Home";
});

oldLink.addEventListener("click", () => {
	document.querySelector(".container").innerHTML =null;
	const newTemples = temples.filter((temple) => {
			const year = new Date(temple.dedicated).getFullYear();
			return  year < 2005;
	});
	createMainContent(newTemples);
	heading.textContent = "Old"
	});

newLink.addEventListener("click", () => {
	document.querySelector(".container").innerHTML =null;
	const newTemples = temples.filter((temple) => {
		const year = new Date(temple.dedicated).getFullYear();
		return year >= 2000;
	});
	createMainContent(newTemples);
	heading.textContent = "New"
});

largeLink.addEventListener("click", () => {
	document.querySelector(".container").innerHTML =null;
	const largeTemples = temples.filter((temple) => temple.area >= 10000);
	createMainContent(largeTemples);
	heading.textContent = "Large"
});

smallLink.addEventListener("click", () => {
	document.querySelector(".container").innerHTML =null;
	const smallTemples = temples.filter((temple) => temple.area < 10000);
	createMainContent(smallTemples);
	heading.textContent = "Small"
});