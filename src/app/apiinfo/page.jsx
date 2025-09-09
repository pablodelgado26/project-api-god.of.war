import Link from "next/link";

export default function ApiInfo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full mx-auto">
                
                {/* Container principal centralizado */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                    
                    {/* Header section */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-center">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            📚 Informações da API
                        </h1>
                        <p className="text-indigo-100 text-lg">
                            Conheça a API utilizada neste projeto
                        </p>
                    </div>

                    {/* Main content */}
                    <div className="p-12">
                        
                        {/* Nome da API */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                🌟 God of War API
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                API REST que fornece dados sobre personagens, armas e localizações 
                                do universo God of War.
                            </p>
                        </div>

                        {/* Informações principais em grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            
                            {/* URL Base */}
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                                <h3 className="text-lg font-bold text-blue-700 mb-4">
                                    🌐 URL Base
                                </h3>
                                <code className="block bg-gray-900 text-green-400 p-3 rounded-lg text-sm font-mono break-all">
                                    https://god-of-war-api.onrender.com
                                </code>
                            </div>

                            {/* Endpoint */}
                            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                                <h3 className="text-lg font-bold text-purple-700 mb-4">
                                    🎯 Endpoint Utilizado
                                </h3>
                                <code className="block bg-gray-900 text-purple-400 p-3 rounded-lg text-sm font-mono">
                                    /characters/
                                </code>
                            </div>
                        </div>

                        {/* Link da documentação */}
                        <div className="text-center mb-12">
                            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                                <h3 className="text-xl font-bold text-green-700 mb-4">
                                    📖 API Endpoint
                                </h3>
                                <a 
                                    href="https://god-of-war-api.onrender.com/characters/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold"
                                >
                                    🔗 Acessar API
                                </a>
                            </div>
                        </div>

                        {/* Atributos */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                📋 Atributos da Resposta
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { attr: 'id', desc: 'Identificador único' },
                                    { attr: 'name', desc: 'Nome do personagem' },
                                    { attr: 'description', desc: 'Descrição do personagem' },
                                    { attr: 'species', desc: 'Espécie' },
                                    { attr: 'weapon', desc: 'Arma principal' },
                                    { attr: 'image', desc: 'URL da imagem' },
                                    { attr: 'origin', desc: 'Local de origem' },
                                    { attr: 'status', desc: 'Status do personagem' },
                                    { attr: 'role', desc: 'Papel na história' }
                                ].map((item, index) => (
                                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                        <code className="font-mono text-sm font-bold text-gray-700">{item.attr}</code>
                                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Descrição */}
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 mb-12">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                                ✨ Sobre a API
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-center">
                                A God of War API é uma fonte rica de dados sobre o universo épico 
                                criado pela Santa Monica Studio. Oferece informações detalhadas sobre 
                                personagens icônicos, suas armas lendárias e os reinos que habitam, 
                                perfeita para projetos educacionais e de fãs da franquia.
                            </p>
                        </div>

                        {/* Navigation links */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link 
                                href="/"
                                className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 text-center transition-all duration-200 border border-gray-200 hover:border-gray-300"
                            >
                                <div className="text-3xl mb-3">🏠</div>
                                <h3 className="font-semibold text-gray-800">
                                    Voltar para Home
                                </h3>
                            </Link>

                            <Link 
                                href="/characters"
                                className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 text-center transition-all duration-200 border border-blue-200 hover:border-blue-300"
                            >
                                <div className="text-3xl mb-3">⚔️</div>
                                <h3 className="font-semibold text-gray-800">
                                    Ver Personagens
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}