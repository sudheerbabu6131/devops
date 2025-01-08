let Name;
let Phoneno;
let Email;
let Password;
let Conformpassword;
 let submit = ()=>
{
    Name=document.getElementById('fullname').value;
    Phoneno=document.getElementById('number').value;
    Email=document.getElementById('email').value;
    Password=document.getElementById('password').value;
    Conformpassword=document.getElementById('conformpassword').value;

    if(Password != Conformpassword)
        {
            alert("password missmatch");
        }
    if(Name == ""|| Phoneno=="" || Email =="")
    {
        alert("fill all the fields");
        if(!Email.includes('@'))
            {
                alert("Email is wrong")
            }
    }
    
    console.log(Name);
}
