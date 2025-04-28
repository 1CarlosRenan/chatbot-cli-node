import { askQuestion } from '../utils/input.js';
import logger from '../utils/logger.js';

async function mainMenuState() {
  logger.info('Exibindo menu principal.');

  console.log('\nO que você deseja fazer?');
  console.log('[1] Consultar clima');
  console.log('[2] Sair');

  const option = await askQuestion('Escolha uma opção: ');

  logger.info(`Usuário escolheu opção: ${option}`);

  if (option === '1') {
    return 'consultWeatherState';
  } else if (option === '2') {
    return 'exitState';
  } else {
    logger.error('Opção inválida selecionada.');
    console.log('Opção inválida. Tente novamente.');
    return 'mainMenuState';
  }
}

export { mainMenuState };
