import Navbar from "./headerComps/navbar";
import LoginBar from "./headerComps/loginBar";
import ToggleBg from "./headerComps/toggleBg";
import SearchBar from "./headerComps/searchBar";

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