// import { CardContent } from "@material-ui/core"
// import { makeStyles } from "@material-ui/core/styles"
// import React from "react"

// const useStyles = makeStyles({
//     userCard: {
//         marginLeft: "5px",
//         marginRight: "5px",
//         backgroundColor: "#232b2b",
//         textAlign: "center",
//         color: "white",
//         borderRadius: "25%"
//     },
//     cardMedia: {
//         borderRadius: '50%',
//         margin: '28px'
//     }
// })

// const UsersCard = ({user}) => {

//     const {userCard, cardMedia} = useStyles()
//     return (
//         <CardContent className={userCard}>
//             <img src="https://via.placeholder.com/150" alt="user" className={cardMedia}/>
//             <br/>
//             {user}'s DashBoard
//         </CardContent>
//     )
// }

// export default UsersCard

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}