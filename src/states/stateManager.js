import { mainMenuState } from './mainMenuState.js';
import { consultWeatherState } from './consultWeatherState.js';
import { exitState } from './exitState.js';

const allStates = {
  mainMenuState,
  consultWeatherState,
  exitState
};

let currentState = allStates.mainMenuState;

async function start() {
  while (true) {
    const nextStateName = await currentState();

    const nextState = allStates[nextStateName];

    if (!nextState) {
      console.error(`Estado desconhecido: ${nextStateName}`);
      break;
    }

    currentState = nextState;
  }
}

export { start };
