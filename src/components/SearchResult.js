import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TutorCard from './TutorCard';

export default function SearchResult({ data }) {

  const renderResult = () => {
    return (
      <Grid container spacing={3}>
        {data.results.map(item => (
          <Grid item xs={12} lg={3} md={4} key={item.id}>
            <TutorCard item={item} />
          </Grid>
        ))}
        <Grid item xs={12} className="search-pagination">
          {data.previous && <Button variant="outlined" color="primary" className="pagination-btn">Previous</Button>}
          {data.next && <Button variant="outlined" color="primary" className="pagination-btn">Next</Button>}
        </Grid>
      </Grid>
    );
  }

  return (
    <>
    {data && data.count && data.results
      ? renderResult()
      : <div>No Result</div>
    }
    </>
  );
}
