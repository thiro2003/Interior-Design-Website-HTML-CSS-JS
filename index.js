




// side bar


    let cancelSideBar=document.querySelector('.cancel-side-bar');
    let sideBar=document.querySelector('.side-bar');
    let sideBarNavigation=document.querySelector('.side-bar-navigation');
    let sideMenu=document.querySelector('.side-menu');
    let cross=document.querySelector('#cancel-side-bar-icon');
    let crossBox=document.querySelector('.cancel-side-bar');
    let home=document.querySelector('#home')
    let about=document.querySelector('#about')
    let project=document.querySelector('#project')
    let contact=document.querySelector('#contact')




    


  cancelSideBar.addEventListener("click",function(){
       sideBar.style.width="0px";
       sideBarNavigation.style.width="0px";
       this.style.width="0px";
       sideMenu.style.display="none";
       sideBar.style.transition="0.5s all ease";
       cross.style.display="none";
       crossBox.style.display="flex";

    })


  home.addEventListener("click",function(){
       sideBar.style.width="0px";
       sideBarNavigation.style.width="0px";
       this.style.width="0px";
       sideMenu.style.display="none";
       sideBar.style.transition="0.5s all ease";
       cross.style.display="none";
       crossBox.style.display="flex";

    })

  about.addEventListener("click",function(){
       sideBar.style.width="0px";
       sideBarNavigation.style.width="0px";
       this.style.width="0px";
       sideMenu.style.display="none";
       sideBar.style.transition="0.5s all ease";
       cross.style.display="none";
       crossBox.style.display="flex";

    })

  project.addEventListener("click",function(){
       sideBar.style.width="0px";
       sideBarNavigation.style.width="0px";
       this.style.width="0px";
       sideMenu.style.display="none";
       sideBar.style.transition="0.5s all ease";
       cross.style.display="none";
       crossBox.style.display="flex";

    })

  contact.addEventListener("click",function(){
       sideBar.style.width="0px";
       sideBarNavigation.style.width="0px";
       this.style.width="0px";
       sideMenu.style.display="none";
       sideBar.style.transition="0.5s all ease";
       cross.style.display="none";
       crossBox.style.display="flex";

    })

    let bars=document.querySelector('.bars')
  bars.addEventListener("click",function(){
            
       sideBar.style.width="300px";
       sideBarNavigation.style.display="flex";
       sideBarNavigation.style.width="300px";
      //  this.style.width="";
       sideMenu.style.display="flex";
       sideBar.style.transition="0.5s all ease";
       cross.style.display="block";
       crossBox.style.width="";
       sideBar.style.display="block";
       

  })

//   contact form validation


      let submit=document.querySelector('.submit-btn');
      let name=document.querySelector('.input-name');
      let email=document.querySelector('.input-email');
      let msg=document.querySelector('.error-msg');

      submit.addEventListener("click",function(e){

        e.preventDefault();
        msg.innerHTML="";
    

        if(name.value.trim()=== "" || email.value.trim()=== ""){
        
          msg.innerHTML='<h5> Input fields are empty !</h5>';
          
        }
        else if(!email.value.includes("@") || !email.value.includes(".com")){
          msg.innerHTML='<h5> Incorrect email !</h5>';
        }
        else{
            
          alert("Your Data Submitted Succesfully.")
          name.value=''
          email.value=''

        }
          

      })
