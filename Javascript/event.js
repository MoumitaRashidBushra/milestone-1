document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');

    let likes = 0;

    likeButton.addEventListener('click', function () {
        likes++;
        likeCount.textContent = likes === 1 ? '1 Like' : `${likes} Likes`;
    });
});
