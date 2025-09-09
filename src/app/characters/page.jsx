"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            // Lista de personagens que sabemos que funcionam
            const workingCharacters = ['kratos', 'atreus', 'baldur', 'freya', 'zeus', 'athena'];
            
            console.log('Carregando personagens conhecidos:', workingCharacters);
            
            const validCharacters = [];
            
            // Carregar personagens um por vez para evitar rate limiting
            for (const name of workingCharacters) {
                try {
                    console.log(`🔄 Tentando carregar ${name}...`);
                    const res = await axios.get(`https://god-of-war-api.onrender.com/characters/${name}`);
                    console.log(`✅ Sucesso ao carregar ${name}`);
                    validCharacters.push({ ...res.data, characterId: name });
                    
                    // Pequena pausa entre requisições
                    await new Promise(resolve => setTimeout(resolve, 100));
                } catch (err) {
                    console.warn(`❌ Erro ao buscar ${name}:`, err.response?.status || err.message);
                    // Continua para o próximo personagem
                }
            }
            
            console.log(`📊 Total carregado: ${validCharacters.length} personagens`);
            
            if (validCharacters.length === 0) {
                // Se ainda assim não conseguir carregar nada, vamos criar dados mock
                console.log('� Criando dados de fallback...');
                setCharacters([{
                    name: 'Kratos',
                    characterId: 'kratos',
                    image: null,
                    biographicalInformation: { status: 'Vivo', birthplace: 'Esparta' },
                    physicalInformation: { race: 'Deus', gender: 'Masculino' },
                    description: 'O protagonista principal da série God of War.'
                }]);
                toast.info("Carregando dados de exemplo...");
            } else {
                setCharacters(validCharacters);
                toast.success(`${validCharacters.length} personagens carregados com sucesso!`);
            }
        } catch (error) {
            console.error("Erro geral ao buscar personagens:", error);
            
            // Fallback com dados estáticos
            setCharacters([{
                name: 'Kratos',
                characterId: 'kratos',
                image: null,
                biographicalInformation: { status: 'Vivo', birthplace: 'Esparta' },
                physicalInformation: { race: 'Deus', gender: 'Masculino' },
                description: 'O protagonista principal da série God of War.'
            }]);
            toast.error("Erro na API - Mostrando dados de exemplo");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Carregando personagens...</p>
                    <p className="text-sm text-gray-500 mt-2">Buscando dados detalhados de cada personagem</p>
                </div>
            </div>
        );
    }

    if (!loading && characters.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">😔</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Nenhum personagem encontrado</h2>
                    <p className="text-gray-600 mb-6">Não foi possível carregar os personagens da API.</p>
                    <button 
                        onClick={fetchCharacters}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                    >
                        🔄 Tentar Novamente
                    </button>
                    <div className="mt-4">
                        <Link 
                            href="/"
                            className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            ← Voltar para Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        ⚔️ Personagens
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Explore os personagens épicos
                    </p>
                    
                    {/* Navegação */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <Link 
                            href="/"
                            className="bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 font-semibold"
                        >
                            ← Home
                        </Link>
                        <Link 
                            href="/apiinfo"
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                        >
                            📚 Info da API
                        </Link>
                    </div>
                </div>

                {/* Grid de personagens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {characters.map((character, index) => (
                        <div 
                            key={`${character.characterId}-${index}`} 
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                        >
                            {/* Imagem */}
                            <div className="relative h-64 w-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                {character.image ? (
                                    <>
                                        <Image
                                            src={character.image}
                                            alt={character.name || 'Personagem'}
                                            fill
                                            className="object-cover"
                                            onError={(e) => {
                                                console.warn(`Erro ao carregar imagem de ${character.name}:`, character.image);
                                                e.target.style.display = 'none';
                                                e.target.parentNode.querySelector('.fallback-icon').style.display = 'flex';
                                            }}
                                        />
                                        <div className="fallback-icon text-gray-500 text-6xl absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                                            ⚔️
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-gray-500 text-6xl">⚔️</div>
                                )}
                            </div>

                            {/* Conteúdo */}
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-gray-800 mb-3">
                                    {character.name}
                                </h3>
                                
                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                    {character.biographicalInformation?.status && (
                                        <p>
                                            <span className="font-semibold">Status:</span> {character.biographicalInformation.status}
                                        </p>
                                    )}
                                    {character.physicalInformation?.race && (
                                        <p>
                                            <span className="font-semibold">Raça:</span> {character.physicalInformation.race}
                                        </p>
                                    )}
                                    {character.biographicalInformation?.birthplace && (
                                        <p>
                                            <span className="font-semibold">Local:</span> {character.biographicalInformation.birthplace}
                                        </p>
                                    )}
                                </div>

                                {/* Botão de detalhes */}
                                <Link 
                                    href={`/characters/${character.characterId}`}
                                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                                >
                                    Ver Detalhes
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}