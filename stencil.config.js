exports.config = {
  namespace: 'input-cpf-cnpj',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};
