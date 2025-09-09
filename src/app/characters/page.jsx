"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

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
                console.log('🏗 Criando dados de fallback...');
                setCharacters([{
                    name: 'Kratos',
                    characterId: 'kratos',
                    image: null,
                    biographicalInformation: { status: 'Vivo', birthplace: 'Esparta' },
                    physicalInformation: { race: 'Deus', gender: 'Masculino' },
                    description: 'O protagonista principal da série God of War.'
                }]);
            } else {
                setCharacters(validCharacters);
            }
            
        } catch (error) {
            console.error('🚨 Erro geral:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    if (loading) {
        return (
            <div className="section">
                <div className="container">
                    <div className="loading">
                        <div className="spinner"></div>
                        <h2>Carregando Guerreiros</h2>
                        <p>Invocando os heróis épicos do Valhalla...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!loading && characters.length === 0) {
        return (
            <div className="section">
                <div className="container">
                    <div className="text-center">
                        <div style={{fontSize: '4rem', marginBottom: '24px'}}>⚔️</div>
                        <h2 style={{marginBottom: '16px'}}>Nenhum Guerreiro Encontrado</h2>
                        <p className="mb-8">
                            Os deuses não respondem... Tente novamente mais tarde.
                        </p>
                        <button
                            onClick={fetchCharacters}
                            className="btn btn-primary"
                        >
                            🔄 Tentar Novamente
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="section">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1>Personagens de God of War</h1>
                    <p>
                        Conheça os heróis, deuses e criaturas do universo God of War
                    </p>
                </div>

                {/* Filtros */}
                <div className="card mb-8">
                    <div style={{textAlign: 'center'}}>
                        <p style={{fontSize: '1.125rem', fontWeight: 600, color: '#dc2626', marginBottom: '8px'}}>
                            {characters.length} Personagens Encontrados
                        </p>
                        <p style={{fontSize: '0.875rem'}}>
                            Cada personagem carrega sua própria lenda
                        </p>
                    </div>
                </div>

                {/* Grid de Personagens */}
                <div className="grid grid-3">
                    {characters.map((character) => (
                        <Link 
                            key={character.characterId || character.name} 
                            href={`/characters/${character.characterId || character.name.toLowerCase()}`}
                            style={{textDecoration: 'none'}}
                        >
                            <div className="character-card">
                                <div className="character-img">
                                    {character.image ? (
                                        <img 
                                            src={character.image} 
                                            alt={character.name}
                                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                        />
                                    ) : (
                                        <span>⚔️</span>
                                    )}
                                </div>

                                <div className="character-info">
                                    <h3 className="character-name">{character.name}</h3>
                                    
                                    <div className="character-meta">
                                        <span>Status</span>
                                        <span className={character.biographicalInformation?.status === 'Alive' || character.biographicalInformation?.status === 'Vivo' ? 'status-alive' : 'status-dead'}>
                                            {character.biographicalInformation?.status === 'Alive' ? 'Vivo' : character.biographicalInformation?.status || 'Desconhecido'}
                                        </span>
                                    </div>

                                    <div className="character-meta">
                                        <span>Raça</span>
                                        <span>{character.physicalInformation?.race || 'Desconhecida'}</span>
                                    </div>

                                    <div className="character-meta">
                                        <span>Local</span>
                                        <span>{character.biographicalInformation?.birthplace || 'Desconhecido'}</span>
                                    </div>

                                    {character.description && (
                                        <p style={{
                                            fontSize: '0.875rem', 
                                            color: '#a1a1aa', 
                                            marginTop: '12px',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}>
                                            {character.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Botão de Recarregar */}
                <div className="text-center" style={{marginTop: '64px'}}>
                    <button
                        onClick={fetchCharacters}
                        className="btn btn-secondary"
                        disabled={loading}
                    >
                        {loading ? 'Carregando...' : '🔄 Recarregar Personagens'}
                    </button>
                </div>
            </div>
        </div>
    );
}
