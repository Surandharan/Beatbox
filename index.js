let songIndex=0;
let audioElement= new Audio("songs/1.mp3");
let ProgressBar=document.getElementById("myProgressBar");
let masterplay=document.getElementById("masterPlay");
let playingGif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName:"It's Always Blue - Legion", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Trap - Cartel", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"They Mad - Lowkey Pesci", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"The Rich Kid - Plug Walk", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"I Hate you , I Love you", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"The Safety Dance", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Back it up", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Love me like you do", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Changes - XXX Tentacion", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Can we kiss forever - Kina", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
})
if(masterplay){
masterplay.addEventListener("click",()=>
{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        playingGif.style.opacity=1;
        MakeAllPlays();
    }
    else if(audioElement.played||audioElement.currentTime>0){
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        playingGif.style.opacity=0;
    }
})
}

/*if(playingGif){
    masterplay.addEventListener("click",()=>
{
    if(audioElement.paused||audioElement.currentTime<=0){
        playingGif.style.opacity=1;
    }
    else if(audioElement.played||audioElement.currentTime>0){
        playingGif.style.opacity=0;
    }
})
}*/

if(ProgressBar){
audioElement.addEventListener("timeupdate",()=>
{
    console.log("time update");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    ProgressBar.value=progress;
})}

ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=ProgressBar.value*audioElement.duration/100;
})

const MakeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-cirlce");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach(element=>{
    element.addEventListener('click',(e)=>{
        MakeAllPlays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src="songs/3.mp3";
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    })
})