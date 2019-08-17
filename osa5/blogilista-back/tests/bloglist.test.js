const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})
describe('total likes', () => {
    const listWithOneBlog = [
      {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
      },
    ]
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })

    test('should return favorite blog', () => {
      const blogList = [  ...listWithOneBlog, 
        { title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        likes: 12 }]
      const result = listHelper.favoriteBlog(blogList)
      expect(result).toEqual(blogList[1])
    })
    
    test('should return author with most blogs', () => {
      const blogList = [  ...listWithOneBlog, 
        { title: "Canonical string reduction",
        author: "Jerry Hällfors",
        likes: 12 },
        { title: "Canonical string reduction",
        author: "Jerry Hällfors",
        likes: 12 },
      ]
      const result = listHelper.mostBlogs(blogList)
      expect(result).toEqual({author: "Jerry Hällfors", blogs: 2})
    })
    
    test('should return author with most likes', () => {
      const blogList = [  ...listWithOneBlog, 
        { title: "Canonical string reduction",
        author: "Jerry Hällfors",
        likes: 12 },
        { title: "Canonical string reduction",
        author: "Jerry Hällfors",
        likes: 12 },
      ]
      const result = listHelper.mostLikes(blogList)
      expect(result).toEqual({author: "Jerry Hällfors", likes: 12 + 12})
    })
  })