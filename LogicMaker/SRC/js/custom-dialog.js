/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An example implementation of how one might replace Blockly's browser
 * dialogs. This is just an example, and applications are not encouraged to use
 * it verbatim.
 *
 * @namespace
 */
CustomDialog = {};

/** Override Blockly.alert() with custom implementation. */
Blockly.alert = function (message, callback) {

  Swal.fire('Oops...', message, 'error').then(() => {
    callback()
  })

};
/** Override Blockly.confirm() with custom implementation. */
Blockly.confirm = function (message, callback) {
  console.log('Confirm: ' + message);

  Swal.fire({
    title: 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      callback(true)
    } else {
      callback(false)
    }
  })
};

/** Override Blockly.prompt() with custom implementation. */
Blockly.prompt = function (message, defaultValue, callback) {
  console.log('Prompt: ' + message);

  Swal.fire({
    input: 'textarea',
    inputLabel: message,
    inputPlaceholder: defaultValue,
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  }).then((result) => {
    console.log(result)
    if (result.isConfirmed) {
      callback(result.value)
    } else {
      callback(null)
    }
  })
};
