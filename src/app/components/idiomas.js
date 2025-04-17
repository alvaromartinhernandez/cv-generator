function Idiomas({ languages }) {
    return (
        <section className="cv-section">
            <h2 className="section-header">Idiomas</h2>
            <div className="section-item">
                {languages.map((lang, index) => (
                    <p key={index}>{lang.language}: {lang.level}</p>
                ))}
            </div>
        </section>
    )
}

export default Idiomas;