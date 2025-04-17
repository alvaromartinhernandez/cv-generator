function Contacto({ personal }) {
    return (
        <section className="cv-section">
            <h2 className="section-header">Contacto</h2>
            <p>{personal.birthplace}</p>
            <p><a href={personal.contacts.linkedin}>linkedin.com/in/alvaro-martín</a></p>
            <p><a href={`tel:${personal.contacts.phone}`}>{personal.contacts.phone}</a></p>
            <p><a href={`mailto:${personal.contacts.email}`}>{personal.contacts.email}</a></p>
        </section>
    )
}

export default Contacto;