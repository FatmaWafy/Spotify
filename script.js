let allMusic = [
  {
    name: "سورة النبأ",
    artist: "Islam Sobhi",
    src: "audio1",
  },
  {
    name: "سورة النازعات",
    artist: "Islam Sobhi",
    src: "audio2",
  },
  {
    name: "سورة عبس",
    artist: "Islam Sobhi",
    src: "audio3",
  },
  {
    name: "سورة التكوير",
    artist: "Islam Sobhi",
    src: "audio4",
  },
  {
    name: "سورة الإنفطار",
    artist: "Islam Sobhi",
    src: "audio5",
  },
  {
    name: "سورة المطففين",
    artist: "Islam Sobhi",
    src: "audio6",
  },
  {
    name: "سورة الإنشقاق",
    artist: "Islam Sobhi",
    src: "audio7",
  },
  {
    name: "سورة البروج",
    artist: "Islam Sobhi",
    src: "audio8",
  },
  {
    name: "سورة الطارق",
    artist: "Islam Sobhi",
    src: "audio9",
  },
  {
    name: "سورة الأعلي",
    artist: "Islam Sobhi",
    src: "audio10",
  },
  {
    name: "سورة الغاشية",
    artist: "Islam Sobhi",
    src: "audio11",
  },
  {
    name: "سورة الفجر",
    artist: "Islam Sobhi",
    src: "audio12",
  },
  {
    name: "سورة البلد",
    artist: "Islam Sobhi",
    src: "audio13",
  },
  {
    name: "سورة الشمس",
    artist: "Islam Sobhi",
    src: "audio14",
  },
  {
    name: "سورة الليل",
    artist: "Islam Sobhi",
    src: "audio15",
  },
  {
    name: "سورة الضحي",
    artist: "Islam Sobhi",
    src: "audio16",
  },
  {
    name: "سورة الشرح",
    artist: "Islam Sobhi",
    src: "audio17",
  },
  {
    name: "سورة التين",
    artist: "Islam Sobhi",
    src: "audio18",
  },
  {
    name: "سورة العلق",
    artist: "Islam Sobhi",

    src: "audio19",
  },
  {
    name: "سورة القدر",
    artist: "Islam Sobhi",
    src: "audio20",
  },
  {
    name: "سورة البينة",
    artist: "Islam Sobhi",
    src: "audio21",
  },
  {
    name: "سورة الزلزلة",
    artist: "Islam Sobhi",
    src: "audio22",
  },
  {
    name: "سورة العاديات",
    artist: "Islam Sobhi",
    src: "audio23",
  },
  {
    name: "سورة القارعة",
    artist: "Islam Sobhi",
    src: "audio24",
  },
  {
    name: "سورة التكاثر",
    artist: "Islam Sobhi",
    src: "audio25",
  },
  {
    name: "سورة العصر",
    artist: "Islam Sobhi",
    src: "audio26",
  },
  {
    name: "سورة الهمزة",
    artist: "Islam Sobhi",
    src: "audio27",
  },
  {
    name: "سورة الفيل",
    artist: "Islam Sobhi",
    src: "audio28",
  },
  {
    name: "سورة قريش",
    artist: "Islam Sobhi",
    src: "audio29",
  },
  {
    name: "سورة الماعون",
    artist: "Islam Sobhi",
    src: "audio30",
  },
  {
    name: "سورة الكوثر",
    artist: "Islam Sobhi",
    src: "audio31",
  },
  {
    name: "سورة الكافرون",
    artist: "Islam Sobhi",
    src: "audio32",
  },
  {
    name: "سورة النصر",
    artist: "Islam Sobhi",
    src: "audio33",
  },
  {
    name: "سورة المسد",
    artist: "Islam Sobhi",
    src: "audio34",
  },
  {
    name: "سورة الاخلاص",
    artist: "Islam Sobhi",
    src: "audio35",
  },
  {
    name: "سورة الفلق",
    artist: "Islam Sobhi",
    src: "audio36",
  },
  {
    name: "سورة الناس",
    artist: "Islam Sobhi",
    src: "audio37",
  },
];

let wrapper = document.querySelector(".wrapper");
let AudioName = wrapper.querySelector(".name");
let ArtistName = wrapper.querySelector(".artist");
let MainAudio = wrapper.querySelector("#main-audio");
let PlayPauseBtns = wrapper.querySelectorAll(".play-pause");
let PrevBtn = wrapper.querySelector("#prev");
let NextBtn = wrapper.querySelector("#next");
let AudioCurrentTime = wrapper.querySelector(".current-time");
let AudioDuration = wrapper.querySelector(".max-duration");
let ProgressBar = wrapper.querySelector(".progress-bar");
let ProgressArea = wrapper.querySelector(".progress-area");
let RepeatBtn = wrapper.querySelector("#repeat");
let MoreMusicBtn = wrapper.querySelector("#more-music");
let MusicList = wrapper.querySelector(".music-list");
let BackBtn = wrapper.querySelector("#BackBtn");
let UlAudios = wrapper.querySelector("ul");
let FavIcons = wrapper.querySelectorAll(".FavIcon");
let isDragging = false;

let Index = Math.floor(Math.random() * allMusic.length + 1);

window.addEventListener("load", () => {
  LoadAudio(Index);
  playingAudio();
});

function LoadAudio(index) {
  AudioName.innerHTML = allMusic[index - 1].name;
  ArtistName.innerHTML = allMusic[index - 1].artist;
  MainAudio.src = `./songs/${allMusic[index - 1].src}.mp3`;
}

function PlayAudio() {
  wrapper.classList.add("paused");
  PlayPauseBtns.forEach((btn) => {
    btn.querySelector("i").classList = "fa-solid fa-pause";
  });
  MainAudio.play();
}

