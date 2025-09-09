export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    
                    {/* Projeto */}
                    <div className="footer-section">
                        <h3>God of War Project</h3>
                        <p>
                            Projeto Next.js 15 consumindo API pública do God of War
                        </p>
                    </div>

                    {/* Desenvolvedor */}
                    <div className="footer-section">
                        <h3>Desenvolvedor</h3>
                        <p><strong>Pablo Delgado</strong></p>
                        <p>Turma: 2TDS2</p>
                        <p>Escola: SENAI</p>
                    </div>

                    {/* Links */}
                    <div className="footer-section">
                        <h3>Navegação</h3>
                        <a href="/">Home</a>
                        <a href="/apiinfo">API Info</a>
                        <a href="/characters">Personagens</a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>
                        © 2025 God of War Project - Desenvolvido para fins educacionais
                    </p>
                </div>
            </div>
        </footer>
    );
}
