
// Image Loader
const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);


  let x = document.getElementById("image-input");
    if(image_input.files.length == 0){
        console.log("empty")
    }else{
        console.log("non-empty")
    document.getElementById("hide").style.display="none";
    }

});




// Select Value of Options
function getSelectedValue()
{
    let selectedValue = document.getElementById("formtype").value;
    console.log(selectedValue);

    let appID = document.getElementById('hideApp');
    console.log(appID)
    let loneID = document.getElementById('hideLone');
    let docID = document.getElementById('hideDoc');
    let bankID = document.getElementById('hideBank');

    let allan = document.getElementById('allen');
    let bankLogo = document.getElementById('bank');
    let appLogo = document.getElementById('app');
    let docLogo = document.getElementById('doc');


    if(selectedValue === "applicationForm")
    {
        console.log("yes iam working")
        
        loneID.classList.add("hide");
        bankID.classList.add("hide");
        docID.classList.add("hide");
        appID.classList.remove("hide");

        appLogo.classList.remove("hide");
        allan.classList.add("hide");
        bankLogo.classList.add("hide");
        docLogo.classList.add("hide");
     
        // bankID.classList.remove("hideLoan");
        // bankID.classList.remove("heading2");
        // bankID.classList.add("hide");
        // loneID.classList.remove("hideLoan");
        // loneID.classList.remove("heading2");
        // loneID.classList.add("hide");
        // docID.classList.remove("hideLoan");
        // docID.classList.remove("heading2");
        // docID.classList.add("hide");
        // appID.classList.add('hideLone');
        // appID.classList.add('heading2');
    }

    if(selectedValue === "bankingDetails")
    {
        console.log("yes iam working")
        
        loneID.classList.add("hide");
        docID.classList.add("hide");
        appID.classList.add("hide");
        bankID.classList.remove("hide");

        bankLogo.classList.remove("hide");
        allan.classList.add("hide");
        appLogo.classList.add("hide");
        docLogo.classList.add("hide");

    }

    if(selectedValue === "loanDetails")
    {
        console.log("yes iam working")
        
        loneID.classList.remove("hide");
        bankID.classList.add("hide");
        docID.classList.add("hide");
        appID.classList.add("hide");

        allan.classList.remove("hide");
        bankLogo.classList.add("hide");
        appLogo.classList.add("hide");
        docLogo.classList.add("hide");

    }

    if(selectedValue === "documnetUpload")
    {
        console.log("yes iam working")
        
        docID.classList.remove("hide");
        loneID.classList.add("hide");
        appID.classList.add("hide");
        bankID.classList.add("hide");


        bankLogo.classList.add("hide");
        appLogo.classList.add("hide");
        allan.classList.add("hide");
        docLogo.classList.remove("hide");
    }

}

