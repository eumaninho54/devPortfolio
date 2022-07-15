import { Button } from "@mui/material";
import StyleContactMe from "./styles";
import { FcDocument } from "react-icons/fc";
import { RefContext } from "../../../context/refContext";
import { useContext } from "react";
import { refContextProps } from "../../models/refContextModel";

export default function ContactMe() {
  const { contactMeScroll } = useContext<refContextProps>(RefContext)

  return (
    <StyleContactMe ref={contactMeScroll}>
      <div className="content">

        <h1>
          <FcDocument className="emoji" /> Veja meu currículo{" "}
          <FcDocument className="emoji" />
        </h1>

        <a
          href="https://drive.google.com/file/d/1Xf0bCu7iTcaZvXwjaV-wxtfHZriRs106/view?usp=sharing"
          target="_blank"
          rel="noreferrer">
          <Button type="submit" variant="contained">
            Ver
          </Button>
        </a>
      </div>
    </StyleContactMe>
  );
}
