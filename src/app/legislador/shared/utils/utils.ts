export default class utilities {
    static isUndefOrEmpty = function (str: string) {
      if (str === undefined || str === "" || str === null) return true;
      else return false;
    };
  
    static parseIfJson(data: string) {
      if (Number(data)) {
        return data;
      } else {
        try {
          return JSON.parse(data);
        } catch {
          return data;
        }
      }
    }
    static capitalize(word: string) {
      return word[0].toUpperCase() + word.slice(1);
    }
  
    static lowerCase(word: string) {
      return word[0].toLowerCase() + word.slice(1);
    }
    static unCamelCase(string: string) {
      if (!string) return null;
  
      return string.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
        return str.toUpperCase();
      });
    }
  
    static monthDiff(dateInicial: Date, dateFinal: Date) {
      let months;
      months = (dateFinal.getFullYear() - dateInicial.getFullYear()) * 12;
      months -= dateInicial.getMonth();
      months += dateFinal.getMonth();
      return months <= 0 ? 0 : months;
    }
  
    static getInitialsAttribute(val: string) {
      let nameWords = val.split(" ");
      let initials = nameWords[0][0];
      if (nameWords.length > 1) {
        initials = initials + nameWords[1][0];
      }
      return initials;
    }
    static dayDiff(dateInicial: Date, dateFinal: Date) {
      let days;
      days = (dateFinal.getTime() - dateInicial.getTime()) / (1000 * 3600 * 24);
      return days < 1 ? 0 : Math.trunc(days);
    }
  
    static catchErrorFunction(error: any){
      error = error.error.messages
      let errors = error.map((item: { value: any; })=>item.value);
      return errors
    }
  
    /*static isMobile() {
      if ($(window).width() as number > 800) {
        return false;
      }
      return true;
    }*/
  
    
  
    static getCurrentDateInYYYYMMDD() {
      var rightNow = new Date();
      var res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
      return res;
    }
  
    
  
  
  }