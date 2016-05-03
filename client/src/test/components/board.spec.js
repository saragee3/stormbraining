// import expect from 'expect'
// import React from 'react'
// import TestUtils from 'react-addons-test-utils'
// import Boards from '../../components/boards.js';

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

// describe('boards', () => {
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


// import expect from 'expect';
// import React from 'react';
// import { renderShallow } from '../test_helpers.js';
// import Boards from '../../components/boards.js';

// describe('../../components/boards.js', () => {

//   beforeEach(() => {
    


//     it('works', () => {
//       expect(1).to.eql(1);
//     });


//   });

// })











// import React from 'react';
// import { expect } from 'chai';
// import { shallow, mount, render } from 'enzyme';

// describe("A suite", function() {
//   it("contains spec with an expectation", function() {
//     expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
//   });

//   it("contains spec with an expectation", function() {
//     expect(shallow(<Foo />).is('.foo')).to.equal(true);
//   });

//   it("contains spec with an expectation", function() {
//     expect(mount(<Foo />).find('.foo').length).to.equal(1);
//   });
// });