const submitBtn = document.querySelector('#submit');
const modeBtn = document.querySelector('#mode');
const contentInput = document.querySelector('#content');
const titleInput = document.querySelector('#title');
const userNameInput = document.querySelector('#username');
const postsEl = document.querySelector('#posts');
const htmlEl = document.querySelector('html');

const setTheme = function () {
    htmlEl.dataset.theme = localStorage.getItem('theme');
}

const renderPosts = function () {

    const data = localStorage.getItem('posts');


    const posts = JSON.parse(data) || [];

    for (let post of posts) {
        const headerEl = document.createElement('header');
        const blogPostEl = document.createElement('article');
        const pEl = document.createElement('p');
        const footerEl = document.createElement('footer');

        headerEl.textContent = post.title;
        pEl.textContent = post.content;
        footerEl.textContent = post.username;

        blogPostEl.appendChild(headerEl);
        blogPostEl.appendChild(pEl);
        blogPostEl.appendChild(footerEl);
        postsEl.prepend(blogPostEl);
    }
}

const toggleTheme = function () {
    if (htmlEl.dataset.theme === 'dark') {
        htmlEl.dataset.theme = 'light';
    } else {
        htmlEl.dataset.theme = 'dark';
    }
    localStorage.setItem('theme', htmlEl.dataset.theme);
}

const handleSubmit = function (event) {
    event.preventDefault();

    const data = localStorage.getItem('posts');


    const posts = JSON.parse(data) || [];


    const content = contentInput.value.trim();
    const title = titleInput.value.trim();
    const username = userNameInput.value.trim();


    const post = {
        content: content,
        title: title,
        username: username,
    };


    posts.push(post);

    const serializedData = JSON.stringify(posts);

    localStorage.setItem('posts', serializedData);

    setTimeout(function () {
        location.assign('./blog.html');
    }, 250);
};


if (submitBtn) submitBtn.addEventListener('click', handleSubmit);

if (modeBtn) modeBtn.addEventListener('click', toggleTheme);

if (postsEl) renderPosts();

setTheme();

