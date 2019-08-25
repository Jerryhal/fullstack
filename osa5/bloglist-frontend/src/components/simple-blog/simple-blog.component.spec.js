import React from 'react'
import { render, fireEvent, cleanup  } from '@testing-library/react'
import SimpleBlog from './simple-blog.component'
import '@testing-library/jest-dom/extend-expect'

describe('<SimpleBlog />', () => {
    let component
    const mockHandler = jest.fn()
    const blog = {
        title: 'title T',
        author: 'author A',
        likes: 1,
    }
    beforeEach(() => {
        component = render(
            <SimpleBlog blog={blog} onClick={mockHandler}>
            </SimpleBlog>
        )
    })
    afterEach(cleanup)

    test('renders component data correctly', () => {
        const blogHeader = component.container.querySelector('.blog-header')
        expect(blogHeader).toHaveTextContent(`${blog.title} ${blog.author}`)

        const blogLikes = component.container.querySelector('.blog-likes')
        expect(blogLikes).toHaveTextContent(`blog has ${blog.likes} likes`)

    })

    test('like button works correctly', () => {
        const button = component.container.querySelector('.blog-likes button')
        fireEvent.click(button)
        fireEvent.click(button)

        expect(mockHandler.mock.calls.length).toBe(2)

    })
})