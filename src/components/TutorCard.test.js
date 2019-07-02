import React from 'react';
import { mount } from 'enzyme';
import TutorCard from './TutorCard';

it('Tutor Card renders with all the information', () => {
  const item = {
    name: 'Ben Tutor',
    tagline: 'Best tutor ever',
    num_reviews: 33,
    rating: 77,
    experience: 'I taught everything about everything'
  };
  const wrapper = mount(<TutorCard item={item} />);

  expect(wrapper.html()).toContain(item.name);
  expect(wrapper.html()).toContain(item.tagline);
  expect(wrapper.html()).toContain(item.num_reviews);
  expect(wrapper.html()).toContain(item.rating);
  expect(wrapper.html()).toContain(item.experience);
});

it('Tutor Card renders truncated experience', () => {
  const item = {
    name: 'Ben Tutor',
    tagline: 'Best tutor ever',
    num_reviews: 33,
    rating: 77,
    experience: `I taught everything about everything.
    This is a very long text which will repeat itself or the sake of testing.
    This is a very long text which will repeat itself or the sake of testing.
    This is a very long text which will repeat itself or the sake of testing.
    This is a very long text which will repeat itself or the sake of testing.
    This is a very long text which will repeat itself or the sake of testing.
    This is a very long text which will repeat itself or the sake of testing.
    This is a very long text which will repeat itself or the sake of testing.
    This is a very long text which will repeat itself or the sake of testing.
    `
  };
  const wrapper = mount(<TutorCard item={item} />);
  const experience = wrapper.find('div.tutor-experience');
  expect(experience.text()).toContain('sake of...');
});
