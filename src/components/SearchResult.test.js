import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchResult from './SearchResult';

it('Search Result renders correct number of results', () => {
  const data = {
    count: 2,
    results: [
      {
        id: 0,
        name: 'Ben Tutor',
        tagline: 'Best tutor ever',
        num_reviews: 33,
        rating: 77,
        experience: 'I taught everything about everything'
      },
      {
        id: 1,
        name: 'Ben Tutor2',
        tagline: 'Best tutor ever',
        num_reviews: 50,
        rating: 90,
        experience: 'I taught everything about everything'
      }
    ]
  };
  const wrapper = mount(<SearchResult data={data} />);
  expect(wrapper.find('.tutor-heading').hostNodes()).toHaveLength(2);
});

it('Search Result should show no result', () => {
  const data = {
    count: 0,
    results: []
  };
  const wrapper = shallow(<SearchResult data={data} />);
  expect(wrapper.html()).toContain('No Result');
});

it('Search Result shows next page button', () => {
  const data = {
    count: 100,
    results: [],
    next: 'link'
  };
  const wrapper = shallow(<SearchResult data={data} />);
  expect(wrapper.find('.pagination-btn').text()).toContain('Next');
});

it('Search Result shows previous button', () => {
  const data = {
    count: 100,
    results: [],
    previous: 'link'
  };
  const wrapper = shallow(<SearchResult data={data} />);
  expect(wrapper.find('.pagination-btn').text()).toContain('Previous');
});

