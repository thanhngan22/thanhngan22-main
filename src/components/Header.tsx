import Navbar from "./headerComps/navbar";
import LoginBar from "./headerComps/loginBar";
import ToggleBg from "./headerComps/toggleBg";
import SearchBar from "./headerComps/searchBar";
import Logo from "./headerComps/logo";

export default function Header() {
  return (
    <div className="header flex justify-between pl-8 ">
      <Logo/>
      <SearchBar />
      <Navbar />
      <ToggleBg />
      <LoginBar />
    </div>
  );
}