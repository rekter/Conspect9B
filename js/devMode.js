var pass                        = prompt('Type a password:');
var succpass                    = 13373006;

function passwordType(pass, succpass) {
    if (pass == succpass) {
        alert('Access success');
    } else if (pass != succpass) {
        alert('Access denied');
        window.location.replace('index.html');
    };
};

passwordType(pass, succpass);