const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const audio = document.getElementById("audio");
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const playlistButton = document.getElementById("playlist");
const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const playlistContainer = document.getElementById("playlist-container");
const closeButton = document.getElementById("close-button");
const playlistSongs = document.getElementById("playlist-songs");
const currentProgress = document.getElementById("current-progress");

//index for songs
let index;

//initially loop=true
let loop = true;

const songsList = [{
        name: "furaha yang",
        link: "songs/T-ross_-_furaha yangu_-_exclusive.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Sijachoka",
        link: "songs/T-ross_-_sijachoka prod by packy.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Kipofu",
        link: "songs/kipofu by T-ross mfalme.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Nikumbuke",
        link: "featchiring/T-ROSS_MFALME_NIKUMBUKE_OFFICIAL_AUDIO(256k).mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Haliyangu",
        link: "songs/t-ross mfalme - hali yangu by t-ross mfalme.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Nahmiya",
        link: "songs/NAHUMIYA_by_T-ROSS_MFALME_(Official_clip_Audio)(256k).mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Nimedata",
        link: "songs/nimedata by t-ross ft j-fire.mp3",
        artist: "T-ross",
        image: "need-you-now.jpg",
    }, {
        name: "You are specia",
        link: "songs/t ross-ft-prod kage white - specia.mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "Niweke wazi",
        link: "songs/NIWEKE_WAZI_BY_T_ROSS_MFALME(256k).mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "Only one",
        link: "songs/ONLY_ONE_by_t-ross_mfalme(256k).mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "RIP",
        link: "songs/R.I.P By T ross-1.mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "Ni wewe",
        link: "songs/NI_WEWE_BY_T-Ross_official_audio(256k).mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "Ba ba T",
        link: "songs/ross t baba t.mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "Take me care",
        link: "songs/take me care.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Bado na kupenda",
        link: "songs/T-Ross_Mfalme___Nakupenda_(Official_Video)_Directed_By_Pops(256k).mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "I am Sorry",
        link: "songs/T-ross_Mfalme_I'm_Sorry_(VIDEO_OFFICIAL_4K)director_Farcy(256k).mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "I miss you",
        link: "songs/T-ross_Mfalme_-_Miss_You_(Official_Video)(256k).mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "Umbrella",
        link: "songs/UMBRELLA by T-ross Mfalme (Official Audio).mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "Good Night",
        link: "songs/Good Night by T ross Mfalme.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Uongo",
        link: "songs/T-Ross Mfalme_-_Uongo.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Ego ego",
        link: "songs/Ego_By_T-Ross_(Official_audio)(256k).mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Doctor",
        link: "songs/docteur by t Ross .MP3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Inauma",
        link: "songs/Inauma_(Video_Lyrics)__by_T-ross_Mfalme(256k).mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Anything",
        link: "songs/Anything_T-ross.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Yeah Yeah",
        link: "songs/yeah yeah.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Poa",
        link: "songs/Poa By T ross Mfalme.mp3",
        artist: "T-ross",
        image: "",
    }, {
        name: "Moyo",
        link: "songs/moyo by T.ross.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Never give up covered",
        link: "songs/Never_give_up_by_Harmonize_,_covered_by_T-Ross_MFALME(256k).mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: "Yatapita covered",
        link: "songs/yatapita t ross.mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: " With You",
        link: "songs/t-ross ft yange.mp3",
        artist: "Young-Treez ft T-ross",
        image: "",
    },
    {
        name: "Aibu",
        link: "songs/K Classic ft T-ross Mfalme_-_AIBU.m4a",
        artist: "K-classic ft T-ross",
        image: "",
    },
    {
        name: "Maumivu",
        link: "songs/Rama key ft T- ross Mfalme.mp3",
        artist: "Rama-key ft T-ross",
        image: "",
    },
    {
        name: "Chomeka",
        link: "songs/chomeka by ralf x t ross mfalme-1.mp3",
        artist: "Ralf ft T-ross",
        image: "",
    },
    {
        name: "Honey",
        link: "songs/Stessy_da_Queen_-_Honey_ft_T-ross_Mfalme_(_Official_Music_Video_)(128kbps).mp3",
        artist: "st-da_Queen ft T-ross",
        image: "",
    },
    {
        name: "Achamaneno",
        link: "featchiring/Achamaneno_by_Kam_s_Wazama_ft_T.ross_Mfalme(256k).mp3",
        artist: "Kam-s-wazam ft T-ross",
        image: "",
    }, {
        name: "Akivaa",
        link: "featchiring/Akivaa__by_Ross_boy_Ft_T_Ross_Mfalme___Official_music_audio_(256k).mp3",
        artist: "Ross-boy ft T-ross ",
        image: "",
    },
    {
        name: "Amazing",
        link: "featchiring/AMAZING_BY_T-ROSS_MFALME(256k).mp3",
        artist: "T-ross",
        image: "",
    },
    {
        name: " Go low",
        link: "featchiring/Azmack_ba_nana_ft_t-ross_mfalme__by_GO_LOW(256k).mp3",
        artist: "Azmack ft T-ross",
        image: "",
    },
    {
        name: "Fire",
        link: "featchiring/Fire_By_Byser_Hunter_X_T_ross_Mfalme_Official_Music_Video_(256k).mp3",
        artist: "Hunter ft T-ross",
        image: "",
    }, {
        name: "Nisiongei",
        link: "featchiring/NISIONGEI_BY_CHOCOLATE_KALEX__FEAT_T-ROSS_MFALME__official_audio_(256k).mp3",
        artist: "Kalex ft T-ross",
        image: "",
    },
    {
        name: "Bangi",
        link: "featchiring/Ushindi_John_ft.T_Ross_Mfalme_-_BANGI___Official_Audio__(256k).mp3",
        artist: "John ft T-ross",
        image: "",
    },



];

