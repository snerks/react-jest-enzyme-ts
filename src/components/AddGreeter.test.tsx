import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import AddGreeter from './AddGreeter';

describe('AddGreeter', () => {
    const mockAddGreeting = jest.fn();
    const _component = shallow(
        <AddGreeter addGreeting={mockAddGreeting} />
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            // tslint:disable-next-line:no-empty
            <AddGreeter addGreeting={() => { }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('contains the form', () => {
        expect(_component.find('input')).toHaveLength(1);
        expect(_component.find('button')).toHaveLength(1);
    });

    it('calls the passed in addGreeting function when add button is clicked', () => {
        _component.find('button').simulate('click');
        expect(mockAddGreeting).toBeCalled();
    });

    it('updates the form when keys are pressed', () => {
        const updateKey = 'foo';
        (_component.instance() as AddGreeter).handleUpdate({
            target: {
                value: updateKey
            }
        });

        expect(_component.state('greetingName')).toEqual(updateKey);
    });

    it('blanks out the greetingName when the button is clicked', () => {
        const updateKey = 'a';

        (_component.instance() as AddGreeter).handleUpdate({ target: { value: updateKey } });
        expect(_component.state('greetingName')).toEqual(updateKey);

        _component.find('button').simulate('click');
        expect(_component.state('greetingName')).toHaveLength(0);
    });

});