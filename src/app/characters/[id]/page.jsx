"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

export default function CharacterDetail() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://god-of-war-api.onrender.com/characters/${params.id}`);
                setCharacter(response.data);
                toast.success("Detalhes carregados com sucesso!");
            } catch (error) {
                console.error("Erro ao buscar personagem:", error);
                toast.error("Erro ao carregar detalhes do personagem");
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchCharacter();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Carregando detalhes...</p>
                </div>
            </div>
        );
    }

    if (!character) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Personagem não encontrado</h1>
                    <Link 
                        href="/characters"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                        ← Voltar para lista
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Navegação */}
                <div className="flex justify-center space-x-4 mb-8">
                    <Link 
                        href="/"
                        className="bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 font-semibold"
                    >
                        🏠 Home
                    </Link>
                    <Link 
                        href="/characters"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                    >
                        ← Lista de Personagens
                    </Link>
                </div>

                {/* Card principal */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="md:flex">
                        {/* Imagem */}
                        <div className="md:w-1/3">
                            <div className="relative h-96 md:h-full w-full bg-gray-200 flex items-center justify-center">
                                {character.image ? (
                                    <Image
                                        src={character.image}
                                        alt={character.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="text-gray-500 text-6xl">⚔️</div>
                                )}
                            </div>
                        </div>

                        {/* Informações */}
                        <div className="md:w-2/3 p-8">
                            <h1 className="text-4xl font-bold text-gray-800 mb-8">
                                {character.name}
                            </h1>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Informações básicas */}
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2">
                                        📋 Informações Básicas
                                    </h2>
                                    
                                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                                        <span className="font-semibold text-blue-700">Nome:</span>
                                        <p className="text-blue-600 font-mono">{params.id}</p>
                                    </div>

                                    {character.biographicalInformation?.status && (
                                        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                            <span className="font-semibold text-green-700">Status:</span>
                                            <p className="text-green-600">{character.biographicalInformation.status}</p>
                                        </div>
                                    )}

                                    {character.physicalInformation?.race && (
                                        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                                            <span className="font-semibold text-purple-700">Raça:</span>
                                            <p className="text-purple-600">{character.physicalInformation.race}</p>
                                        </div>
                                    )}

                                    {character.physicalInformation?.gender && (
                                        <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                                            <span className="font-semibold text-orange-700">Gênero:</span>
                                            <p className="text-orange-600">{character.physicalInformation.gender}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Características adicionais */}
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-purple-200 pb-2">
                                        ⚔️ Características
                                    </h2>
                                    
                                    {character.biographicalInformation?.birthplace && (
                                        <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
                                            <span className="font-semibold text-cyan-700">Local de Nascimento:</span>
                                            <p className="text-cyan-600">{character.biographicalInformation.birthplace}</p>
                                        </div>
                                    )}

                                    {character.biographicalInformation?.age && (
                                        <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                                            <span className="font-semibold text-teal-700">Idade:</span>
                                            <p className="text-teal-600">{character.biographicalInformation.age}</p>
                                        </div>
                                    )}

                                    {character.physicalInformation?.height && (
                                        <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                                            <span className="font-semibold text-violet-700">Altura:</span>
                                            <p className="text-violet-600">
                                                {Array.isArray(character.physicalInformation.height) 
                                                    ? character.physicalInformation.height.join(' / ') 
                                                    : character.physicalInformation.height}
                                            </p>
                                        </div>
                                    )}

                                    {character.description && (
                                        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 md:col-span-2">
                                            <span className="font-semibold text-yellow-700">Descrição:</span>
                                            <p className="text-yellow-600 text-sm mt-2 leading-relaxed">
                                                {character.description.length > 300 
                                                    ? character.description.substring(0, 300) + "..." 
                                                    : character.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
