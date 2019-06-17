'use strict';
(function() {
  // add event listener to form elements
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      document.querySelector('form').onchange = allowSubmit;
      document.getElementById('file').onchange = checkFile;
    },
    false
  );

  function errorMessage(id, msg) {
    var errorP = document.getElementById(id);
    errorP.classList.add('show-error');
    errorP.classList.remove('hide-error');
    errorP.innerHTML = msg;
  }

  function removeErrorMessage(id) {
    var errorP = document.getElementById(id);
    errorP.classList.add('hide-error');
    errorP.classList.remove('show-error');
  }

  function allowSubmit() {
    // if all inputs have some value abilitate submit button
    var radioYes = document.getElementById('extraField-1__Yes'),
      radioNo = document.getElementById('extraField-1__No');

    var firstName = document.getElementById('firstName').value,
      lastName = document.getElementById('lastName').value,
      email = document.getElementById('email').value,
      emailConfirm = document.getElementById('emailconfirm').value,
      city = document.getElementById('city').value,
      country = document.getElementById('extraField0').value,
      file = document.getElementById('file').value,
      rightToWork = radioYes.checked || radioNo.checked ? 'true' : '';

    var inputs = [
      firstName,
      lastName,
      email,
      emailConfirm,
      city,
      country,
      rightToWork,
      file
    ];
    var check = 0;

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i] != '') {
        check++;
      }
    }

    if (check === inputs.length) {
      document.querySelector('#submitApplicationNow').disabled = false;
    } else {
      document.querySelector('#submitApplicationNow').disabled = true;
    }
  }

  // check file
  function checkFile() {
    var files = event.target.files;
    console.log(event);
    // When the file has changed, there are new files
    for (var i = 0; i < files.length; i++) {
      // check file size: 2e+6 = 2Mb  3e+6 = 3Mb
      if (files[i].size > 2e6) {
        event.target.value = '';
        // return error to user: Size Error!
        errorMessage('ErrorFile', 'Your file size is too big! Max Size: 2Mb');
      }

      // check blob:
      var blob = files[i]; // See step 1 above

      var fileReader = new FileReader();
      fileReader.onloadend = function(e) {
        var arr = new Uint8Array(e.target.result).subarray(0, 4);
        var header = '';
        for (var i = 0; i < arr.length; i++) {
          header += arr[i].toString(16);
        }
        console.log(header);

        if (header === '25504446' || header === '504b34') {
          removeErrorMessage('ErrorFile');
        } else {
          event.target.value = '';
          // return error to user: Wrong Type!
          errorMessage(
            'ErrorFile',
            'Your file type is not accepted! Please upload a .pdf or .doc file!'
          );
        }
      };
      fileReader.readAsArrayBuffer(blob);
    }
  }
  // Reference:
  var refInput = document.querySelector('#reference > .inputBoxNormal');
  if (refInput) {
    refInput.value = (function getCookie(a) {
      var b = '; ' + document.cookie,
        c = b.split('; ' + a + '=');
      if (2 == c.length)
        return c
          .pop()
          .split(';')
          .shift();
    })('ref');
  }
})();

/* Set the action of the DOM container */
// function setSubAction(action) {
//     var obj = document.getElementById('applyToJobSubAction');
//     if (obj) {
//         obj.value = action;
//     }
// }

/* Check if there's a resume to upload */
// function resumeLoadCheck() {
//     var fileInput = document.getElementById('resumeFile');
//     var parseButton = document.getElementById('resumePopulate');
//     var resumeUpload = document.getElementById('resumeLoad');

//     resumeUpload.disabled = (fileInput.value).length ? false : true;
//     if (parseButton) {
//         parseButton.disabled = (fileInput.value).length ? false : true;
//     }
// }

/* Load the contents of the uploaded file into the textarea box */
// function resumeLoadFile() {
//     setSubAction('resumeLoad');
//     document.applyToJobForm.submit();
// }

// function resumeParse() {
//     var fileInput = document.getElementById('resumeFile');
//     var resumeContents = document.getElementById('resumeContents');
//     if ((resumeContents.value).length || (fileInput.value).length) {
//         setSubAction('resumeParse');
//         document.applyToJobForm.submit();
//     }
// }

