import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import InputAdornment from '@material-ui/core/InputAdornment';

import AttachMoney from '@material-ui/icons/AttachMoney';
import PlaceIcon from '@material-ui/icons/Place';
import StarRate from '@material-ui/icons/StarRate';

import FilterContext from '../FilterContext';

export default function FilterBar() {

  const filters = useContext(FilterContext);

  const handlePostcode = (e) => filters.setPostcode(e.target.value);
  const handleSubject = (e) => filters.setSubject(e.target.value);
  const handleRating = (e) => filters.setRating(e.target.value);
  const handleOnline = (e) => filters.setOnline(e.target.value);
  const handleMinPrice = (e) => filters.setMinPrice(e.target.value);
  const handleMaxPrice = (e) => filters.setMaxPrice(e.target.value);

  return (
    <div className="filter-bar">
      <FormGroup row>
        <TextField
          className="filter-item"
          label="Postcode"
          type="search"
          margin="none"
          value={filters.postcode}
          onChange={handlePostcode}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PlaceIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControl className="filter-item filter-subject">
          <InputLabel htmlFor="subject">Subject</InputLabel>
          <Select
            value={filters.subject}
            onChange={handleSubject}
            inputProps={{
              name: 'subject',
              id: 'subject',
            }}
          >
            {filters.subjects.map(subject => (
              <MenuItem key={subject.id} value={subject.slug}>{subject.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          className="filter-item"
          label="Min Price"
          type="number"
          margin="none"
          value={filters.minPrice}
          onChange={handleMinPrice}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoney />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="filter-item"
          label="Max Price"
          type="number"
          margin="none"
          value={filters.maxPrice}
          onChange={handleMaxPrice}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoney />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className="filter-item"
          label="Rating"
          type="number"
          margin="none"
          value={filters.rating}
          onChange={handleRating}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StarRate />
              </InputAdornment>
            ),
          }}
        />

        <FormControl className="filter-item">
          <InputLabel htmlFor="online">Online</InputLabel>
          <Select
            value={filters.online}
            onChange={handleOnline}
            inputProps={{
              name: 'online',
              id: 'online',
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>

        <Button
          className="filter-item"
          variant="contained"
          color="primary"
          onClick={filters.searchTutors}
        >
            Search
        </Button>
      </FormGroup>
    </div>
  )
}
