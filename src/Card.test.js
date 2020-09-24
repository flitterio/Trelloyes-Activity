import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card Tests', () =>{

it('renders without crashing', ()=> {
    const div =document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the title as expected', () =>{
    const tree = renderer
    .create(<Card name = "Card" title = "title" />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders the content as expected', () =>{
    const tree = renderer
    .create(<Card name = "Card" content = "content" />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

});