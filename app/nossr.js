import dynamic from "next/dynamic";
import React from "react";

const Nossr = (props) => (
    <>
    {props.children}
    </>
)

export default dynamic(() => Promise.resolve(Nossr),{
    ssr: false
})