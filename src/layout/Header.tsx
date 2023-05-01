import Navbar from "../modules/header/navbar";
import LoginBar from "../modules/header/loginBar";
import ToggleBg from "../modules/header/toggleBg";
import SearchBar from "../modules/header/searchBar";
import Logo from "../modules/header/logo";

export default function Header() {
  return (
    <div className="header flex justify-around  ">
      <Logo/>
      <Navbar />
      <SearchBar />
      <ToggleBg />
      {/* check if logged in :  change login bar */}
      <LoginBar />
    </div>
  );
}