import Header from "./components/header"
import Contacto from "./components/contacto"
import Experiencia from "./components/experiencia"
import Formacion from "./components/formacion"
import Idiomas from "./components/idiomas"

import data from "./data/data.json";

export default function Home() {
  return (
    <div>
      <Header personal={data.personal} />
      <main style={{ padding: "32px", display: "flex", gap: "16px", paddingRight: "48px" }}>
        <div style={{ flex: "1 0 40%", padding: "16px" }}>
          <Contacto personal={data.personal} />
          <Formacion education={data.education} />
          <Idiomas languages={data.languages} />
        </div>
        <div style={{ flex: "1 0 60%", padding: "16px" }}>
          <Experiencia experience={data.experience} />
        </div>
      </main>
    </div>
  );
}
