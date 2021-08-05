// Import the js file to test
import { checkUrl } from '../src/client/js/urlChecker';

describe('Testing the checkUrl functionality', () => {
  test('Testing the checkUrl() function', () => {
    const formUrl = [
      '',
      'test',
      'ww.google.com',
      'www.google/search?q=happy',
      '//www.google.com/search?q=happy',
      'htt://www.google.com/search?q=happy',
      'http://www.google.com/search?q=happy',
      'https://www.google.com/search?q=happy',
    ];

    expect(checkUrl(formUrl[0])).toBe('Invalid URL');
    expect(checkUrl(formUrl[1])).toBe('Invalid URL');
    expect(checkUrl(formUrl[2])).toBe('Invalid URL');
    expect(checkUrl(formUrl[3])).toBe('Invalid URL');
    expect(checkUrl(formUrl[4])).toBe('Ok');
    expect(checkUrl(formUrl[5])).toBe('Ok');
    expect(checkUrl(formUrl[6])).toBe('Ok');
  });
});
