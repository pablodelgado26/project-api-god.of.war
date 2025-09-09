import Link from "next/link";

export default function ApiInfo() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Informações da <span className="text-red-600">API</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Documentação completa da API God of War utilizada neste projeto
                    </p>
                </div>

                {/* API Details */}
                <div className="card mb-12">
                    <div className="card-body">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">God of War API</h2>
                            <p className="text-gray-400">
                                API REST que fornece informações sobre personagens da mitologia
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            
                            {/* URL Base */}
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <h3 className="text-white font-bold mb-3 flex items-center">
                                    <span className="text-red-500 mr-2">🌐</span>
                                    URL Base
                                </h3>
                                <code className="text-green-400 text-sm break-all bg-black p-2 rounded block">
                                    https://god-of-war-api.onrender.com
                                </code>
                            </div>

                            {/* Endpoint */}
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <h3 className="text-white font-bold mb-3 flex items-center">
                                    <span className="text-red-500 mr-2">📡</span>
                                    Endpoint
                                </h3>
                                <code className="text-green-400 text-sm bg-black p-2 rounded block">
                                    /characters/:name
                                </code>
                            </div>

                            {/* Método */}
                            <div className="p-4 bg-gray-800 rounded-lg">
                                <h3 className="text-white font-bold mb-3 flex items-center">
                                    <span className="text-red-500 mr-2">⚡</span>
                                    Método
                                </h3>
                                <span className="text-blue-400 font-bold text-lg bg-black px-3 py-1 rounded">GET</span>
                            </div>
                        </div>

                        {/* API Link */}
                        <div className="text-center mb-8">
                            <a 
                                href="https://god-of-war-api.onrender.com/characters/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                🔗 Acessar API
                            </a>
                        </div>
                    </div>
                </div>

                {/* Attributes */}
                <div className="card mb-12">
                    <div className="card-body">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">
                            Atributos da Resposta
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { attr: 'name', desc: 'Nome do personagem' },
                                { attr: 'description', desc: 'Descrição detalhada' },
                                { attr: 'biographicalInformation', desc: 'Informações biográficas' },
                                { attr: 'physicalInformation', desc: 'Características físicas' },
                                { attr: 'image', desc: 'URL da imagem' },
                                { attr: 'status', desc: 'Status atual' }
                            ].map((item, index) => (
                                <div key={index} className="p-3 bg-gray-800 rounded-lg">
                                    <code className="text-red-400 font-bold text-sm">{item.attr}</code>
                                    <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Link href="/" className="card block">
                        <div className="card-body text-center">
                            <div className="text-2xl mb-3">🏠</div>
                            <h3 className="text-white font-bold mb-2">Voltar ao Início</h3>
                            <p className="text-gray-400 text-sm">Página principal</p>
                        </div>
                    </Link>

                    <Link href="/characters" className="card block">
                        <div className="card-body text-center">
                            <div className="text-2xl mb-3">⚔️</div>
                            <h3 className="text-white font-bold mb-2">Ver Personagens</h3>
                            <p className="text-gray-400 text-sm">Lista completa</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
