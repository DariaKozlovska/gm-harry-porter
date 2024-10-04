//list of the people
let people = [
  {
    name: "Harry Potter",
    slogan: "The Boy Who Lived",
    house: "Gryffindor",
    birth: "31-07-1980",
    src: "public/harry-porter.png",
    status: "student",
  },
  {
    name: "Hermione Granger",
    slogan: "The Boy Who Lived",
    house: "Gryffindor",
    birth: "19-09-1979",
    src: "public/hermiona-granger.png",
    status: "student",
  },
  {
    name: "Ron Weasley",
    slogan: "Dragomir Despard",
    house: "Gryffindor",
    birth: "01-03-1980",
    src: "public/ron-weasley.png",
    status: "student",
  },
  {
    name: "Draco Malfoy",
    slogan: "The Boy Who Lived",
    house: "Slytherin",
    birth: "05-06-1980",
    src: "public/draco-malfoy.png",
    status: "student",
  },
  {
    name: "Cedric Diggory",
    slogan: "The Boy Who Lived",
    house: "Hufflepuff",
    birth: "31-07-1980",
    src: "public/cedric-diggory.png",
    status: "student",
  },
  {
    name: "Cho Chang",
    slogan: "The Boy Who Lived",
    house: "Ravenclaw",
    birth: "07-04-1979",
    src: "public/cho-chang.png",
    status: "student",
  },
  {
    name: "Neville Longbottom",
    slogan: "The Boy Who Lived",
    house: "Gryffindor",
    birth: "30-07-1980",
    src: "public/neville-longbottom.png",
    status: "student",
  },
  {
    name: "Luna Lovegood",
    slogan: "The Boy Who Lived",
    house: "Ravenclaw",
    birth: "13-02-1981",
    src: "public/luna-lovegood.png",
    status: "student",
  },
  {
    name: "Minerva McGonagall",
    slogan: "The Boy Who Lived",
    house: "Gryffindor",
    birth: "4-10-1925",
    src: "public/minerva-mcgonagall.png",
    status: "worker",
  },
  {
    name: "Severus Snape",
    slogan: "Half-Blood Princ",
    house: "Slytherin",
    birth: "09-01-1960",
    src: "public/severus-snape.png",
    status: "worker",
  },
  {
    name: "Rubeus Hagrid",
    slogan: "Dragomir Despard",
    house: "Gryffindor",
    birth: "06-12-1928",
    src: "public/rubeus-hagrid.png",
    status: "worker",
  },
  {
    name: "Remus Lupin",
    slogan: "Professor Lupin, Moony",
    house: "Gryffindor",
    birth: "10-03-1960",
    src: "public/remus-lupin.png",
    status: "worker",
  },
  {
    name: "Horace Slughorn",
    slogan: "The Boy Who Lived",
    house: "Gryffindor",
    birth: null,
    src: "public/horace-slughorn.png",
    status: "worker",
  },
  {
    name: "Dolores Umbridge",
    slogan: "The Boy Who Lived",
    house: "Slytherin",
    birth: null,
    src: "public/dolores-umbridge.png",
    status: "worker",
  },
  {
    name: "Argus Filch",
    slogan: "The Boy Who Lived",
    house: "Gryffindor",
    birth: null,
    src: "public/argus-flich.png",
    status: "worker",
  },
  {
    name: "Albus Dumbledore",
    slogan: "Professor Dumbledor",
    house: "Gryffindor",
    birth: null,
    src: "public/albus-dumbledore.png",
    status: "worker",
  },
];

// action to open the options after click button "Show all characters"
let allCharacters = document.getElementById("allCharacters");

allCharacters.addEventListener("click", () => {
  let firstBlock = document.getElementById("firstBlock");
  firstBlock.style.display = "flex";
  firstBlock.scrollIntoView({
    behavior: "smooth",
  });
});

//Getting the containers
let students = document.getElementById("students");
let workers = document.getElementById("workers");
let house = document.getElementById("house");

//function to create the card
function createCard(person) {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<img src=${person.src} alt=${person.name} class="student-image">
    <h4>${person.name}</h4>
    <p>${person.slogan}</p>
    <p>${person.house}</p>
    <p>${person.birth}</p>
    <button>
        More information
        <img src="public/arrow.png" alt="arrow">
    </button>`;
  return div;
}

//function to remove cards fro section
function removeCards(e) {
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

//function to add cards in section by status
function addingCardsByStatus(status) {
  let cards = document.getElementById(`${status}-cards`);
  if (cards.children.length != 0) {
    removeCards(cards);
  }
  for (let person in people) {
    if (people[person].status == status) {
      let card = createCard(people[person]);
      cards.appendChild(card);
    }
  }
}

//function to add cards in section by house
function addingCardsByHouse(house) {
  let cards = document.getElementById("house-cards");
  if (cards.children.length != 0) {
    removeCards(cards);
  }
  for (let person in people) {
    if (people[person].house == house) {
      let card = createCard(people[person]);
      cards.appendChild(card);
    }
  }
}

// action to open the cards after click button "Hogwards's students"
let studentsButton = document.getElementById("studentsButton");

studentsButton.addEventListener("click", () => {
  students.style.display = "flex";
  workers.style.display = "none";
  house.style.display = "none";

  students.scrollIntoView({
    behavior: "smooth",
  });

  addingCardsByStatus("student");
});

// action to open the cards after click button "Hogwards's workers"
let workersButton = document.getElementById("workersButton");

workersButton.addEventListener("click", () => {
  students.style.display = "none";
  workers.style.display = "flex";
  house.style.display = "none";

  workers.scrollIntoView({
    behavior: "smooth",
  });

  addingCardsByStatus("worker");
});

// action to open the cards after click button "Character in special house"
let houseButton = document.getElementById("houseButton");

houseButton.addEventListener("click", () => {
  students.style.display = "none";
  workers.style.display = "none";
  house.style.display = "flex";

  house.scrollIntoView({
    behavior: "smooth",
  });

  gryffindor.classList.add("active");
  addingCardsByHouse("Gryffindor");
});

//Getting the action on buttons
let gryffindor = document.getElementById("gryffindor");
let slytherin = document.getElementById("slytherin");
let ravenclaw = document.getElementById("ravenclaw");
let hufflepuff = document.getElementById("hufflepuff");

//Action anfter click "Gryffindor"
gryffindor.addEventListener("click", () => {
  gryffindor.classList.add("active");
  slytherin.classList.remove("active");
  ravenclaw.classList.remove("active");
  hufflepuff.classList.remove("active");

  addingCardsByHouse("Gryffindor");
});

//Action anfter click "Slytherin"
slytherin.addEventListener("click", () => {
  gryffindor.classList.remove("active");
  slytherin.classList.add("active");
  ravenclaw.classList.remove("active");
  hufflepuff.classList.remove("active");

  addingCardsByHouse("Slytherin");
});

//Action anfter click "Ravenclaw"
ravenclaw.addEventListener("click", () => {
  gryffindor.classList.remove("active");
  slytherin.classList.remove("active");
  ravenclaw.classList.add("active");
  hufflepuff.classList.remove("active");

  addingCardsByHouse("Ravenclaw");
});

//Action anfter click "Hufflepuff"
hufflepuff.addEventListener("click", () => {
  gryffindor.classList.remove("active");
  slytherin.classList.remove("active");
  ravenclaw.classList.remove("active");
  hufflepuff.classList.add("active");

  addingCardsByHouse("Hufflepuff");
});
