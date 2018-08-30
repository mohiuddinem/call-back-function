// call back function

function callMe(name, cb){
 
    console.log('hellow' + name);
    console.log('your name has '+ name.length + ' charecter');

    doSomething(name)
    
}

function doSomething(name){
    var newName = name.split('').join('-');
    console.log(newName);
}

callMe('mmoris')