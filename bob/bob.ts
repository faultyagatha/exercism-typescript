/** helpers */
const hasLetters = /[a-zA-Z]/;
const isSilence = (message: string): boolean => message === "";
const isQuestion = (message: string): boolean => message.slice(-1) === '?';
const isUpper = (message: string): boolean => {
  if (hasLetters.test(message)) {
    return message === message.toUpperCase();
  }
  return false;
}

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

/**
 * Alternative approach:
 *
 * const checklist = [{ rule: isSilence, response: 'Fine. Be that way!' }];

  ...

  checklist.forEach((item) => {
    if (item.rule(message)) {
      return item.response;
    }
  });

  return 'Whatever';
 */

