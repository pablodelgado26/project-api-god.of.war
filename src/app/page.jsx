import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full mx-auto">
                
                {/* Container principal centralizado */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                    
                    {/* Header section */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Next.js 15 CRUD Project
                        </h1>
                        <p className="text-blue-100 text-lg">
                            Consumindo API Pública - God of War
                        </p>
                    </div>

                    {/* Main content */}
                    <div className="p-12">
                        
                        {/* Profile section - centralizada */}
                        <div className="flex flex-col items-center text-center mb-12">
                            
                            {/* Foto do aluno */}
                            <div className="relative w-32 h-32 mb-6">
                                <Image
                                    src="/images/pj.jpeg"
                                    alt="Foto do aluno"
                                    fill
                                    className="rounded-full object-cover border-4 border-gray-200 shadow-md"
                                />
                            </div>

                            {/* Nome completo */}
                            <h2 className="text-2xl font-bold text-gray-800 mb-8">
                                Pablo Delgado
                            </h2>
                        </div>

                        {/* Informações organizadas */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            
                            {/* Nome da turma */}
                            <div className="text-center">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Turma
                                </h3>
                                <p className="text-xl font-medium text-gray-800">
                                    2TDS2
                                </p>
                            </div>

                            {/* Nome da escola */}
                            <div className="text-center">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Escola
                                </h3>
                                <p className="text-xl font-medium text-gray-800">
                                    SENAI
                                </p>
                            </div>
                        </div>

                        {/* Frase inspiradora */}
                        <div className="text-center mb-12">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <blockquote className="text-xl text-gray-700 italic mb-4 leading-relaxed">
                                    "A programação não é sobre o que você sabe; é sobre o que você pode descobrir."
                                </blockquote>
                                <cite className="text-sm text-gray-500 font-medium">
                                    — Chris Pine
                                </cite>
                            </div>
                        </div>

                        {/* Navigation links */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link 
                                href="/apiinfo"
                                className="group bg-blue-50 hover:bg-blue-100 rounded-xl p-6 text-center transition-all duration-200 border border-blue-200 hover:border-blue-300"
                            >
                                <div className="text-3xl mb-3">📚</div>
                                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                                    Informações da API
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Detalhes sobre a api do god of war
                                </p>
                            </Link>

                            <Link 
                                href="/characters"
                                className="group bg-purple-50 hover:bg-purple-100 rounded-xl p-6 text-center transition-all duration-200 border border-purple-200 hover:border-purple-300"
                            >
                                <div className="text-3xl mb-3">👥</div>
                                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600">
                                    Personagens
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Explore os personagens da série
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