function PauseAudio() {
  wrapper.classList.remove("paused");
  PlayPauseBtns.forEach((btn) => {
    btn.querySelector("i").classList = "fa-solid fa-play";
  });
  MainAudio.pause();
}

PlayPauseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let IsAudioPlay = wrapper.classList.contains("paused");
    IsAudioPlay ? PauseAudio() : PlayAudio();
    playingAudio();
  });
});

function PrevAudio() {
  Index--;
  Index < 1 ? (Index = allMusic.length) : (Index = Index);
  LoadAudio(Index);
  PlayAudio();
  playingAudio();
}

PrevBtn.addEventListener("click", () => {
  PrevAudio();
});

function NextAudio() {
  Index++;
  Index > allMusic.length ? (Index = 1) : (Index = Index);
  LoadAudio(Index);
  PlayAudio();
  playingAudio();
}

NextBtn.addEventListener("click", () => {
  PrevAudio();
});

MainAudio.addEventListener("timeupdate", (e) => {
  let CurrentTime = e.target.currentTime;
  let Duration = e.target.duration;
  let ProgressWidth = (CurrentTime / Duration) * 100;
  ProgressBar.style.width = `${ProgressWidth}%`;

  MainAudio.addEventListener("loadeddata", () => {
    let MainAudioDuration = MainAudio.duration;

    let TotalMin = Math.floor(MainAudioDuration / 60);
    let TotalSec = Math.floor(MainAudioDuration % 60);
    if (TotalSec < 10) {
      TotalSec = `0${TotalSec}`;
    }
    AudioDuration.innerHTML = `${TotalMin}:${TotalSec}`;
  });

  let CurrentMin = Math.floor(CurrentTime / 60);
  let CurrentSec = Math.floor(CurrentTime % 60);
  if (CurrentSec < 10) {
    CurrentSec = `0${CurrentSec}`;
  }
  AudioCurrentTime.innerHTML = `${CurrentMin}:${CurrentSec}`;
});

function updateProgressBar(e) {
  if (isDragging) {
    let ProgressWidth = ProgressArea.clientWidth;
    let ClickedOffSetX = e.offsetX;
    let MainAudioDuration = MainAudio.duration;

    MainAudio.currentTime =
      (ClickedOffSetX / ProgressWidth) * MainAudioDuration;
  }
}

ProgressArea.addEventListener("mousedown", (e) => {
  isDragging = true;
  updateProgressBar(e);
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    MainAudio.pause();
    updateProgressBar(e);
  }
});

document.addEventListener("mouseup", (e) => {
  if (isDragging) {
    isDragging = false;
    PlayAudio();
    playingAudio();
  }
});

RepeatBtn.addEventListener("click", () => {
  let GetText = RepeatBtn.className;
  switch (GetText) {
    case "fa-solid fa-repeat":
      RepeatBtn.classList = "fa-solid fa-repeat repeat_one";
      RepeatBtn.setAttribute("title", "Song looped");
      break;
    case "fa-solid fa-repeat repeat_one":
      RepeatBtn.classList = "fa-solid fa-shuffle";
      RepeatBtn.setAttribute("title", "Playback shuffled");
      break;
    case "fa-solid fa-shuffle":
      RepeatBtn.classList = "fa-solid fa-repeat";
      RepeatBtn.setAttribute("title", "Playlist looped");
      break;
  }
});

MainAudio.addEventListener("ended", () => {
  let GetText = RepeatBtn.className;
  switch (GetText) {
    case "fa-solid fa-repeat":
      NextAudio();
      break;
    case "fa-solid fa-repeat repeat_one":
      MainAudio.currentTime = 0;
      LoadAudio(Index);
      PlayAudio();
      break;
    case "fa-solid fa-shuffle":
      let RandomIndex = Math.floor(Math.random() * allMusic.length + 1);
      do {
        RandomIndex = Math.floor(Math.random() * allMusic.length + 1);
      } while (Index == RandomIndex);
      Index = RandomIndex;
      LoadAudio(Index);
      PLayAudio();
      playingAudio();
  }
});

MoreMusicBtn.addEventListener("click", () => {
  MusicList.classList.toggle("show");
});

BackBtn.addEventListener("click", () => {
  MoreMusicBtn.click();
});

for (let i = 0; i < allMusic.length; i++) {
  let LiAudio = `<li li-index="${i + 1}">
                        <div class="row">
                          <span>${allMusic[i].name}</span>
                          <p>${allMusic[i].artist}</p>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                        <audio class="${allMusic[i].src}" src="songs/${
    allMusic[i].src
  }.mp3" ></audio>
                    </li>`;
  UlAudios.insertAdjacentHTML("beforeend", LiAudio);
}

function playingAudio() {
  let allLisAudios = UlAudios.querySelectorAll("li");

  for (let i = 0; i < allLisAudios.length; i++) {
    if (allLisAudios[i].classList.contains("playing")) {
      allLisAudios[i].classList.remove("playing");
    }

    if (allLisAudios[i].getAttribute("li-index") == Index) {
      allLisAudios[i].classList.add("playing");
    }

    allLisAudios[i].setAttribute("onclick", "clicked(this)");
  }
}

function clicked(element) {
  let getLiIndex = element.getAttribute("li-index");
  Index = getLiIndex;
  LoadAudio(Index);
  PlayAudio();
  playingAudio();
}

function AddToFavorites() {
  FavIcons.forEach((icon) => {
    if (icon.classList.contains("fa-regular")) {
      icon.classList = "fa-solid fa-heart FavIcon";
      icon.classList.add("favorite");
    } else {
      icon.classList = "fa-regular fa-heart FavIcon";
      icon.classList.remove("favorite");
    }
  });
}

FavIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    AddToFavorites();
  });
});
