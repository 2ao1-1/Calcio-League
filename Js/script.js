const data1 = {
  img: "Image/bg-1.jpg",
  title: "LEAGUE NUMBERS",
  p: "We analyse the opening seven matchdays of Serie A Enilive through the most important team stats",
};
const data2 = {
  img: "Image/bg-2.jpg",
  title: "Thuram scores three at San Siro",
  p: "Tikus netted the first hat-trick of his career to edge Torino in a five-goal thriller at the home of the Nerazzurri, leading Inter to consecutive wins in the league",
};
const data3 = {
  img: "Image/bg-3.jpg",
  title: "Pedro with the master’s touch",
  p: "The Spaniard came on with only a few minutes to spare as Lazio was struggling to break down Empoli’s defence",
};
const data4 = {
  img: "Image/bg-4.jpg",
  title: "KVARATSKHELIA “POTM” FOR SEPTEMBER",
  p: "The award will be presented to Napoli forward in the pre-match of Napoli vs Lecce",
};

const news = [data1, data2, data3, data4];

// element
const img = document.querySelector(".caro-item img");
const title = document.querySelector(".caro-item h3");
const text = document.querySelector(".caro-item p");

// btn
const mLeft = document.querySelector(".arrow-left");
const mRight = document.querySelector(".arrow-right");

// initial
let currentIndex = 0;
const timerDuration = 4000;

// display data
const displayImg = function (data) {
  img.src = data.img;
  title.textContent = data.title;
  text.textContent = data.p;
};
displayImg(news[currentIndex]);

// image right move
const moveToNextImage = function () {
  currentIndex = currentIndex === news.length - 1 ? 0 : currentIndex + 1;
  displayImg(news[currentIndex]);
};

// image left move
const moveToPrevImage = function () {
  currentIndex = currentIndex === 0 ? news.length - 1 : currentIndex - 1;
  displayImg(news[currentIndex]);
};

// left move timer
mLeft.addEventListener("click", function () {
  moveToPrevImage();
  resetTimer();
});

// move right timer
mRight.addEventListener("click", function () {
  moveToNextImage();
  resetTimer();
});

// duration
let timer = setInterval(moveToNextImage, timerDuration);

// reset timer
const resetTimer = function () {
  clearInterval(timer);
  timer = setInterval(moveToNextImage, timerDuration);
};

/////////////////////////////////
// matches
const match1 = {
  teamHome: "COMO",
  tHomeImg: "Image/teams/como.png",
  teamAway: "PARMA",
  tAwayImg: "Image/teams/parma.png",
  stadium: "GIUSEPPE SINIGAGLIA",
  round: 8,
  date: "19/10/2024",
  time: "16:00",
};
const match2 = {
  teamHome: "GENOA",
  tHomeImg: "Image/teams/genoa.png",
  teamAway: "BOLOGNA",
  tAwayImg: "Image/teams/bologna.png",
  stadium: "LUIGI FERRARIS",
  round: 9,
  date: "19/10/2024",
  time: "16:00",
};
const match3 = {
  teamHome: "AS MILAN",
  tHomeImg: "Image/teams/milan.png",
  teamAway: "UDINESE",
  tAwayImg: "Image/teams/udinese.png",
  stadium: "GIUSEPPE MEAZZA",
  round: 10,
  date: "19/10/2024",
  time: "19:00",
};
const match4 = {
  teamHome: "JUVENTUS",
  tHomeImg: "Image/teams/juventus.png",
  teamAway: "LAZIO",
  tAwayImg: "Image/teams/lazio.png",
  stadium: "ALLIANZ STADIUM",
  round: 11,
  date: "19/10/2024",
  time: "21:45",
};
const match5 = {
  teamHome: "EMPOLI",
  tHomeImg: "Image/teams/empoli.png",
  teamAway: "NAPOLI",
  tAwayImg: "Image/teams/napoli.png",
  stadium: "CARLO CASTELLANI",
  round: 12,
  date: "20/10/2024",
  time: "13:30",
};
const match6 = {
  teamHome: "LECCE",
  tHomeImg: "Image/teams/lecce.png",
  teamAway: "FIRONTINA",
  tAwayImg: "Image/teams/firontina.png",
  stadium: "ETTORE GIARDINIERO - VIA DEL MARE",
  round: 8,
  date: "20/10/2024",
  time: "16:00",
};
const match7 = {
  teamHome: "VENEZIA",
  tHomeImg: "Image/teams/venezia.png",
  teamAway: "ATALANTA",
  tAwayImg: "Image/teams/atalanta.png",
  stadium: "PIER LUIGI PENZO",
  round: 8,
  date: "20/10/2024",
  time: "16:00",
};
const match8 = {
  teamHome: "CAGLIARI",
  tHomeImg: "Image/teams/cagliari.png",
  teamAway: "TORINO",
  tAwayImg: "Image/teams/torino.png",
  stadium: "UNIPOL DOMUS",
  round: 8,
  date: "20/10/2024",
  time: "19:00",
};
const match9 = {
  teamHome: "ROMA",
  tHomeImg: "Image/teams/roma.png",
  teamAway: "INTER",
  tAwayImg: "Image/teams/inter-milan.png",
  stadium: "OLIMPICO",
  round: 8,
  date: "20/10/2024",
  time: "21:45",
};
const match10 = {
  teamHome: "VERONA",
  tHomeImg: "Image/teams/verona.png",
  teamAway: "MONZA",
  tAwayImg: "Image/teams/monza.png",
  stadium: "MARCANTONIO BENTEGODI",
  round: 8,
  date: "21/10/2024",
  time: "21:45",
};

const league = [
  match1,
  match2,
  match3,
  match4,
  match5,
  match6,
  match7,
  match8,
  match9,
  match10,
];

// element
// const team1Img = document.querySelector(".t-1 img");
// const team2Img = document.querySelector(".t-2 img");
// const team1Name = document.querySelector(".t-1 h6");
// const team2Name = document.querySelector(".t-2 h6");

// const stad = document.querySelector(".stadium");
// const timing = document.querySelector(".date");
const containerMatches = document.querySelector(".cards");
const arrowLeft = document.querySelector(".match-arrow arr-left");
const arrowRight = document.querySelector(".match-arrow arr-right");

let currentMatch = 0;
const matchesPage = 5;
const displayMatch = function () {
  containerMatches.innerHTML = "";

  const matchShow = league.slice(currentIndex, currentIndex + matchesPage);

  matchShow.forEach(function (match) {
    const html = `<div class="match-card">
                <div class="team t-1">
                  <img src="${match.tHomeImg}" alt="" class="team-img" />
                  <h6>${match.teamHome}</h6>
                </div>
                <span class="p-3">VS</span>
                <div class="team t-2">
                  <img src="${match.tAwayImg}" alt="" class="team-img" />
                  <h6>${match.teamAway}</h6>
                </div>
                <span class="stadium d-block"> ${match.stadium} </span>
                <span class="date d-block">
                  Match Day 8 | ${match.date} | ${match.time}
                </span>
                <button class="match-detail">MATCH CENTER</button>
              </div>`;
    containerMatches.insertAdjacentHTML("beforeend", html);
  });
};
displayMatch(league);

// left & right
arrowLeft.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex -= matchesPage;
    displayMatch();
  }
});
arrowRight.addEventListener("click", function () {
  if (currentIndex + matchesPage < league.length) {
    currentIndex += matchesPage;
    displayMatch();
  }
});
