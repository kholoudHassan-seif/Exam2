
//global variables
let responseMovie;
let finalResponseMovie;
let finalResult=[];
async function getApis(typeMovie)
{
    responseMovie= await fetch(`https://api.themoviedb.org/3/movie/${typeMovie}?api_key=9427f15053b2ddb2b7b597c803763aa9`)  ;
    finalResponseMovie = await responseMovie.json();  
    finalResult= finalResponseMovie.results;
    console.log(finalResult);
    showMovies();
}
getApis('popular');

$(".trending").click(async function(){
            responseMovie= await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=9427f15053b2ddb2b7b597c803763aa9
            `)  ;
    finalResponseMovie = await responseMovie.json();  
    finalResult= finalResponseMovie.results;
    console.log(finalResult);
    showMovies();
})
$(".popular").click(async function(){
    responseMovie= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9427f15053b2ddb2b7b597c803763aa9`)  ;
finalResponseMovie = await responseMovie.json();  
finalResult= finalResponseMovie.results;
console.log(finalResult);
showMovies();
})

$(".NowPlaying").click(async function(){
    responseMovie= await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9427f15053b2ddb2b7b597c803763aa9`)  ;
finalResponseMovie = await responseMovie.json();  
finalResult= finalResponseMovie.results;
console.log(finalResult);
showMovies();
})

$(".TopRated").click(async function(){
    responseMovie= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9427f15053b2ddb2b7b597c803763aa9`)  ;
finalResponseMovie = await responseMovie.json();  
finalResult= finalResponseMovie.results;
console.log(finalResult);
showMovies();
})


$(".Upcoming").click(async function(){
    responseMovie= await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9427f15053b2ddb2b7b597c803763aa9`)  ;
finalResponseMovie = await responseMovie.json();  
finalResult= finalResponseMovie.results;
console.log(finalResult);
showMovies();
})

function showMovies()
{   
    let cartona=``;
    for(var i=0;i<finalResult.length;i++)
    {
        cartona+=` 
            <div class="col-md-4   text-center">
                <div class="postItem">
                     <img  src='https://image.tmdb.org/t/p/w500${finalResult[i].poster_path}' class='w-100' />
                     <div class="caption"> 
                        <h3 class="fw-bolder">${finalResult[i].original_title}</h3>
                        <p class=" fw-bold" >${finalResult[i].overview}</p>
                    </div>
                </div>
            </div>`;
    }
    document.getElementById("movieID").innerHTML=cartona;
}


//leftmenu
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},800)
   $("#home-content").animate({marginLeft :'250px'},1000)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},800)
   $("#home-content").animate({marginLeft :'0px'},800)
})



/*scrollmenu*/
$("#leftMenu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})


//submit with Regax

const usernameInput = document.getElementById("usernameInput"); 
const userEmailInput = document.getElementById("userEmailInput"); 
const userPasswordInput = document.getElementById("userPasswordInput"); 
const Loginbtn = document.getElementById("Loginbtn"); 
const userPhoneInput = document.getElementById("userPhoneInput");
const userAgeLogin = document.getElementById("userAgeLogin");
function Submit()
{   

    userInputsValidation();
    if(userInputsValidation() == true)
    {
        console.log('troo');

        clearForm();
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
       
        
    }
    else
    {   
        console.log('koo');

        const filldatamsg = document.getElementById("filldatamsg");
        filldatamsg.classList.replace("d-none", "d-block");
    }
}


function userInputsValidation()
{       
    console.log('koo');

    usernameValidation();   
    userEmailValidation();
    userPasswordValidation();

    if( (usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true))
    {
        return true
    }
    else
    {
        return false
    }
}

function usernameValidation()
{
    const usernameAlert = document.getElementById("usernameAlert");
    

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if( regex.test(usernameInput.value) == true && usernameInput.value != "")
    {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");
        return true
    }
    else
    {
        
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
    console.log('nemooo');
}

function userEmailValidation()
{
    const userEmailAlert = document.getElementById("userEmailAlert");

    let regex = /@[a-z]{5,10}(\.com)$/;
    if( regex.test(userEmailInput.value) == true && userEmailInput.value != "")
    {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function userPasswordValidation()
{
    let regex = /^.{5,15}$/;
    const userPasswordAlert = document.getElementById("userPasswordAlert");

    if( regex.test(userPasswordInput.value) == true && userPasswordInput.value != "")
    {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");

        return true
    }
    else
    {
        
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function clearForm()
{
    usernameInput.value="";
    userAgeLogin.value=" ";
    userEmailInput.value="";
    userPasswordInput.value="";
    Loginbtn.value="";
    userPhoneInput.value="";
    userRePassLogin.value="";
    
}