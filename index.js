const postList = document.getElementById('posts');
document.addEventListener('DOMContentLoaded', init);
function init() {
    getPosts
        .then(posts => displayPosts(posts))
        .catch((e) => {
        console.error(e);
        alert('Something went wrong. Check console for details.');
    });
}
const getPosts = new Promise((resolve, reject) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => resolve(posts));
    }
    catch (e) {
        reject(e);
    }
});
function displayPosts(posts) {
    posts.forEach(post => {
        const element = document.createElement('div');
        element.classList.add('post', `post-${post.id}`);
        element.innerHTML = `<h2>User ID: ${post.userId}</h2><h3>${post.title}</h3><p>${post.body}</p>`;
        postList.appendChild(element);
    });
}
