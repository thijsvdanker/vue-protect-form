---
title: Properties
lang: en-US
---

## trackHiddenInputs
- type: *Boolean*
- default: *false*
<br><br>
When set to true, the hidden inputs are tracked and protected as well.
<br>
```js
<vue-protect-form :track-hidden-inputs=true>
```


## trackPasswordInputs
- type: *Boolean*
- default: *false*
<br><br>
When set to true, the hidden inputs are tracked and protected as well.
<br>
```js
<vue-protect-form :track-password-inputs=true>
```

## customFields
- type: *Array*
- default: *[]*
<br><br>
To add support for custom elements (like custom Vue components), you can use the *customFields* property.
The customFields property expects an Array of Objects.
The object should contain 2 keys:
 1. **element**: name of the element as it results in the rendered HTML
 2. **event**: event that's triggered when the element has changed
<br>

An example for the [Trix Editor](https://trix-editor.org/) would be:
```js
<vue-protect-form :custom-fields="[{ element: 'trix-editor', event: 'trix-change' }]">
```

