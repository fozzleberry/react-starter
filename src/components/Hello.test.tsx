import * as React from 'react';
import * as enzyme from 'enzyme';
import { Hello } from './hello';

it('renders the correct text when no enthusiasm level is given', () => {
    const helloComponent = enzyme.shallow(<Hello name={'Daniel'} />);
    expect(helloComponent.find(".greeting").text()).toEqual('Hello Daniel!')
});