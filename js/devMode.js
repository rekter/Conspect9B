var pass                        = prompt('Type a password:');
var succpass                    = 13373006;

function passwordType(pass, succpass) {
    if (pass == succpass) {
        alert('Access success');
        window.location.replace('www.conspect9b.ml/devMode.html')
    } else if (pass != succpass) {
        alert('Access denied');
        window.location.replace('www.conspect9b.ml')
    };
};

passwordType(pass, succpass);