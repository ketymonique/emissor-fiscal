const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Dashboard',
  // '/emissor-fiscal_html/default' : 'default',
  '/default' : 'default',

  '/cfop/cadastro' : 'Cadastro de Cfop',
  '/cfop/consulta': 'Consulta de Cfop',

  '/ncm/cadastro' : 'Cadastro de NCM',
  '/ncm/consulta': 'Consulta de NCM',
  '/ncm/modal-add-ncm' : 'Modal add ncm',

  '/estado/cadastro' : 'Cadastro de Estado',
  '/estado/consulta': 'Consulta de Estado',

  '/operacao/cadastro' : 'Cadastro de Operação',
  '/operacao/consulta': 'Consulta de Operação',
  '/operacao/modal-deletar': 'modal-deletar',

  '/tributacao-estadual/cadastro' : 'Cadastro de ICMS',
  '/tributacao-estadual/consulta': 'Consulta de ICMS',

  '/tributacao-estadual-guia/cadastro' : 'Cadastro de tributação estadual - (GUIA)',
  '/tributacao-estadual-guia/consulta': 'Consulta de tributação estadual - (GUIA) ',
  '/tributacao-estadual-guia/email-calculo-icms-st-entrada' : 'email-calculo-icms-st-entrada',

  '/tributacao-federal/cadastro' : 'Cadastro de tributação federal',
  '/tributacao-federal/consulta': 'Consulta de tributação federal',
  'blank': 'Blank',
  // 'buttons': 'Buttons',
  // 'calendar': 'Calendar',
  // 'charts': 'Charts',
  // 'chat': 'Chat',
  // 'compose': 'Compose',
  // 'datatable': 'Datatable',
  // 'email': 'Email',
  // 'forms': 'Forms',
  // 'google-maps': 'Google Maps',
  // 'signin': 'Signin',
  // 'signup': 'Signup',
  // 'ui': 'UI',
  // 'vector-maps': 'Vector Maps',
  // '404': '404',
  // '500': '500',
  // 'basic-table': 'Basic Table',
  // 'test': 'Test',
};

module.exports = Object.keys(titles).map(title => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    // filename: `${title}.html`,
    filename: path.join( manifest.paths.build,`${title}.html`),
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  });
});
