const alluser=[
    "Anurag",
    "Mithun",
    "Alka",
    "Prabir",
    "Vinay",
    "Shubham",
    "Shivan",
    "Farman",
];
function checkuserpresent(user){
    if(alluser.includes(user)){
        console.log("yes "+user +"is a vaild user ");
        return true;
    }
    else{
        console.log("no " +user+ " is not valid user ");
    }
}
checkuserpresent("mithun");
checkuserpresent("Shubham")