import { jest } from '@jest/globals';
import { getCoordinates } from '../services/geolocationService.js';

global.fetch = jest.fn();

describe('getCoordinates', () => {
  it('deve retornar coordenadas corretas para uma cidade válida', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => [{
        lat: '10.0',
        lon: '20.0',
        name: 'Cidade Teste'
      }]
    });

    const coords = await getCoordinates('Cidade Teste');

    expect(coords).toEqual({
      latitude: '10.0',
      longitude: '20.0',
      name: 'Cidade Teste'
    });
  });

  it('deve lançar erro se a resposta da API for ruim', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    await expect(getCoordinates('Cidade Quebrada'))
      .rejects
      .toThrow('Erro ao consultar a API Nominatim.');
  });

  it('deve lançar erro se nenhuma cidade for encontrada', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => []
    });

    await expect(getCoordinates('Cidade Vazia'))
      .rejects
      .toThrow('Cidade não encontrada.');
  });
});
