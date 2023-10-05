let threeDots = document.getElementById('dots');
let app_menu = document.querySelector('.app-menu');
threeDots.onclick = function() {
    app_menu.style.display = app_menu.style.display === 'block' ? 'none' : 'block'
}

let menu_items = document.querySelectorAll('.common');
let menu_items_contents = document.querySelectorAll('.item-details');

menu_items.forEach((item) => {
    item.addEventListener('mouseover', function(){
        if(item.classList.contains('file')){
            menu_items_contents.forEach((elem) => {
                if(elem.classList.contains('file-content')){
                    elem.style.display = 'block'
                }else{
                    elem.style.display = 'none'
                }
            })
        } else if(item.classList.contains('edit')){
            menu_items_contents.forEach((elem) => {
                if(elem.classList.contains('edit-content')){
                    elem.style.display = 'block'
                }else{
                    elem.style.display = 'none'
                }
            })
        }else if(item.classList.contains('view')){
            menu_items_contents.forEach((elem) => {
                if(elem.classList.contains('view-content')){
                    elem.style.display = 'block'
                }else{
                    elem.style.display = 'none'
                }
            })
        }else if(item.classList.contains('playback')){
            menu_items_contents.forEach((elem) => {
                if(elem.classList.contains('playback-content')){
                    elem.style.display = 'block'
                }else{
                    elem.style.display = 'none'
                }
            })
        }else if(item.classList.contains('help')){
            menu_items_contents.forEach((elem) => {
                if(elem.classList.contains('help-content')){
                    elem.style.display = 'block'
                }else{
                    elem.style.display = 'none'
                }
            })
        }
    })
})

window.addEventListener('click', function(){
    menu_items_contents.forEach((item) => {
        if(item.style.display === 'block'){
            item.style.display = 'none'
        }
    })
})


let sidebarSearch = document.querySelector('.sidebar-search');
sidebarSearch.onclick = function(){
    let searchBarContent = document.querySelector('.search-content');
    searchBarContent.style.display = searchBarContent.style.display === 'block' ? 'none' : 'block'
}

let songs = [
    'songs/chaleya.mp3', 
    'songs/ishqvaalalove.mp3', 
    'songs/kaanunnakalyanam.mp3', 
    'songs/karrukuchoopu.mp3', 
    'songs/kilimanjaaro.mp3', 
    'songs/malliraavaa.mp3', 
    'songs/pacchaelai.mp3', 
    'songs/vintunnaavaa.mp3', 
    'songs/weekend.mp3', 
    'songs/yaanji.mp3', 
]

let songImages = [
    'images/chaleya.jpg',
    'images/ishqvaalaalove.jpg',
    'images/kanunna.jpg',
    'images/karruku.jpg',
    'images/kilimanjaro.jpg',
    'images/malliraavaa.jpg',
    'images/pacchaelai.jpg',
    'images/vintunnavaa.jpg',
    'images/starboy.jpg',
    'images/yaanji.jpg'
]

let playPause = document.getElementById('cntrlIcon');
let song = document.getElementById('song');
let rangeInp = document.getElementById('rangeInp');
let currentIndex = 0

song.src = songs[currentIndex];

song.onloadedmetadata = function(){
    rangeInp.max = song.duration;
    rangeInp.value = song.currentTime;
}

function playAndPause(){
    if(playPause.classList.contains('fa-pause')){
        song.pause()
        playPause.classList.add('fa-play')
        playPause.classList.remove('fa-pause')
    }else{
        song.play()
        playPause.classList.add('fa-pause')
        playPause.classList.remove('fa-play')
    }
}

if(song.play()){
    setInterval(() => {
        rangeInp.value = song.currentTime
    }, 500)
}

rangeInp.onchange = function(){
    song.currentTime = rangeInp.value;
    playPause.classList.add('fa-pause')
    playPause.classList.remove('fa-play')
}

let songImage = document.getElementById('songImg');
songImage.src = songImages[currentIndex]

function nextSong(){
    currentIndex+=1
    song.src = songs[currentIndex]
    songImage.src = songImages[currentIndex]
    if(currentIndex >= songs.length) currentIndex = 0
    song.play()
    playPause.classList.add('fa-pause')
    playPause.classList.remove('fa-play')
    console.log(currentIndex)
}

function previousSong(){
    currentIndex-=1
    song.src = songs[currentIndex]
    songImage.src = songImages[currentIndex]
    if(currentIndex <= 0) currentIndex = songs.length-1
    song.play()
    playPause.classList.add('fa-pause')
    playPause.classList.remove('fa-play')
    console.log(currentIndex)
}
