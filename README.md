# Functional Arrays (_functional-arrays_)

For all your array functional needs!

Have you heard about functional programming and curry? Do you also detest the thoughts of those pesky parenthesis? Then you've come to the right place!

Introducing "functional arrays" – a new way to call functions.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Limitations](#limitations)
- [FAQ](#faq)
- [License](#license)

## Background

I've always been a fan of Javascript, but I've always felt there was something that just wasn't right, something just didn't resonate with me.
After years of working with Javascript through think and thin, through difficult times, and through fun times, it finally hit me!

What Javascript (and a lot of other programming languages) is not understanding with it's narrow-minded design approach to the language is: parenthesis are evil. And far less superior to it's much more versatile cousin; the curly brackets.

This library is a start to bring back harmony into this world we Javascript developers have to live through. It's not solving all the issues sadly (see [Limitations](#limitations)), but it's a beginning of something bigger.

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

It's as simple as importing the `createArrayFunction` from the _functional-arrays_ package.

```typescript
import { createArrayFunction } from 'functional-arrays'

const greeter = (name: string, country: string): string => {
  return `Hello ${name} from ${country}!`
}

const superAwesomeGreeter = createArrayFunction[greeter]

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
