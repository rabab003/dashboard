import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import Header from "../../Components/Header";
import React from "react";
import { useForm } from "react-hook-form";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Manager",
    label: "Manager",
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberReg =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="info"
        onClick={handleClose}
      ></IconButton>
    </React.Fragment>
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("done");
    handleClick();
  };

  return (
    <>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "5" }}
        noValidate
        autoComplete="off"
      >
        <Header text={"create user"} subText={"create a new user profile"} />

        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName) ? "this field is required" : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            required
            variant="filled"
            label="Required"
            defaultValue="First Name"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName) ? "this field is required" : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            required
            variant="filled"
            label="Required"
            defaultValue="Second Name"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "please provide a valid email address"
              : null
          }
          {...register("email", {
            required: true,
            pattern: emailRegex,
          })}
          required
          variant="filled"
          label="Email"
          defaultValue="write email"
        />

        <TextField
          error={Boolean(errors.ContactNumber)}
          helperText={
            Boolean(errors.ContactNumber)
              ? "please provide a valid Phone Number"
              : null
          }
          {...register("ContactNumber", {
            required: true,
            pattern: phoneNumberReg,
          })}
          required
          variant="filled"
          label="Contact Number"
          defaultValue="contact number"
        />
        <TextField
          required
          variant="filled"
          label="Adress 1"
          defaultValue="Address 1"
        />
        <TextField
          required
          variant="filled"
          label="Adress 2"
          defaultValue="address 2"
        />

        <TextField
          variant="filled"
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="User"
          slotProps={{
            select: {
              native: true,
            },
          }}
        >
          {data.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            create new user
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Account created successfully !"
            action={action}
          />
        </Box>
      </Box>
    </>
  );
}
