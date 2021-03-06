# Loader4Js #


### What is this Loader4Js for? ###

Loader4Js is a simple JQuery plugin which allows you to decorate your different waiting times on your pages.

### Dependencies ###

Loader4Js only requires you to get a recent JQuery version.

### Instantiation ###

A basic instantiation of the Loader4Js with default options.

```
#!javascript

$('element').Loader4Js();
```

A more complex instantiation of the Loader4Js with custom options.

```
#!javascript

$('element').Loader4Js({
    text: 'Wait a moment',
    theme: 'popandturn',
    state: 'hidden'
});
```

### Basic manipulations ###

Some basic manipulations of our Loader4Js instance.

```
#!javascript

// Hide the loader
$('element').Loader4Js().hide();

// Show the loader
$('element').Loader4Js().show();

// Change the text
$('element').Loader4Js().setText('My new text');
```

### Some events ###

Loader4Js provides some events helping you to execute some logics.

```
#!javascript

$('#loader').Loader4Js({
    theme: 'popandturn',
    text: 'A moment please',
    state: 'hidden',
    onShow: function() {console.log('Showed !!');},
    onHide: function() {console.log('Hidden !!');}
});
```