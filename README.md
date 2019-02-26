# vue protect form [![CircleCI](https://circleci.com/gh/thijsvdanker/vue-protect-form.svg?style=svg)](https://circleci.com/gh/thijsvdanker/vue-protect-form)

## Install
You can install it via NPM
```bash
npm install @thijsvdanker/vue-protect-form --save
```

## How to use
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


