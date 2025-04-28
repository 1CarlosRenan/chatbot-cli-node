import logger from '../utils/logger.js';
import { config } from './config.js';

async function getCoordinates(city) {
  const API_URL = config.services.openStreetMap;
  const url = `${API_URL}/search?q=${encodeURIComponent(city)}&format=json&limit=1`;

  logger.info(`Enviando requisição para Nominatim: ${url}`);

  const response = await fetch(url);

  logger.info(`Recebida resposta da Nominatim. Status: ${response.status}`);

  if (!response.ok) {
    logger.error(`Erro na resposta da Nominatim. Status: ${response.status}`);
    throw new Error('Erro ao consultar a API Nominatim.');
  }

  const data = await response.json();
  logger.info(`Resposta da Nominatim: ${JSON.stringify(data)}`);

  if (data.length === 0) {
    logger.error('Nenhuma cidade encontrada na resposta da Nominatim.');
    throw new Error('Cidade não encontrada.');
  }

  const { lat, lon, name } = data[0];
  logger.info(`Cidade encontrada: ${name}, Latitude: ${lat}, Longitude: ${lon}`);

  return { latitude: lat, longitude: lon, name: name };
}

export { getCoordinates };
