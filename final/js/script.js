
 function askName () {
        var nameReturn = document.getElementById('ask-name');
        var name = prompt('enter name here.');
        if (name == '') {
            alert('you messed this up somehow. try again');
        } else {
          nameReturn.innerHTML= 'Hello ' + name + '. I hope you find these resources helpful';
        }

       }

      