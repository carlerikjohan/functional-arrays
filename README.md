# Functional Arrays (_functional-arrays_)

For all your array functional needs!

Do you like functional programming and curry functions? Do you also detest the thought of those pesky parenthesis? Then you've come to the right place!

Introducing "functional arrays" – a new way to call functions.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Limitations](#limitations)
- [FAQ](#faq)
- [License](#license)

## Background

Every since I can remember I have been a fan of Javascript, but recently I felt like something was missing, there was just something just didn't resonate with me.
After years of working with Javascript through thick and thin, through difficult and fun times, it finally hit me!

What Javascript, and a lot of other programming languages, are not understanding with it's narrow-minded and petty design approach for the language is: parenthesis are evil. And far less superior to it's much more versatile cousin; the curly brackets.

This library is a start to bring back harmony into this world we Javascript developers have to live in. It's not solving all the issues sadly (see [Limitations](#limitations)), but it's a beginning of something bigger, a step towards a world we can see ourselves living in – together!

## Install

All you have to do to install _functional-arrays_ and start your journey towards greatness is to run the following command if you are using [Yarn](https://yarnpkg.com/):

```console
$ yarn add functional-arrays
```

or if you are using [NPM](https://www.npmjs.com/)

```console
$ npm install --save functional-arrays
```

## Usage

It's as simple as importing the `createArrayFunction` from the _functional-arrays_ package and using it as follows:

```typescript
import { createArrayFunction } from 'functional-arrays'

const greeter = (name: string, country: string): string => {
  return `Hello ${name} from ${country}!`
}

const superAwesomeGreeter = createArrayFunction(greeter)

const output = superAwesomeGreeter['Johan']['Sweden']

console.log(output) // "Hello Johan from Sweden!"
```

## Limitations

Due to Javascript being non-believers in the "no parenthesis movement" there are limitations, the most prominent one is that indexes for arrays or objects (even if given as numbers or symbols) are in the end strings, meaning all our parameters needs to be strings.
But fear not, we can utilize such amazing (but parenthesized) functions such as `Number.parseInt()`, `JSON.stringify()`, and `JSON.parse()`.

We hope that one day Javascript realizes the mistakes it is doing with forcing this limitation and utter nonsense upon us.

## FAQ

### 1. Why?

Yes.

## License

[MIT © Johan Jansson](../LICENSE)
