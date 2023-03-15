import Navbar from "../modules/navbar";
import LoginBar from "../modules/loginBar";
import ToggleBg from "../modules/toggleBg";
import SearchBar from "../modules/searchBar";
import Logo from "../modules/logo";

export default function Header() {
  return (
    <div className="header flex justify-around  ">
      <Logo/>
      <Navbar />
      <SearchBar />
      <ToggleBg />
      <LoginBar />
    </div>
  );
}