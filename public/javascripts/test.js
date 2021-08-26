window.addEventListener("DOMContentLoaded", (e) => {
    const switchButton = document.querySelector(".signup");
    switchButton.addEventListener("click", (e) => {
        e.preventDefault();
        //when the switch button is clicked on
        
            //the loginform should move up and display none
            const loginForm = document.querySelector(".loginForm");
            const signupForm = document.querySelector(".signupForm");

            if(loginForm.style.display !== "none"){
                loginForm.style.transition="0.9s"
                loginForm.style.transform="translateY(-400px)"
                loginForm.style.opacity="0"
                loginForm.style.zIndex="1"
                setTimeout(() => loginForm.style.display="none", 900);
                
                //the signupform should move up and display block
                setTimeout(() => {
                    signupForm.style.display="block"
                }, 600)
                setTimeout(() => {
                    signupForm.style.transition="0.9s"
                    signupForm.style.opacity="1"
                    signupForm.style.zIndex="2"
                }, 900);
            } else {
                signupForm.style.transition="0.9s"
                signupForm.style.transform="translateY(0)"
                signupForm.style.opacity="0"
                signupForm.style.zIndex="1"
                setTimeout(() => signupForm.style.display="none", 900);
                
                //the signupform should move up and display block
                setTimeout(() => {
                    loginForm.style.display="block"
                }, 600)
                setTimeout(() => {
                    loginForm.style.transform="translateY(0)"
                    loginForm.style.transition="0.9s"
                    loginForm.style.opacity="1"
                    loginForm.style.zIndex="2"
                }, 900);
            }

    })
})