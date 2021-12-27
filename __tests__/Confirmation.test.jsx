import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import Confirmation from "../src/components/Confirmation";
import Notification from "../src/components/Notification";

describe('Confirmation', () => {
  it('should render a message prop to markup', () => {
    const conf = mount(
      <Confirmation message='Is the pie a lie?' />
    );
    expect(conf.html()).toContain('Is the pie a lie?');
  });
  
  it('should be a composite component', () => {
    const conf = mount(<Confirmation message='3.14' />);
    expect(conf.type()).toBeInstanceOf(Function);
  });
  
  it('should implement the accept button', () => {
    let called = false;
    const conf = mount(
      <Confirmation 
        message='Accept the pie'
        accept={() => called = true}
      />
    );
    const btn = conf.find('.btn.btn-primary');
    expect(btn.exists()).toBe(true);
    btn.simulate('click');
    expect(called).toEqual(true);
  });
  
  it('should implement the decline button', () => {
    let called = false;
    const conf = mount(
      <Confirmation 
        message='Decline the pie?'
        decline={() => called = true}
      />
    );
    const btn = conf.find('.btn.btn-danger');
    expect(btn.exists()).toBe(true);
    btn.simulate('click');
    expect(called).toEqual(true);
  });
  
  it('should not render the confirmation after accepting', () => {
    const conf = mount(
      <Confirmation message='Acceptable' accept={() => null} />
    );
    const btn = conf.find('.btn.btn-primary');
    expect(btn.exists()).toBe(true);
    btn.simulate('click');
    expect(conf.isEmptyRender()).toEqual(true);
  });
  
  it('should not render the confirmation after declining', () => {
    const conf = mount(
      <Confirmation message='Declined' decline={() => null} />
    );
    const btn = conf.find('.btn.btn-danger');
    expect(btn.exists()).toBe(true);
    btn.simulate('click');
    expect(conf.isEmptyRender()).toEqual(true);
  });
});