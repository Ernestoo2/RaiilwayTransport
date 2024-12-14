import First from "../layouts/Footer/First";
import React from "react";
import Second from "../layouts/Footer/Second";
import Third from "../layouts/Footer/Third";

function FooterUi() {
  return (
    <div className="flex w-full h-auto max-w-full gap-3 pb-7">
      <First/>
      {/* <Second/> */}
      {/* <Third/> */}
    </div>
  )
}

export default FooterUi;
