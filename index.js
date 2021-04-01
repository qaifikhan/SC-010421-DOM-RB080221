var playlist = [
    {
      "id": "1",
      "title": "Croissants | Flour and Stone",
      "thumbnail": "https://i.vimeocdn.com/video/600595198_390x220.webp"
    },
    {
      "id": "2",
      "title": "Perfect Mashed Potatoes and Gravy",
      "thumbnail": "https://i.vimeocdn.com/video/604150056_390x220.webp"
    },
    {
      "id": "3",
      "title": "The Heart of Soba",
      "thumbnail": "https://i.vimeocdn.com/video/726986673_390x220.webp"
    },
    {
      "id": "4",
      "title": "Grilled Cheese 9 Ways",
      "thumbnail": "https://i.vimeocdn.com/video/570486309_390x220.webp"
    },
    {
      "id": "5",
      "title": "Pineapple Cheesecake",
      "thumbnail": "https://i.vimeocdn.com/video/602705517_390x220.webp"
    },
    {
      "id": "6",
      "title": "Lemony Chicken Noodle Soup",
      "thumbnail": "https://i.vimeocdn.com/video/537261616_390x220.jpg"
    },
    {
      "id": "7",
      "title": "Pumpkin Roll",
      "thumbnail": "https://i.vimeocdn.com/video/608805594_590x332.jpg"
    },
    {
      "id": "8",
      "title": "How to Brine a Turkey",
      "thumbnail": "https://i.vimeocdn.com/video/601730519_590x332.jpg"
    },
    {
      "id": "9",
      "title": "Stop Motion Dry-Brined Turkey Recipe",
      "thumbnail": "https://i.vimeocdn.com/video/456852083_590x332.jpg"
    },
    {
      "id": "10",
      "title": "Butternut Squash Ravioli",
      "thumbnail": "https://i.vimeocdn.com/video/600328152_590x332.jpg"
    }
]


{/* 
    <div class="video-card">
        <img class="thumbnail" src="https://i.vimeocdn.com/video/600328152_590x332.jpg" alt="Video Thumbnail"  />
        <h3 class="video-title">Ravioli</h3>
    </div> 
*/}

function renderVideoCard(thumbnailUrl, videoTitle) {
    var mainGrid = document.getElementById('video-grid');

    var mainCard = document.createElement('div');
    mainCard.className = "video-card";

    var thumbnail = document.createElement('img');
    thumbnail.className = "thumbnail";
    thumbnail.src = thumbnailUrl
    thumbnail.alt = "Video Thumbnail"
    mainCard.appendChild(thumbnail);

    var title = document.createElement("h3");
    title.className = "video-title"
    title.innerHTML = videoTitle;
    mainCard.appendChild(title);

    mainGrid.appendChild(mainCard);
}


for (var pos=0; pos < playlist.length; pos++) {
    renderVideoCard(playlist[pos].thumbnail, playlist[pos].title);
}

// var btnCounter = document.getElementById('btn-counter');

// btnCounter.onclick = function() {
//     console.log("Clicked One!!")
// }

// btnCounter.onclick = function() {
//     console.log("Clicked Two!!");
// }

// btnCounter.addEventListener("click", function() {
//     console.log('Clicked Three!!')
// });

// btnCounter.addEventListener("click", function() {
//     console.log('Clicked Four!!')
// });


document.addEventListener('keydown', function(eventObj) {
    console.log("Keyboard Key " + eventObj.key + " Down!")
})

// document.addEventListener('keyup', function() {
//     console.log("Keyboard Key Up!")
// })


// document.addEventListener('keypress', function() {
//     console.log("Keyboard Key Pressed!")
// })