// function resumeContentsChange(e) {
//     var parseButton = document.getElementById('resumePopulate');
//     var fileInput = document.getElementById('resumeFile');
//     if (parseButton) {
//         parseButton.disabled = !(e.value).length && !(fileInput.value).length ? true : false;
//     }
// }

/* Preload default career portal images (should move to template) */

// function buttonMouseOver(ename, tf) {
//     var e = document.getElementById(ename);
//     var tag;
//     if (tf) {
//         tag = 'On';
//     }
//     else {
//         tag = 'Off';
//     }
//     eval('e.src = ' + ename + tag + '.src');
// }

// function onFocusFormField(e) {
//     var isNewNo = document.getElementById('isNewNo');

//     if (e.id != 'email') {
//         if (!isNewNo.checked) {
//             isNewNo.checked = true;
//         }
//     }
// }

// function focusFirstField() {
//     var inputs = document.getElementsByTagName('input');
//     var emailTabIndex = -1;
//     var nextObjDist = -1;
//     var nextObj = 0;
//     var dist;

//     // Get the tabIndex for the required e-mail field
//     for (var i = 0; i < inputs.length; i++) {
//         if (inputs[i].id == 'email') {
//             emailTabIndex = inputs[i].tabIndex;
//         }
//     }

//     // If there is no e-mail field, we can't do anything
//     if (emailTabIndex == -1) return;

//     // Get the next closest
//     for (var i = 0; i < inputs.length; i++) {
//         if (inputs[i].id != 'email' && inputs[i].type == 'text') {
//             dist = Math.abs(emailTabIndex - inputs[i].tabIndex);
//             if (nextObjDist == -1 || dist < nextObjDist) {
//                 nextObjDist = dist;
//                 nextObj = inputs[i];
//             }
//         }
//     }

//     if (nextObj) {
//         nextObj.focus();
//         nextObj.select();
//     }
// }

// function enableFormFields(tf) {
//     var inputs = document.getElementsByTagName('input');
//     var rememberMe = document.getElementById('rememberMe');

//     if (rememberMe) {
//         rememberMe.disabled = !tf;
//     }

//     for (var i = 0; i < inputs.length; i++) {
//         if (inputs[i].id != 'email' && inputs[i].type == 'text') {
//             inputs[i].disabled = !tf;
//         }
//     }
// }

// function isCandidateRegisteredChange() {
//     var isNewYes = document.getElementById('isNewYes');
//     var isNewNo = document.getElementById('isNewNo');

//     if (isNewYes.checked) {
//         enableFormFields(false);
//     }
//     else {
//         enableFormFields(true);
//         focusFirstField();
//     }
// }

// function validateCandidateRegistration() {
//     var obj;
//     var isNewObj = document.getElementById('isNewYes');
//     var isNew = isNewObj ? isNewObj.checked : false;

//     var formFields = [
//         'firstName', 'lastName', 'zipCode', 'address', 'city', 'state', 'homePhone',
//         'mobilePhone', 'workPhone'
//     ];

//     // E-mail address is the only required field regardless of registered/unregistered
//     if (obj = document.getElementById('email')) {
//         if (!(obj.value).match(/^[A-Za-z0-9\.\-\_]+\@[A-Za-z0-9\.\-\_]+\.[A-Za-z0-9]{2,6}$/)) {
//             obj.style.backgroundColor = '#FDF0F0';
//             alert('Please enter a valid e-mail address.');
//             return false;
//         }
//     }

//     if (!isNew) {
//         var error = false;
//         for (var fieldIndex = 0; fieldIndex < formFields.length; fieldIndex++) {
//             if (obj = document.getElementById(formFields[fieldIndex])) {
//                 if (!(obj.value).length) {
//                     obj.style.backgroundColor = '#FDF0F0';
//                     error = true;
//                 }
//             }
//         }
//         if (error) {
//             alert("Because you have registered before, please complete all the fields to login.\n\nIf you haven\'t registered before, please select \"I have not registered on this website\".");
//             return false;
//         }
//     }

//     return true;
// }
