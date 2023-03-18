interface BodyProps {
    TabLeft: React.FC;
    BodyContent: React.FC;
    TabRight: React.FC;
}

export default function Body (content: BodyProps) {
    return (
        <div className = "body flex">
                <div className="pt-10 tab__left pl-8 w-3/12 min-h-screen text-white">
                    {/* <h1 className="tab__left__title ">Tab left</h1> */}
                    <content.TabLeft />
                </div>
                <div className="pt-10 body__content w-7/12 text-white  border-r border-gray-600 border-l border-opacity-50 ">
                    {/* <h1 className="body__content__title ">Body content</h1> */}
                    <content.BodyContent />
                </div>
                <div className="pt-10 tab__right w-2/12 text-white   pr-8">
                    {/* <h1 className="tab__right__title">Tab right</h1> */}
                    <content.TabRight />
            </div>
        </div>
    )
}