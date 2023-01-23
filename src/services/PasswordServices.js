export class PasswordServices {
  static getRandomSymbols() {
    let randomSymbols = Math.floor(Math.random());
  }
  static getRadomNumbers() {
    let randomNumbers = Math.floor(Math.random() * 10 + 48);
    return randomNumbers;
  }
}
