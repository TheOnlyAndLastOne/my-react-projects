import { Container } from "@mui/material";
import React from "react";
import {
  MdBookmark,
  MdExitToApp,
  MdHome,
  MdList,
  MdPerson,
  MdPhotoCamera,
  MdPlayCircleOutline,
  MdSettings,
  MdStorefront,
  MdTabletMac,
} from "react-icons/md";
import PageOneLeftBarItem from "./PageOneLeftBarItem";

const PageOneLeftBar = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        backgroundColor: ["#1876D2", "#fff"],
        paddingTop: 11,
        position: "sticky",
        top: 0,
      }}
    >
      <PageOneLeftBarItem icon={<MdHome size="18" />} content="Homepage" />
      <PageOneLeftBarItem icon={<MdPerson size="18" />} content="Friends" />
      <PageOneLeftBarItem icon={<MdList size="18" />} content="Lists" />
      <PageOneLeftBarItem icon={<MdPhotoCamera size="18" />} content="Camera" />
      <PageOneLeftBarItem
        icon={<MdPlayCircleOutline size="18" />}
        content="Videos"
      />
      <PageOneLeftBarItem icon={<MdTabletMac size="18" />} content="Apps" />
      <PageOneLeftBarItem
        icon={<MdBookmark size="18" />}
        content="Collections"
      />
      <PageOneLeftBarItem
        icon={<MdStorefront size="18" />}
        content="Market Place"
      />
      <PageOneLeftBarItem icon={<MdSettings size="18" />} content="Settings" />
      <PageOneLeftBarItem icon={<MdExitToApp size="18" />} content="Logout" />
    </Container>
  );
};

export default PageOneLeftBar;
