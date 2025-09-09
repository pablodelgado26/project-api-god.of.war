import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ character, index = 0 }) {
    return (
        <div className="character-card">
            {/* Image */}
            <div className="character-img">
                {character.image ? (
                    <>
                        <Image
                            src={character.image}
                            alt={character.name || 'Guerreiro'}
                            fill
                            className="object-cover"
                            onError={(e) => {
                                console.warn(`Erro ao carregar imagem de ${character.name}:`, character.image);
                                e.target.style.display = 'none';
                                e.target.parentNode.querySelector('.fallback-icon').style.display = 'flex';
                            }}
                        />
                        <div className="fallback-icon" style={{ display: 'none', position: 'absolute', inset: '0', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: '#dc2626' }}>
                            ⚔️
                        </div>
                    </>
                ) : (
                    <div style={{ fontSize: '3rem', color: '#dc2626' }}>⚔️</div>
                )}
            </div>

            {/* Content */}
            <div className="character-info">
                {/* Character Name */}
                <h3 className="character-name">{character.name}</h3>
                
                {/* Character Details */}
                {character.biographicalInformation?.status && (
                    <div className="character-meta">
                        <span>Status:</span>
                        <span className={character.biographicalInformation.status.toLowerCase().includes('alive') || 
                            character.biographicalInformation.status.toLowerCase().includes('vivo') 
                                ? 'status-alive' 
                                : 'status-dead'}>
                            {character.biographicalInformation.status}
                        </span>
                    </div>
                )}
                
                {character.physicalInformation?.race && (
                    <div className="character-meta">
                        <span>Raça:</span>
                        <span>{character.physicalInformation.race}</span>
                    </div>
                )}
                
                {character.biographicalInformation?.birthplace && (
                    <div className="character-meta">
                        <span>Origem:</span>
                        <span>{character.biographicalInformation.birthplace}</span>
                    </div>
                )}

                {/* Description Preview */}
                {character.description && (
                    <p style={{ fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '16px', lineHeight: '1.6' }}>
                        {character.description.substring(0, 100)}
                        {character.description.length > 100 && "..."}
                    </p>
                )}

                {/* Action Button */}
                <Link 
                    href={`/characters/${character.characterId}`}
                    className="btn btn-primary"
                    style={{ display: 'block', width: '100%', textAlign: 'center' }}
                >
                    ⚔️ Ver Detalhes
                </Link>
            </div>
        </div>
    );
}