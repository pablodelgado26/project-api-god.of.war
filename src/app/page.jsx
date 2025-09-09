import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="section">
            <div className="container">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h1>
                        God of <span style={{color: '#dc2626'}}>War</span>
                    </h1>
                    <p>
                        Projeto Next.js 15 consumindo API pública do universo God of War
                    </p>
                </div>

                <div className="grid grid-2">
                    
                    {/* Profile Section */}
                    <div className="card">
                        <div className="text-center">
                            {/* Foto */}
                            <Image
                                src="/images/pj.jpeg"
                                alt="Foto do aluno"
                                width={120}
                                height={120}
                                className="profile-img"
                            />

                            {/* Nome */}
                            <h2 className="mb-8">
                                Pablo Delgado
                            </h2>

                            {/* Info */}
                            <div className="grid grid-2 mb-8">
                                <div className="card">
                                    <div style={{color: '#dc2626', fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px'}}>Turma</div>
                                    <div style={{fontWeight: 'bold'}}>2TDS2</div>
                                </div>
                                <div className="card">
                                    <div style={{color: '#dc2626', fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px'}}>Escola</div>
                                    <div style={{fontWeight: 'bold'}}>SENAI</div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="card" style={{borderLeft: '4px solid #dc2626'}}>
                                <p style={{fontStyle: 'italic', fontSize: '0.875rem', marginBottom: '8px'}}>
                                    "A programação não é sobre o que você sabe; é sobre o que você pode descobrir."
                                </p>
                                <cite style={{color: '#dc2626', fontSize: '0.75rem'}}>— Chris Pine</cite>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <Link href="/apiinfo" className="card" style={{display: 'block', textDecoration: 'none', marginBottom: '24px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                                <div style={{
                                    width: '48px', 
                                    height: '48px', 
                                    backgroundColor: '#dc2626', 
                                    borderRadius: '8px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontSize: '20px'
                                }}>
                                    📚
                                </div>
                                <div style={{flex: 1}}>
                                    <h3 className="mb-4">
                                        Informações da API
                                    </h3>
                                    <p style={{fontSize: '0.875rem', margin: 0}}>
                                        Documentação e detalhes da API do God of War
                                    </p>
                                </div>
                                <div style={{color: '#dc2626', fontSize: '20px'}}>→</div>
                            </div>
                        </Link>

                        <Link href="/characters" className="card" style={{display: 'block', textDecoration: 'none'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                                <div style={{
                                    width: '48px', 
                                    height: '48px', 
                                    backgroundColor: '#dc2626', 
                                    borderRadius: '8px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontSize: '20px'
                                }}>
                                    ⚔️
                                </div>
                                <div style={{flex: 1}}>
                                    <h3 className="mb-4">
                                        Personagens
                                    </h3>
                                    <p style={{fontSize: '0.875rem', margin: 0}}>
                                        Explore os personagens da mitologia nórdica
                                    </p>
                                </div>
                                <div style={{color: '#dc2626', fontSize: '20px'}}>→</div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-3" style={{marginTop: '64px'}}>
                    <div className="card text-center">
                        <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '8px'}}>Next.js 15</div>
                        <div style={{fontSize: '0.875rem'}}>Framework React</div>
                    </div>
                    <div className="card text-center">
                        <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '8px'}}>API REST</div>
                        <div style={{fontSize: '0.875rem'}}>God of War</div>
                    </div>
                    <div className="card text-center">
                        <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#dc2626', marginBottom: '8px'}}>2025</div>
                        <div style={{fontSize: '0.875rem'}}>SENAI Project</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
