import {
  Alert,
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MdAdd } from "react-icons/md";

const inputItemStyle = {
  marginTop: (theme) => theme.spacing(3),
};

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [alertOpen, setAlertOpen] = React.useState(false);
  const handleAlertOpen = () => setAlertOpen(true);
  const handleAlertClose = () => setAlertOpen(false);

  const handlerCreate = () => {
    handleAlertOpen();
    handleClose();
  };
  return (
    <div>
      <Fab
        color="secondary"
        sx={{
          position: "fixed",
          bottom: (theme) => theme.spacing(2),
          right: (theme) => [theme.spacing(2), theme.spacing(10)],
        }}
      >
        <MdAdd size={40} onClick={handleOpen} />
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          maxWidth="lg"
          sx={{
            width: ["100%", 500],
            height: ["100%", 550],
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
          }}
        >
          <form
            autoComplete="off"
            sx={{ padding: (theme) => theme.spacing(2) }}
          >
            <Box sx={inputItemStyle}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </Box>
            <Box sx={inputItemStyle}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </Box>
            <Box sx={inputItemStyle}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </Box>
            <Box sx={inputItemStyle}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </Box>
            <Box
              sx={{
                ...inputItemStyle,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 40 }}
                onClick={handlerCreate}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Container>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Add;
