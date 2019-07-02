import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarRate from '@material-ui/icons/StarRate';
import RateReview from '@material-ui/icons/RateReview';
import Typography from '@material-ui/core/Typography';

export default function TutorCard({ item }) {

  const [expanded, setExpanded] = React.useState(false);
  const imgDefault = 'https://s3.eu-west-2.amazonaws.com/build.suggestv.io/assets/blank_user.png';
  const strMaxLength = 350;

  const handleExpand = () => {
    setExpanded(!expanded);
  }

  // truncate to the last word
  const truncate = (str) => {

    if (str.length > strMaxLength) {
      const trimmed =  str.substr(0, strMaxLength);
      return trimmed.substr(0, trimmed.lastIndexOf(' ')) + '...';
    }
    return str;
  }

  return (
    <Card>
      <CardHeader
        className="tutor-heading"
        title={item.name}
        subheader={item.tagline}
      />

      <CardMedia
        className="tutor-photo"
        image={item.photo_card || imgDefault}
        title={item.name}
      />

      <CardContent className={clsx('tutor-experience', { expanded })}>
        {!expanded && <p>{truncate(item.experience)}</p>}
        <Collapse in={expanded} timeout={100} unmountOnExit>
          {item.experience}
        </Collapse>
      </CardContent>

      <CardActions disableSpacing className="tutor-icons">
        <IconButton>
          <a
            href={`https://www.tutorhouse.co.uk/tutors/profile/${item.slug}`}
            target="_blank"
            rel="noopener noreferrer">
              <LaunchIcon></LaunchIcon>
          </a>
        </IconButton>
        <IconButton>
          <RateReview color="secondary" />
          <Typography>{item.num_reviews || 0}</Typography>
        </IconButton>
        <IconButton>
          <StarRate color="secondary" />
          <Typography>{item.rating || 0}</Typography>
        </IconButton>
        <IconButton
          onClick={handleExpand}
          aria-label="Show more"
          className={clsx('tutor-expand', { expanded })}
        >
          <ExpandMoreIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

