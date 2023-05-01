import { JSXElementConstructor } from "react";

export default function Body () {
    return (
        <div className = "body flex ">
                <div className="TabLeft pt-10 tab__left pl-8 w-3/12 min-h-screen text-white">
                    {/* <h1 className="tab__left__title ">Tab left</h1> */}
                
                </div>
                <div className="TabMid pt-10 body__content w-7/12 text-white  border-r border-gray-600 border-l border-opacity-50 ">
                    {/* <h1 className="body__content__title ">Body content</h1> */}
                </div>
                <div className="TabRight pt-10 tab__right w-2/12 text-white   pr-8">
                    {/* <h1 className="tab__right__title">Tab right</h1> */}
            </div>
        </div>
    )
}