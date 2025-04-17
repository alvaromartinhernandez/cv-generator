function Formacion({ education }) {
    return (
        <section className="cv-section">
            <h2 className="section-header">Formación</h2>
            {education.map((item, index) => (
                <div key={index} className="section-item">
                    <p><b>{item.degree}</b></p>
                    <p>{item.institution} | {item.location} | {item.period}</p>
                </div>
            ))}
        </section>
    )
}

export default Formacion;