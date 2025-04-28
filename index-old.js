const r = require('readline');
const i = r.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Oi, vai querer o quê?');

console.log('\n[1] Ver clima\n[2] Vazar');

i.question('Manda aí: ', (x) => {
  if (x == '1') {
    i.question('Nome da city: ', async (y) => {
      try {
        const z = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(y)}&format=json&limit=1`;
        const a = await fetch(z, { headers: { 'User-Agent': 'chatbot' } });
        if (!a.ok) {
          console.log('Falhou na API');
          i.close();
          return;
        }
        const b = await a.json();
        if (b.length == 0) {
          console.log('Nada erro');
          i.close();
          return;
        }
        console.log(`Local: ${y}`);
        console.log(`LAT: ${b[0].lat}`);
        console.log(`LON: ${b[0].lon}`);
        console.log('\n[1] Ver clima\n[2] Vazar');
        i.question('De novo: ', (xx) => {
          if (xx == '1') {
            console.log('Reinicia e tenta dnv');
            process.exit();
          } else {
            console.log('Falou!');
            i.close();
          }
        });
      } catch (e) {
        console.log('Deu ruim:', e.message);
        i.close();
      }
    });
  } else {
    console.log('Falou!');
    i.close();
  }
});
