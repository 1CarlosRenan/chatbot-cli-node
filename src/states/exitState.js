import { closeInput } from '../utils/input.js';
import logger from '../utils/logger.js';

function exitState() {
  logger.info('Usuário escolheu sair. Encerrando chatbot.');
  console.log('Obrigado por usar o chatbot. Até mais!');
  closeInput();
}

export { exitState };
