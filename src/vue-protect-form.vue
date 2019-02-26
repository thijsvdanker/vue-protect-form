<script>
  export default {
    name: 'vue-protect-form',
    props: {
      trackHiddenInputs: {
        type: Boolean,
        default: false
      },
      trackPasswordInputs: {
        type: Boolean,
        default: false
      },
      customFields: {
        type: Array,
        default: () => { return []; }
      }
    },
    data () {
      return {
        isChanged: false,
        isSubmit: false,
        changedFields: []
      };
    },
    render () {
      return this.$slots.default[0];
    },
    created () {
      window.onbeforeunload = this.leaving;
    },
    mounted () {
      this.addSubmitListenerToForm();
      this.addListenersToFormFields();
    },
    computed: {
      checkableFields () {
        return this.$el.querySelectorAll(this.buildQuery());
      },
      form () {
        return this.$el;
      },
      additionalConditions () {
        const conditions = [];
        if (!this.trackPasswordInputs) {
          conditions.push(':not([type="password"])');
        }
        if (!this.trackHiddenInputs) {
          conditions.push(':not([type="hidden"])');
        }
        return conditions;
      },
      customFieldElements () {
        return this.customFields.map((field) => {
          return field.element;
        });
      }
    },
    methods: {
      leaving () {
        if (this.isChanged && !this.isSubmit) {
          return '';
        }
      },
      buildQuery () {
        const elementsToCheck = ['input', 'select', 'textarea', 'trix-editor'].concat(this.customFieldElements);

        elementsToCheck.forEach((tag, index, array) => {
          array[index] += this.additionalConditions.join('');
        });

        return elementsToCheck.join(',');
      },
      storeOrigValue (field) {
        const value = this.getValueHTMLElement(field);
        field.setAttribute('data-protect-orig', value);
      },
      updateChangedFields (field) {
        const oldValue = field.getAttribute('data-protect-orig');
        const newValue = String(this.getValueHTMLElement(field));

        if (this.changedFields.indexOf(field) === -1) {
          if (oldValue !== newValue) {
            this.changedFields.push(field);
          }
        } else {
          if (oldValue === newValue) {
            this.changedFields.splice(this.changedFields.indexOf(field), 1);
          }
        }
      },
      updateIsChanged () {
        if (this.changedFields.length !== 0) {
          this.setFormToChanged();
        } else {
          this.setFormToNotChanged();
        }
      },
      addListenersToFormFields () {
        // Use Array.prototype.forEach on a nodeList to support IE (see https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Example)
        Array.prototype.forEach.call(this.checkableFields, (field) => {
          this.storeOrigValue(field);

          const eventName = this.getAppropiateEvent(field);
          field.addEventListener(eventName, () => {
            this.updateChangedFields(field);
            this.updateIsChanged();
          });
        });
      },
      getAppropiateEvent (field) {
        if (this.fieldIsDefinedInCustomFields(field)) {
          this.getEventForCustomField(field);
        }
        if (field.addEventListener) {                    // For all major browsers, except IE 8 and earlier
          return 'input';
        } else if (field.attachEvent) {                  // For IE 8 and earlier versions
          return 'onpropertychange';
        }
      },
      fieldIsDefinedInCustomFields (field) {
        return field.nodeName.toString().toLowerCase() in this.customFieldElements;
      },
      getEventForCustomField (field) {
        return this.customFields.find((customField) => {
          return customField.element === field.nodeName.toString().toLowerCase();
        }).event;
      },
      addSubmitListenerToForm () {
        this.form.addEventListener('submit', () => {
          this.isSubmit = true;
        });
      },
      setFormToChanged () {
        this.isChanged = true;
      },
      setFormToNotChanged () {
        this.isChanged = false;
      },
      getValueHTMLElement (element) {
        let type = element.tagName.toLowerCase();

        if (type === 'input') {
          type = element.type;
        }

        switch (type) {
          case 'checkbox':
          case 'radio':
            return element.checked;
          case 'select':
            return element.options[element.selectedIndex].value;
          default:
            return element.value;
        }
      }
    }
  };
</script>
