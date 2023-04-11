const load1=document.getElementById("load1");
const load2=document.getElementById("load2");
const load3=document.getElementById("load3");
const load4=document.getElementById("load4");
const load5=document.getElementById("load5");
const load6=document.getElementById("load6");

// load1
load1.addEventListener("change", () => {
    if (load1.checked) {
   fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v0=1')
  .then(response => {
    if (response.ok) {
      console.log("on"); // Log success message to console
    } else {
      throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
    }
  })
  .catch(error => console.error(error));
    }
    else{
        fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v0=0')
        .then(response => {
          if (response.ok) {
            console.log("off"); // Log success message to console
          } else {
            throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
          }
        })
        .catch(error => console.error(error));        
        }
  })
// load2
  load2.addEventListener("change", () => {
    if (load2.checked) {
   fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v1=1')
  .then(response => {
    if (response.ok) {
      console.log("on"); // Log success message to console
    } else {
      throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
    }
  })
  .catch(error => console.error(error));
    }
    else{
        fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v1=0')
        .then(response => {
          if (response.ok) {
            console.log("off"); // Log success message to console
          } else {
            throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
          }
        })
        .catch(error => console.error(error));        
        }

  })
// load3
load3.addEventListener("change", () => {
    if (load3.checked) {
   fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v2=1')
  .then(response => {
    if (response.ok) {
      console.log("on"); // Log success message to console
    } else {
      throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
    }
  })
  .catch(error => console.error(error));
    }
    else{
        fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v2=0')
        .then(response => {
          if (response.ok) {
            console.log("off"); // Log success message to console
          } else {
            throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
          }
        })
        .catch(error => console.error(error));        
        }
  })
//   load4
load4.addEventListener("change", () => {
    if (load4.checked) {
   fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v3=1')
  .then(response => {
    if (response.ok) {
      console.log("on"); // Log success message to console
    } else {
      throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
    }
  })
  .catch(error => console.error(error));
    }
    else{
        fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v3=0')
        .then(response => {
          if (response.ok) {
            console.log("off"); // Log success message to console
          } else {
            throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
          }
        })
        .catch(error => console.error(error));        
        }
  })
//   load5
load5.addEventListener("change", () => {
    if (load5.checked) {
   fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v4=1')
  .then(response => {
    if (response.ok) {
      console.log("on"); // Log success message to console
    } else {
      throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
    }
  })
  .catch(error => console.error(error));
    }
    else{
        fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v4=0')
        .then(response => {
          if (response.ok) {
            console.log("off"); // Log success message to console
          } else {
            throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
          }
        })
        .catch(error => console.error(error));        
        }
  })
//   load6
load6.addEventListener("change", () => {
    if (load6.checked) {
   fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v5=1')
  .then(response => {
    if (response.ok) {
      console.log("on"); // Log success message to console
    } else {
      throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
    }
  })
  .catch(error => console.error(error));
    }
    else{
        fetch('https://blynk.cloud/external/api/update?token=s2291g1WHa7xVg5Sz8MD1Kx2nJ_BfwpL&v5=0')
        .then(response => {
          if (response.ok) {
            console.log("off"); // Log success message to console
          } else {
            throw new Error(`Failed to set value for virtual pin ${pin_number}`); // Log error message to console
          }
        })
        .catch(error => console.error(error));        
        }
  })


