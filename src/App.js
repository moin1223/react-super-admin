import { useState } from "react";
import { useEffect } from  "react";
import  secureLocalStorage  from  "react-secure-storage";

  
const App = () => {
   const [value, setValue] = useState()
   console.log(value)
    useEffect(() => {
	    secureLocalStorage.setItem("object", {
		    message:  "This is testing of local storage",
	    });
	    secureLocalStorage.setItem("number", 12);
	    secureLocalStorage.setItem("string", "12");
	    secureLocalStorage.setItem("boolean", true);
	    let value = secureLocalStorage.getItem("boolean");
      console.log(value)
      setValue(value);
	}, []);



   return (
	    <>
      {
        value?<div>you are admin</div> : <div>Yue are user</div>

      }
      </>
	);
}

export  default  App;