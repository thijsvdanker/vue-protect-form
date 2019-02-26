---
title: Usage
lang: en-US
---

# Usage
## Import
To use Vue Protect Form, import the component for your Vue application / component.
```js
import VueProtectForm from '@thijsvdanker/vue-protect-form';
Vue.use(VueProtectForm);
```
## Use
To protect a form, wrap the form with a `<vue-protect-form>` tag.<br>
Example:
```js
<vue-protect-form>
    <form method="POST" action="/">
        <input type="text" name="foo">
    </form>
</vue-protect-form>
```
