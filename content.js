console.log("dom conent loaded")



async function triggerNextLink( form_details) {
    chrome.runtime.sendMessage({ action: "next_link",  form_details });
  }
  

async function ExtractData(){

    const cData={}

    const basicDetails=document?.querySelector("#basicdetails")
    if(basicDetails){
        const name=basicDetails?.querySelector(".mb-0.pt-1.text-left")
        cData.companyName=name?.textContent
    }

    cData["date"]=document?.querySelectorAll(".mb-0.pt-1.text-left")[5]?.textContent

    const contactDetails=document?.getElementById("CONTACT-DETAILS")

   if(contactDetails){
    const rows=contactDetails?.querySelectorAll(".border-bottom")
    rows?.forEach((eachR,index)=>{
        const key=eachR?.querySelector(".col-xl-4.col-6")?.querySelector("a")?.innerText
        const value=eachR?.querySelector(".col-xl-8.col-6")?.querySelector("a")?.textContent || eachR?.querySelector(".col-xl-8.col-6")?.querySelector("h6")?.textContent
        cData[key]=value
     
    })
   }

    const director=document?.getElementById("COMPANY-DIRECTORS")
    if(director){
        const tBody=director?.querySelector("tbody")
        const directors=tBody?.querySelectorAll("a")
        // const dNames=[]
        directors?.forEach((e,i)=>{
            cData[`Director ${i+1}`]=e?.textContent
        })
    }


   
    console.log(cData)

    triggerNextLink(cData)
}

async function waitForDOMContentLoaded() {
    return new Promise((resolve) => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
// Function to observe DOM changes
async function observeDOMChanges() {
  console.log("Setting up observer...");
  await waitForDOMContentLoaded(); // Wait for DOM content to load
  const observer = new MutationObserver(async function (
    mutationsList,
    observer
  ) {
    console.log("Observer callback triggered.");
    if (!observeDOMChanges.isExecuting) {
      observeDOMChanges.isExecuting = true;
      try {
        console.log("button click function");
        await delay(2000);
        await ExtractData();
        // Notify background.js when data extraction is complete
      } catch (error) {
        console.error("Error in observer callback:", error);
      }

      // observeDOMChanges.isExecuting = false;
    }
  });
  observer.observe(document.body, { subtree: true, childList: true });
  console.log("Observer setup complete.");
}

// Start observing DOM changes after DOM content is loaded
console.log("Starting observer setup...");
observeDOMChanges();
console.log("Observer setup initiated.");