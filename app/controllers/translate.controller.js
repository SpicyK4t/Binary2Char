(function () {
  'use strict';
  
  angular
    .module('translate-controller', ['translate-service'])
    .controller('TranslateController', ['$translate', 'TranslateService', translateController]);
  
  function translateController($translate, TranslateService) {
    var self = this;
    
    self.selectedLanguage = TranslateService.language;
    self.changeLanguage = changeLanguage;
    
    function changeLanguage(newLanguage) {
      if(TranslateService.changeLanguage(newLanguage))
        self.selectedLanguage = newLanguage;
    }
  }
  
})();