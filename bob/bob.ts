/** helpers */
const isQuestion = (message: string): boolean => message.slice(-1) === '?';

const isUpper = (message: string): boolean => message === message.toUpperCase();

const isSilence = (message: string): boolean => message === " ";

const hasLetters = /[^\W\d_]+/g;

export function hey(message: string): string {
  //preprocess the string
  message = message.trim();


  switch (true) {
    case isSilence(message):
      return "Fine. Be that way!";
    case isUpper(message) && !isQuestion(message):
      return "Whoa, chill out!";
    case isQuestion(message) && !isUpper(message):
      return 'Sure.';
    case isUpper(message) && isQuestion(message):
      return "Calm down, I know what I'm doing!";
    default:
      return "Whatever."
  }
}

