import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
            <div className="text-center max-w-md mx-auto">
                
                {/* Container principal */}
                <div className="bg-zinc-900 rounded-3xl border border-red-600 p-12 shadow-2xl">
                    
                    {/* Ícone */}
                    <div className="text-8xl mb-8 text-red-600">
                        ⚔️
                    </div>

                    {/* Título */}
                    <h1 className="text-4xl font-bold text-white mb-6">
                        404 - Página não encontrada
                    </h1>

                    {/* Mensagem */}
                    <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        Esta página foi perdida nas batalhas épicas. Retorne ao caminho principal.
                    </p>

                    {/* Botão principal */}
                    <Link 
                        href="/"
                        className="inline-block bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-all duration-200 font-semibold shadow-lg mb-8"
                    >
                        🏠 Voltar para Home
                    </Link>

                    {/* Links úteis */}
                    <div className="flex justify-center items-center space-x-6 pt-6 border-t border-zinc-700">
                        <Link 
                            href="/characters"
                            className="text-red-400 hover:text-red-300 transition-colors font-medium"
                        >
                            Ver Personagens
                        </Link>
                        
                        <div className="w-1 h-4 bg-zinc-600"></div>
                        
                        <Link 
                            href="/apiinfo"
                            className="text-red-400 hover:text-red-300 transition-colors font-medium"
                        >
                            Info da API
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
