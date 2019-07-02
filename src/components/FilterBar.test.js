import React from 'react';
import { mount } from 'enzyme';
import { FilterProvider } from '../FilterContext';
import FilterBar from './FilterBar';

it('FilterBar renders without crashing', () => {
  const context = {
    rating: '',
    minPrice: '',
    maxPrice: '',
    postcode: '',
    subject: '',
    online: '',
    subjects: []
  };
  const wrapper = mount(
    <FilterProvider value={context}>
      <FilterBar />
    </FilterProvider>
  );
});

it('FilterBar renders subject lazy loaded', () => {
  const context = {
    rating: '',
    minPrice: '',
    maxPrice: '',
    postcode: '',
    subject: '',
    online: '',
    subjects: [{ id: 0, name: 'English', slug: 'english'}]
  };
  const wrapper = mount(
    <FilterProvider value={context}>
      <FilterBar />
    </FilterProvider>
  );
  const select = wrapper.find('#select-subject');
  expect(wrapper.find('li')).toHaveLength(0);

  select.simulate('click');
  const item = wrapper.find('li');
  expect(item).toHaveLength(1);
  expect(item.html()).toContain('English')
});
