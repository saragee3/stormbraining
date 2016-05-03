// import expect from 'expect'
// import React from 'react'
// import TestUtils from 'react-addons-test-utils'
// import Boards from '../../components/app.js';

// function setup() {
//   let props = {
//     addTodo: expect.createSpy()
//   }

//   let renderer = TestUtils.createRenderer()
//   renderer.render(<Boards {...props} />)
//   let output = renderer.getRenderOutput()

//   return {
//     props,
//     output,
//     renderer
//   }
// }

// describe('App', () => {
// Link = React.createClass({
//   render() {
//     return (<p>MOCK COMPONENT CLASS</p>)

//   }
// });
// Container.__Rewire__('Link', Link);

// Link = React.createClass({
//   render() {
//     return (<p>MOCK COMPONENT CLASS</p>)

//   }
// });
// Container.__Rewire__('Link', Link);
//     it('should render correctly', () => {
//       const { output } = setup()

//       expect(output.type).toBe('header')
//       expect(output.props.className).toBe('header')

//       let [ h1, input ] = output.props.children

//       expect(h1.type).toBe('h1')
//       expect(h1.props.children).toBe('todos')

//       expect(input.type).toBe(TodoTextInput)
//       expect(input.props.newTodo).toBe(true)
//       expect(input.props.placeholder).toBe('What needs to be done?')
//     })

//     it('should call addTodo if length of text is greater than 0', () => {
//       const { output, props } = setup()
//       let input = output.props.children[1]
//       input.props.onSave('')
//       expect(props.addTodo.calls.length).toBe(0)
//       input.props.onSave('Use Redux')
//       expect(props.addTodo.calls.length).toBe(1)
//     })
// })
