function Experiencia({ experience }) {
    return (
        <section className="cv-section">
            <h2 className="section-header">Experiencia</h2>
            {experience.map((exp, index) => (
                <div key={index} className="section-item">
                    <p><b>{exp.position}</b></p>
                    <p>{exp.company}&nbsp;&nbsp;|&nbsp;&nbsp;{exp.period}</p>
                    <aside>
                        <p>Stack: {exp.stack}</p>
                        <ul style={{ paddingLeft: "32px", fontSize: "0.9rem" }}>
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </aside>
                </div>
            ))}
        </section>
    )
}

export default Experiencia;