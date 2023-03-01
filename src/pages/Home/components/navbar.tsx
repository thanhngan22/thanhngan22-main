export default function Navbar () {
    return (
        <div className = "Home-navbar bg-gray-200 h-12 w-4/12 rounded-full">
            <ul className = "justify-around flex items-center ">
                <li className = ""><a>Home</a></li>
                <li className = ""><a>Blog</a></li>
                <li className = ""><a>Docs</a></li>
                <li className = ""><a>About</a></li>
            </ul>
        </div>
    )
};