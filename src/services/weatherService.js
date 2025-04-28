import logger from '../utils/logger.js';
import { config } from './config.js';

async function getWeather(latitude, longitude) {
  const API_URL = config.services.openMeteo;
  const url = `${API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  logger.info(`Enviando requisição para Open-Meteo: ${url}`);

  const response = await fetch(url);

  logger.info(`Recebida resposta da Open-Meteo. Status: ${response.status}`);

  if (!response.ok) {
    logger.error(`Erro na resposta da Open-Meteo. Status: ${response.status}`);
    throw new Error('Erro ao consultar a API de clima.');
  }

  const data = await response.json();
  logger.info(`Resposta da Open-Meteo: ${JSON.stringify(data)}`);

  if (!data.current_weather) {
    logger.error('Dados de clima não encontrados na resposta da Open-Meteo.');
    throw new Error('Dados de clima não encontrados.');
  }

  const temperature = data.current_weather.temperature;
  logger.info(`Temperatura atual retornada pela Open-Meteo: ${temperature}°C`);

  return temperature;
}

export { getWeather };
