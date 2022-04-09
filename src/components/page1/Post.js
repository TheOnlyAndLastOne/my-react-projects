import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Post = ({ img, title }) => {
  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia image={img} title="My Post" sx={{ height: [150, 250] }} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.
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
};

export default Post;
