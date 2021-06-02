
const modules = {};

const request = require.context('./', false, /\.store\.ts$/);

request.keys().forEach(moduleName => {
  const name = moduleName.replace(/(\.\/|\.store\.ts)/g, '');
  modules[name] = request(moduleName).default || request(moduleName);
});

export default modules;