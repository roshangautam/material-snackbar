# material-snackbar
A css/js material snackbar

Demo: http://codepen.io/roshangautam/pen/aNEWbE

This is based on the work from the following codepen 
http://codepen.io/wibblymat/pen/avAjq

##usage
```
var longMessage = "This is a longer message that won't fit on one line. It is, inevitably, quite a boring thing. Hopefully it is still useful.";
var shortMessage = 'Your message was sent';

document.getElementById('single').addEventListener('click', function() {
  createSnackbar(shortMessage);    
});

document.getElementById('multi').addEventListener('click', function() {
  createSnackbar(longMessage);    
});

document.getElementById('singleaction').addEventListener('click', function() {
  createSnackbar(shortMessage, 'Dismiss');    
});

document.getElementById('multiaction').addEventListener('click', function() {
  createSnackbar(longMessage, 'Wot?', function() { alert('Moo!'); });    
});
```
