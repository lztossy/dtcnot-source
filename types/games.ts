export type Game = 'FORTNITE' | 'VALORANT' | 'APEX LEGENDS' | 'CALL OF DUTY' | 'RUST' | 'DAYZ' | 'ESCAPE FROM TARKOV' | 'OVERWATCH 2' | 'R6S' | 'PUBG' | 'UNIVERSAL';

export const gameColors: Record<Game, string> = {
  'FORTNITE': 'text-lime-500',
  'VALORANT': 'text-lime-500',
  'APEX LEGENDS': 'text-lime-500',
  'CALL OF DUTY': 'text-lime-500',
  'RUST': 'text-lime-500',
  'ESCAPE FROM TARKOV': 'text-lime-500',
  'DAYZ': 'text-lime-500',
  'OVERWATCH 2': 'text-lime-500',
  'R6S': 'text-lime-500',
  'PUBG': 'text-lime-500',
  'UNIVERSAL': 'text-lime-500',
};

export type ProviderType = 'SOFTWARE' | 'SPOOFER' | 'DMA';

export interface SearchFilters {
  provider: string;
  game: Game | '';
  type: ProviderType | '';
}
