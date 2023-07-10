# Movecashjs Library


## Installation

Use `npm` to install the Movecashjs module:

```sh
npm install movecashjs
```


Use `yarn` to install the Movecashjs module:

```sh
yarn add movecashjs
```

## Usage

### `initializeMoveCash`

This function returns a `Promise` that resolves with a `Movecash`
object once Movecashjs has loaded. 
It takes a public key as a parameter.

```js
import { initMoveCash } from 'movecashjs';

const moveCashInstance = await initMoveCash('movecash_pk_test_AKmml1kclK189q5NjT0cvB13s');
```
