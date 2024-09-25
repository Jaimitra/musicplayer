let musicList = [
  {
    musicposter: "photo/shape.jpg",
    song: "songs/Shape of You.mp3",
    name: "Shape of You",
    artist: "Ed Sheeran",
  },
  {
    musicposter: "photo/love.jpg",
    song: "songs/love.mp3",
    name: "Love Story",
    artist: "Indila",
  },
  {
    musicposter: "photo/one-piece.jpg",
    song: "songs/brook.mp3",
    name: "Bink sake",
    artist: "Brook",
  },
  // {
  //   musicposter: "photo/shape.jpg",
  //   song: "songs/Shape of You.mp3",
  //   name: "Shape of You",
  //   artist: "Ed Sheeran",
  // },
];
let run = document.querySelector(".run");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let flag = false;
let audio = document.querySelector(".play");
//
//
//

run.addEventListener("click", runMusic);
function runMusic(e) {
  if (!flag) {
    audio.play();
    run.classList.replace("fa-play", "fa-pause");
    flag = true;
  } else {
    audio.pause();
    run.classList.replace("fa-pause", "fa-play");
    flag = false;
  }
}
//
//
//
let heading = document.querySelector(".name");
let singer = document.querySelector(".artist");
let imageof = document.querySelector(".albumimg");
let source = document.querySelector(".playsource");
let countforward = 1;

//
//
//
const n = musicList.length;
next.addEventListener("click", nextMusic);
function nextMusic(e) {
  heading.innerText = musicList[countforward].name;
  singer.innerText = musicList[countforward].artist;
  imageof.src = musicList[countforward].musicposter;
  source.src = musicList[countforward].song;
  audio.load();
  audio.play();
  run.classList.replace("fa-play", "fa-pause");
  flag = true;
  countforward = countforward + 1;
  if (countforward == n) {
    countforward = 0;
  }
}
//
//
//
let countbackward = countforward;
prev.addEventListener("click", prevMusic);
function prevMusic(e) {
  countbackward = countbackward - 1;
  if (countbackward == -1) {
    countbackward = n - 1;
  }
  heading.innerText = musicList[countbackward].name;
  singer.innerText = musicList[countbackward].artist;
  imageof.src = musicList[countbackward].musicposter;
  source.src = musicList[countbackward].song;
  audio.load();
  audio.play();
  run.classList.replace("fa-play", "fa-pause");
  flag = true;
}
