# Loader4Js #


### What is this Loader4Js for? ###

Loader4Js is a simple JQuery plugin which allows you to decorate your different waiting times on your pages.

### How to get it working? ###

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

Some basic manipulations of the Loader4Js instance.

```
#!javascript

// Hide the loader
$('element').Loader4Js().hide();

// Show the loader
$('element').Loader4Js().show();

// Change the text
$('element').Loader4Js().setText('My new text');
```