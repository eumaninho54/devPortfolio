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

  return (
    <StyleContactMe>
      <ThemeProvider theme={themeUi}>
        <div className="content">

          <h1>
            <FcDocument className="emoji" /> Veja meu currículo{" "}
            <FcDocument className="emoji" />
          </h1>

          <a
            href="https://drive.google.com/file/d/1Xf0bCu7iTcaZvXwjaV-wxtfHZriRs106/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="submit" variant="contained">
              Ver
            </Button>
          </a>
        </div>
      </ThemeProvider>
    </StyleContactMe>
  );
}
