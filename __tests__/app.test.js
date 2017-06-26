import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/components/app'

test('Top Level App Component', () => {
  beforeEach(() => {
    const app = shallow(<App />)
  })

  it('Should have a div with className of app', () => {
    expect(app.find('.app').length).toEqual(1)
  })

  it('Should contain an h1 tag with text "My App"', () => {
    expect(app.contains(<h1>My App</h1>)).toBe(true)
  })
})
