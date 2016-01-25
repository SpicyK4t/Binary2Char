(function () {
  'use strict';
  
  angular
    .module('translate-service', [])
    .service('TranslateService', ['$locale', '$translate', translateService]);
  
  function translateService($locale, $translate) {
    // Start of variable declarations
    var self = this;
    self.language = getLocalLanguage(); // load locale default language
    // End of variable declarations
    
    // Start of function declarations
    self.changeLanguage = changeLanguage;
    // End of function declarations
    
    // Start of functions
    function getLocalLanguage() {
      var localeId = ($locale.id).substring(0, 2);
      // Ejm $locale.id result = 'en-US' with substring the result is 'en' instead of 'en-US'
      
      // Only supports english or spanish
      if(localeId === 'en' || localeId === 'es')
        return localeId;
      else 
        return 'en';
    }
    
    function changeLanguage(newLanguage) {
      // Change current language if it's supported
      if(newLanguage === 'es' || newLanguage === 'en') {
        self.language = newLanguage;
        $translate.use(self.language);
        return true;
      }
      return false;
    }
    // End of functions
  }
  
})();