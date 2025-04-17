import Image from "next/image";

function Header({ personal }) {
    return (        
      <header style={{"display":"flex", "width":"100%", "background":"#ADC8F4","color":"#1E2941","padding":"32px","gap": "48px","paddingLeft":"48px"}}>
        <section>
            <Image
            src="/profile.jpeg"
            alt="Profile"
            style={{"borderRadius":"60px","border":"5px solid white"}}
            width={120}
            height={120}
            />
        </section>
        <section style={{"display": "flex", "flexDirection": "column", "justifyContent": "center"}}>
            <h1 style={{ fontSize: "1.6rem" }}>{personal.name}</h1>
            <br />
            <h2 style={{ fontSize: "1.2rem" }}>{personal.title}</h2>
        </section>
      </header>
    )
  }
  
  export default Header
  