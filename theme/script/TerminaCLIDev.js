// Opis - biały tekst na czarnym tle
console.log(
    '%c UWAGA: To jest konsola deweloperska. Nie wklejaj tutaj żadnych kodów, jeśli nie wiesz, co robisz!',
    'background: #000; color: #fff; font-size: 16px; padding: 4px;'
);


const ascii = `
███╗   ██╗███████╗ ██████╗ ███╗   ██╗
████╗  ██║██╔════╝██╔═══██╗████╗  ██║
██╔██╗ ██║█████╗  ██║   ██║██╔██╗ ██║
██║╚██╗██║██╔══╝  ██║   ██║██║╚██╗██║
██║ ╚████║███████╗╚██████╔╝██║ ╚████║
╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝`;

console.log(
    `%c${ascii}`,
    `
  color: #39ff14;
  text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14;
  font-weight: bold;
  font-size: 14px;
  background: #000;
  padding: 8px;
  `
);
