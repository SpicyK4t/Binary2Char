(function () {
  'use strict';
  
  angular
    .module('bin2char-translate', ['pascalprecht.translate'])
    .config(['$translateProvider', translateConfig]);
  
  var es_translations = {
    'ABOUT': 'Acerca de',
    'COPYRIGHT': 'Derechos reservados'
  };
  
  var en_translations = {
    'ABOUT': 'About',
    'COPYRIGHT': 'Copyright'
  };
  
  function translateConfig($translateProvider) {
    $translateProvider.translations('es', es_translations);
    $translateProvider.translations('en', en_translations);
    
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
  }
  
})();