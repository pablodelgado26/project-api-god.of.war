import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-6">
            <div className="text-center max-w-md mx-auto">
                
                {/* Container principal */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-12">
                    
                    {/* Emoji animado */}
                    <div className="text-8xl mb-8">
                        😢
                    </div>

                    {/* Título */}
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Página não encontrada
                    </h1>

                    {/* Mensagem */}
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Ops! A página que você está procurando não existe ou foi movida para outro lugar.
                    </p>

                    {/* Botão principal */}
                    <Link 
                        href="/"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-md mb-8"
                    >
                        🏠 Voltar para Home
                    </Link>

                    {/* Links úteis */}
                    <div className="flex justify-center items-center space-x-6 pt-6 border-t border-gray-200">
                        <Link 
                            href="/characters"
                            className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                        >
                            Ver Personagens
                        </Link>
                        
                        <div className="w-1 h-4 bg-gray-300"></div>
                        
                        <Link 
                            href="/apiinfo"
                            className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
                        >
                            Info da API
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}