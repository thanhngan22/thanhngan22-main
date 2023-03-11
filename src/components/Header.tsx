import Navbar from "./common/navbar";
import LoginBar from "./common/loginBar";
import ToggleBg from "./common/toggleBg";
import SearchBar from "./common/searchBar";

export default function Header() {
  return (
    <div className="header flex justify-between ">
      <Navbar />
      <SearchBar />
      <ToggleBg />
      <LoginBar />
    </div>
  );
}