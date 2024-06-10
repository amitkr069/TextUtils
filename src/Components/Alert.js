import React from "react";

export default function Alert(props) {
    const capitalize = (word)=>{ // success ka 1sr lettter ko capital krne ke liye
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); {/* lower.slice(1) - 1st character ko chor ke sara character le lega */}

    }
  return (
    <>
      {/* If props.alert false hoga then aage ka div execute nii hoga
    if props.alert false/null nahi hai then aage ka div execute hoga
    it happens because all the jsx will be converted to javascript calls */}
      {props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        {/* isko hta diye because ek function bnaye hai jisse 2 sec baaad apne aap alert chl jayega 
        and dismiss hone ke baad v alert baad me show krwa skte hai */}
        
        {/*<button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>*/}
      </div>}
    </>
  );
}
 
{
  /* ye alert ek object ke tarh daal rhe hai */
}
