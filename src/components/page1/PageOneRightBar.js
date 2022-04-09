import {
  Avatar,
  AvatarGroup,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const PageOneRightBar = () => {
  const title = {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  };

  const link = {
    marginRight: 2,
    color: "#555",
    fontSize: 16,
  };

  return (
    <Container
      sx={{
        paddingTop: 11,
        position: "sticky",
        top: 0,
      }}
    >
      <Typography gutterBottom sx={title}>
        Online Friends
      </Typography>
      <AvatarGroup
        max={6}
        sx={{
          marginBottom: 2,
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography gutterBottom sx={title}>
        Gallery
      </Typography>
      <ImageList rowHeight={120} sx={{ marginBottom: 2 }} cols={2}>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/hats.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/vegetables.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>

      <Typography sx={title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" sx={link} variant="body2" underline="hover">
        Sport
      </Link>
      <Link href="#" sx={link} variant="body2" underline="hover">
        Food
      </Link>
      <Link href="#" sx={link} variant="body2" underline="hover">
        Music
      </Link>
      <Divider flexItem sx={{ marginX: 1 }} />
      <Link href="#" sx={link} variant="body2" underline="hover">
        Movies
      </Link>
      <Link href="#" sx={link} variant="body2" underline="hover">
        Science
      </Link>
      <Link href="#" sx={link} variant="body2" underline="hover">
        Life
      </Link>
    </Container>
  );
};

export default PageOneRightBar;
