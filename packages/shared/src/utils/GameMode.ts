import type { Card } from './cardDefinitions';

export enum GameMode {
  EOP = 'Elevation of Privilege',
  PRIVACY = 'Elevation of Privacy',
  CORNUCOPIA = 'OWASP Cornucopia',
  CUMULUS = 'OWASP Cumulus',
  EOMLSEC = 'Elevation of MLsec',
}

export const DEFAULT_GAME_MODE = GameMode.EOP;

export function getCardCssClass(gameMode: GameMode, c: Card): string {
  if (isGameModeCornucopia(gameMode)) {
    return `cornucopia-card cornucopia-card-img-${c.toLowerCase()}`;
  }

  if (isGameModeCumulus(gameMode)) {
    return `cumulus-card cumulus-card-img-${c.toLowerCase()}`;
  }

  if (isGameModeElevationOfMlSec(gameMode)) {
    return `eomlsec-card eomlsec-card-img-${c.toLowerCase()}`;
  }

  if (isGameModePrivacy(gameMode)) {
    return `eoprivacy-card eoprivacy-card-img-${c.toLowerCase()}`;
  }

  return `eop-card eop-card-img-${c.toLowerCase()}`;
}

function isGameMode(value: GameMode): value is GameMode {
  return Object.values(GameMode).includes(value);
}

function isGameModeCornucopia(gameMode: GameMode): boolean {
  return isGameMode(gameMode) && gameMode === GameMode.CORNUCOPIA;
}

function isGameModeCumulus(gameMode: GameMode): boolean {
  return isGameMode(gameMode) && gameMode === GameMode.CUMULUS;
}

function isGameModePrivacy(gameMode: GameMode): boolean {
  return isGameMode(gameMode) && gameMode === GameMode.PRIVACY;
}

function isGameModeElevationOfMlSec(gameMode: GameMode): boolean {
  return isGameMode(gameMode) && gameMode === GameMode.EOMLSEC;
}