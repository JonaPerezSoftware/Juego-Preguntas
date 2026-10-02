const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const basePath = `file://${path.resolve(__dirname).replace(/\\/g, '/')}`;
  const screenshotsDir = path.join(__dirname, 'screenshots');
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  // 1. Menú Principal
  await page.goto(`${basePath}/pagPrincipal.html`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotsDir, 'menu-principal.png') });
  console.log('Took menu-principal.png');

  // 2. Un Jugador
  await page.goto(`${basePath}/indexJP.html`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotsDir, 'un-jugador.png') });
  console.log('Took un-jugador.png');

  // 3. Registro de Jugadores
  await page.goto(`${basePath}/nombreVersus.html`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotsDir, 'registro-jugadores.png') });
  console.log('Took registro-jugadores.png');

  // 4. Modo Versus J1
  // We first load to set localStorage
  await page.goto(`${basePath}/pagPrincipal.html`);
  await page.evaluate(() => {
    localStorage.setItem('jugador1', 'Goku');
    localStorage.setItem('jugador2', 'Vegeta');
  });
  await page.goto(`${basePath}/versus.html`, { waitUntil: 'networkidle0' });
  // Wait a small amount for animations
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(screenshotsDir, 'versus-jugador1.png') });
  console.log('Took versus-jugador1.png');

  // 5. Modo Versus J2
  // Trigger player 2
  await page.evaluate(() => {
    avanzarTurno();
  });
  await new Promise(r => setTimeout(r, 500)); // wait for DOM update and animations
  await page.screenshot({ path: path.join(screenshotsDir, 'versus-jugador2.png') });
  console.log('Took versus-jugador2.png');

  await browser.close();
  console.log('All screenshots taken!');
})();
