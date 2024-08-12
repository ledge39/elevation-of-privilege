import { DEFAULT_START_SUIT, GameMode } from '@eop/shared';
import React from 'react';
import ReactDOM from 'react-dom';
import { it } from 'vitest';

import Deck from './deck';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Deck
      suit={DEFAULT_START_SUIT}
      cards={[]}
      isInThreatStage={true}
      round={0}
      current={false}
      active={false}
      onCardSelect={() => {
        /* do nothing */
      }}
      startingCard="T3"
      gameMode={GameMode.EOP}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders active card correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Deck
      suit={DEFAULT_START_SUIT}
      cards={['T3', 'S2']}
      isInThreatStage={true}
      round={0}
      current={true}
      active={true}
      onCardSelect={() => {
        /* do nothing */
      }}
      startingCard="T3"
      gameMode={GameMode.EOP}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

// TODO: Test card renders correctly for cornucopia as well
