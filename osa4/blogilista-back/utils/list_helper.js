const dummy = (blogs) => {
    return 1
}
const totalLikes = (blogs) => {
    const reducer = (a, e) => a + e.likes
    return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    let fave
    if (blogs.length > 0) {
        fave = blogs[0]; 
        blogs.forEach(blog => {
            if (blog.likes > fave.likes) {
                fave = blog;
            }
        })
    } 
    return fave;
}   

const mostBlogs = (blogs) => {
    let authors = [];
    let favoriteAuthor = { author: '', blogs: 0 };
    blogs.forEach((blog) => {
        if (!authors[blog.author]) {
            authors[blog.author] = { author: blog.author, blogs: 0 }
        }
        authors[blog.author].blogs += 1
        if (favoriteAuthor.blogs < authors[blog.author].blogs) {
            favoriteAuthor = authors[blog.author];
        }
    })
    return favoriteAuthor;
}

const mostLikes = (blogs) => {
    let authors = [];
    let favoriteAuthor = { author: '', likes: 0 };
    blogs.forEach((blog) => {
        if (!authors[blog.author]) {
            authors[blog.author] = { author: blog.author, likes: 0 }
        }
        authors[blog.author].likes += blog.likes
        if (favoriteAuthor.likes < authors[blog.author].likes) {
            favoriteAuthor = authors[blog.author];
        }
    })
    return favoriteAuthor;
}

module.exports = {
    totalLikes,
    dummy,
    favoriteBlog,
    mostBlogs,
    mostLikes
}   