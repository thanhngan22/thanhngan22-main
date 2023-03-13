export default function Body () {
    return (
        <div className = "body">
            <div className = "body__container mt-10 flex w-full">
                <div className="tab__left pl-8 w-3/12 min-h-screen text-white bg-black">
                    <h1 className="tab__left__title ">Tab left</h1>
                </div>
                <div className="body__content w-6/12 text-white bg-black  border-r border-gray-400 border-l ">
                    <h1 className="body__content__title ">Body content</h1>
                </div>
                <div className="tab__right w-3/12 text-white bg-black   pr-3">
                    <h1 className="tab__right__title">Tab right</h1>
                </div>
            </div>
        </div>
    )
}