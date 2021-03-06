# vue protect form [![CircleCI](https://circleci.com/gh/thijsvdanker/vue-protect-form.svg?style=svg)](https://circleci.com/gh/thijsvdanker/vue-protect-form)[![npm](https://img.shields.io/npm/v/@thijsvdanker/vue-protect-form.svg)](https://www.npmjs.com/package/@thijsvdanker/vue-protect-form)

Protects users from leaving a form with changes by showing a dialog.

## Install
You can install it via NPM
```bash
npm install @thijsvdanker/vue-protect-form --save
```

### Usage
Include plugin in your `main.js` file.
```javascript
import VueProtectForm from 'vue-protect-form'

Vue.use(VueProtectForm)
```

To protect a form, wrap the form with a `<vue-protect-form>` tag.<br>
Example:
```js
<vue-protect-form>
    <form method="POST" action="/">
        <input type="text" name="foo">
    </form>
</vue-protect-form>
```

## Documentation
For documentation about properties and usage checkout the [docs](https://thijsvdanker.github.io/vue-protect-form/)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](./LICENSE.md)
