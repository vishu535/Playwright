class CommonFunctions{
    generateRandomNumber() {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    }

    radomAlpha() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
      
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * alphabet.length);
          result += alphabet.charAt(randomIndex);
        }
      
        return result;
      }
}
export{CommonFunctions};
