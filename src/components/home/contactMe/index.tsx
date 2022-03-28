import {
  TextField,
  ThemeProvider,
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useRef, useState } from "react";
import StyleContactMe from "./styles";
import { FcVoicemail, FcDocument } from "react-icons/fc";
import emailjs from "@emailjs/browser";
import { themeUi } from "../../../config/themes";

export default function ContactMe() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const REACT_APP_YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const REACT_APP_YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const REACT_APP_YOUR_USER_ID = process.env.REACT_APP_YOUR_USER_ID;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        String(REACT_APP_YOUR_SERVICE_ID),
        String(REACT_APP_YOUR_TEMPLATE_ID),
        e.currentTarget,
        String(REACT_APP_YOUR_USER_ID)
      )
      .then(
        (result) => {
          setMessage("Menssagem enviada com sucesso");
          setOpen(true);
        },
        (error) => {
          setMessage("Erro no envio!");
          setOpen(true);
        }
      );
    e.currentTarget.reset();
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const actionSnackBar = (
    <ThemeProvider theme={themeUi}>
      <Button size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </ThemeProvider>
  );

  return (
    <StyleContactMe>
      <div className="content">
        <h1>
          <FcVoicemail /> Contate-me <FcVoicemail />
        </h1>

        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message={message}
          action={actionSnackBar}
        />

        <form ref={form} onSubmit={sendEmail} className="infoContact">
          <ThemeProvider theme={themeUi}>
            <TextField
              name="name"
              className="fieldContact"
              label="Digite seu nome"
              variant="filled"
            />
            <TextField
              name="email"
              className="fieldContact"
              label="Digite seu email"
              variant="filled"
            />
            <TextField
              name="message"
              className="fieldContact"
              label="O que deseja me falar?"
              variant="filled"
              multiline
              maxRows={5}
            />
            <Button type="submit" variant="contained">
              Enviar Mensagem
            </Button>
          </ThemeProvider>
        </form>

        <h1>
          <FcDocument className="emoji" /> Veja meu currículo{" "}
          <FcDocument className="emoji" />
        </h1>
        <ThemeProvider theme={themeUi}>
          <a
            href="https://drive.google.com/file/d/1Xf0bCu7iTcaZvXwjaV-wxtfHZriRs106/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="submit" variant="contained">
              Ver
            </Button>
          </a>
        </ThemeProvider>
      </div>
    </StyleContactMe>
  );
}
