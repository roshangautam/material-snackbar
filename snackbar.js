/* This is a prototype */
var createSnackbar = (function() {
  // Any snackbar that is already shown
  var snackbars = [];
  
  return function(message, actionText, action) {

    var snackbar = document.createElement('div');
    snackbar.className = 'paper-snackbar';
    snackbar.dismiss = function() {
      this.style.opacity = 0;
    };
    var text = document.createTextNode(message);
    snackbar.appendChild(text);
    if (actionText) {
      if (!action) {
        action = snackbar.dismiss.bind(snackbar);
      }
      var actionButton = document.createElement('button');
      actionButton.className = 'action';
      actionButton.innerHTML = actionText;
      actionButton.addEventListener('click', action);
      snackbar.appendChild(actionButton);
    }
    setTimeout(function() {
      this.dismiss();
      snackbars.remove(this);      
    }.bind(snackbar), 5000);
    
    snackbar.addEventListener('transitionend', function(event, elapsed) {
      if (event.propertyName === 'opacity' && this.style.opacity == 0) {
        this.parentElement.removeChild(this);
        snackbars.remove(this);
      }
    }.bind(snackbar));

    
    snackbars.push(snackbar);
    
    document.body.appendChild(snackbar);
    // In order for the animations to trigger, I have to force the original style to be computed, and then change it.
    getComputedStyle(snackbar).bottom;

    snackbars.forEach(function(item, index) {
      if(snackbars.length == 1) snackbars[index].style.bottom = '0px';
      else snackbars[index].style.bottom = (snackbars.length - (index + 1) ) * (snackbars[index].offsetHeight + 10) + 'px'; 
    });
    snackbar.style.opacity = 1;
    count ++;
  };
})();

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};