//events object
let events = {
    mouse: {
        click: "click",
    },
    touch: {
        click: "touchstart",
    },
};

let deviceType = "";

//Detect touch device

const isTouchDevice = () => {
    try {
        //We try to create TouchEvent(it would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

//Format time (convert ms to seconds, minutes and add 0 id less than 10)
const timeFormatter = (timeInput) => {
    let minute = Math.floor(timeInput / 60);
    minute = minute < 10 ? "0" + minute : minute;
    let second = Math.floor(timeInput % 60);
    second = second < 10 ? "0" + second : second;
    return `${minute}:${second}`;
};

//set song
const setSong = (arrayIndex) => {
    //this extracts all the variables from the object
    let { name, link, artist, image } = songsList[arrayIndex];
    audio.src = link;
    songName.innerHTML = name;
    songArtist.innerHTML = artist;
    songImage.src = image;
    //display duration when metadata loads
    audio.onloadedmetadata = () => {
        maxDuration.innerText = timeFormatter(audio.duration);
    };
};

//play song
const playAudio = () => {
    audio.play();
    pauseButton.classList.remove("hide");
    playButton.classList.add("hide");
};

//repeat button
repeatButton.addEventListener("click", () => {
    if (repeatButton.classList.contains("active")) {
        repeatButton.classList.remove("active");
        audio.loop = false;
        console.log("repeat off");
    } else {
        repeatButton.classList.add("active");
        audio.loop = true;
        console.log("repeat on");
    }
});

//Next song
const nextSong = () => {
    //if loop is true then continue in normal order
    if (loop) {
        if (index == songsList.length - 1) {
            //If last song is being played
            index = 0;
        } else {
            index += 1;
        }
        setSong(index);

        playAudio();
    } else {
        //else find a random index and play that song
        let randIndex = Math.floor(Math.random() * songsList.length);
        console.log(randIndex);
        setSong(randIndex);
        playAudio();
    }
};

//pause song
const pauseAudio = () => {
    audio.pause();
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
};

//previous song ( you can't go back to a randomly played song)
const previousSong = () => {
    if (index > 0) {
        pauseAudio();
        index -= 1;
    } else {
        //if first song is being played
        index = songsList.length - 1;
    }
    setSong(index);
    playAudio();
};

//next song when current song ends
audio.onended = () => {
    nextSong();
};

//Shuffle songs
shuffleButton.addEventListener("click", () => {
    if (shuffleButton.classList.contains("active")) {
        shuffleButton.classList.remove("active");
        loop = true;
        console.log("shuffle off");
    } else {
        shuffleButton.classList.add("active");
        loop = false;
        console.log("shuffle on");
    }
});

//play button
playButton.addEventListener("click", playAudio);

//next button
nextButton.addEventListener("click", nextSong);

//pause button
pauseButton.addEventListener("click", pauseAudio);

//prev button
prevButton.addEventListener("click", previousSong);

//if user clicks on progress bar
isTouchDevice();
progressBar.addEventListener(events[deviceType].click, (event) => {
    //start of progressBar
    let coordStart = progressBar.getBoundingClientRect().left;
    //mouse click position
    let coordEnd = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
    let progress = (coordEnd - coordStart) / progressBar.offsetWidth;

    //set width to progress
    currentProgress.style.width = progress * 100 + "%";

    //set time
    audio.currentTime = progress * audio.duration;

    //play
    audio.play();
    pauseButton.classList.remove("hide");
    playButton.classList.add("hide");
});

//update progress every second
setInterval(() => {
    currentTimeRef.innerHTML = timeFormatter(audio.currentTime);
    currentProgress.style.width =
        (audio.currentTime / audio.duration.toFixed(3)) * 100 + "%";
});

//update time
audio.addEventListener("timeupdate", () => {
    currentTimeRef.innerText = timeFormatter(audio.currentTime);
});

//Creates playlist
const initializePlaylist = () => {
    for (let i in songsList) {
        playlistSongs.innerHTML += `<li class='playlistSong' onclick='setSong(${i})'>
            <div class="playlist-image-container">
                <img src="${songsList[i].image}"/>
            </div>
            <div class="playlist-song-details">
                <span id="playlist-song-name">
                    ${songsList[i].name}
                </span>
                <span id="playlist-song-artist-album">
                    ${songsList[i].artist}
                </span>
            </div>
        </li>`;
    }
};

//display playlist
playlistButton.addEventListener("click", () => {
    playlistContainer.classList.remove("hide");
});

//hide playlist
closeButton.addEventListener("click", () => {
    playlistContainer.classList.add("hide");
});

window.onload = () => {
    //initially first song
    index = 0;
    setSong(index);
    //create playlist
    initializePlaylist();
};

function openNav() {
    document.getElementById("mySidebar").style.width = "1000px";
    document.getElementById("main").style.marginLeft = "1000px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};