import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
    const _name = 'Person';
    const _mockRemoveGreeting = jest.fn();

    const _component = shallow(
        <HelloWorld name={_name} removeGreeting={_mockRemoveGreeting} />
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorld name="Person" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('contains the supplied name', () => {
        expect(_component.text()).toContain(_name);
    });

    it('modifies the greeting when frenchify button is clicked', () => {
        _component.find('button.frenchify').simulate('click');
        expect(_component.text()).toContain('Bonjour');
    });
});