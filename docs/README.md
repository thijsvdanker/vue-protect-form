# Vue Protect Form

The *Vue Protect Form* component protects users from leaving forms that have changed.
It tracks the input fields and throws an alert when the user navigates away.

## Supported elements
It currently supports the following default form elements:
 - `<input>`
 - `<select>`
 - `<textarea>`

By default, *hidden* inputs and *password* inputs are not tracked for protection.
This can be enabled through [properties](/usage/properties.md).

## Custom elements
You can also add protection for custom (Vue) components through the [customFields property](/usage/properties.html#customfields)
