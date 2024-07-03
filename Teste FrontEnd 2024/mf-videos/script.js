const videoList = document.getElementById('video-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${searchTerm}&key=YOUR_YOUTUBE_API_KEY`)
            .then(response => response.json())
            .then(data => {
                const videos = data.items;
                videoList.innerHTML = '';
                videos.forEach((video) => {
                    const videoThumbnail = document.createElement('img');
                    videoThumbnail.src = video.snippet.thumbnails.default.url;
                    videoThumbnail.alt = video.snippet.title;
                    const videoTitle = document.createElement('h2');
                    videoTitle.textContent = video.snippet.title;
                    const videoDescription = document.createElement('p');
                    videoDescription.textContent = video.snippet.description;
                    const favoriteBtn = document.createElement('button');
                    favoriteBtn.textContent = ' ';
                    favoriteBtn.addEventListener('click', () => {
                        // Add/remove favorite logic here
                    });
                    const videoListItem = document.createElement('li');
                    videoListItem.appendChild(videoThumbnail);
                    videoListItem.appendChild(videoTitle);
                    videoListItem.appendChild(videoDescription);
                    videoListItem.appendChild(favoriteBtn);
                    videoList.appendChild(videoListItem);
                });
            });
    }
});