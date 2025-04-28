import { askQuestion } from '../utils/input.js';
import { getCoordinates } from '../services/geolocationService.js';
import { getWeather } from '../services/weatherService.js';
import logger from '../utils/logger.js';

async function consultWeatherState() {
  const queryFromUser = await askQuestion('Digite o nome da cidade: ');
  logger.info(`Usuário solicitou informações para: ${queryFromUser}`);
  logger.info(`Iniciando consulta de coordenadas na API Nominatim para: ${queryFromUser}`);

  try {
    const coords = await getCoordinates(queryFromUser);
    logger.info(`Coordenadas encontradas na Nominatim: latitude=${coords.latitude}, longitude=${coords.longitude}`);

    logger.info(`Iniciando consulta de clima na API Open-Meteo para latitude=${coords.latitude}, longitude=${coords.longitude}`);
    const temperature = await getWeather(coords.latitude, coords.longitude);
    logger.info(`Temperatura atual retornada pela Open-Meteo: ${temperature}°C`);

    console.log(`\nCidade: ${coords.name}`);
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Temperatura atual: ${temperature}°C`);
  } catch (error) {
    logger.error(`Erro durante consulta: ${error.message}`);
    console.log('Não foi possível obter informações para essa consulta. Verifique a cidade digitada ou tente novamente mais tarde.', error.message);
  }

  return 'mainMenuState';
}

export { consultWeatherState };
