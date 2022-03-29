// Regex: Regular Expression: used in JavaScript to match patterns in strings

/**
 * Suite to learn regex https://regex101.com/
 */

/**
 * Rules for writing regular expressions:
 * 1. Use forward slashes (/) as the delimiter
 * 2. Use the escape character (\) to escape special characters
 * 3. Use the dot (.) to match any character except newline
 * 4. Use the asterisk (*) to match zero or more occurrences of the preceding character
 * 5. Use the plus sign (+) to match one or more occurrences of the preceding character
 * 6. Use the question mark (?) to match zero or one occurrences of the preceding character
 * 7. Use the caret sign (^) to match the begining of the string
 * 8. Use the dollar sign ($) to match the end of the string
 */

/**
 * Special characters:
 * \d: any digit      \d matches a digit (equivalent to [0-9])
 * \D: any non-digit  \D matches any character that's not a digit (equivalent to [^0-9])
 * \w: any word character     \w matches any word character (equivalent to [a-zA-Z0-9_])
 * \W: any non-word character \W matches any non-word character (equivalent to [^a-zA-Z0-9_])
 * \s: any whitespace character
 * \S: any non-whitespace character
 *  .:  matches any character except newline
 */


// let pattern = /^(https|http|ftp):\/\/[a-z]{4,}\.(com|in|org)$/;
let pattern = /^[A-Z]{3,}/

let string = "ftp://boardINFinity.in";

// console.log(pattern.test(string)); // true, because the string starts has this pattern and it is case sensitive
// console.log(string.match(pattern)); // will return null, if pattern is not found
// console.log(string.search(pattern)); // will return 0, if pattern is found, else it will return -1



/*
    password: Must be at least 8 characters, Start with a capital letter and end with a number
    // 1. password.length >= 8
    // 2. password[0] === password[0].toUpperCase()
    // 3. password[password.length - 1] === password[password.length - 1].toString()
*/


// let passwordString = 'Abc12345';
// let passwordPattern = /^[A-Z]\w{7,}$/; // regex pattern

// console.log(passwordPattern.test(passwordString));

/*
    email: Must be a valid email address, must contain an @ and should end with .com
    // 1. email.includes('@')
    // 2. email.endsWith('.com')
*/
