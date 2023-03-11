import Navbar from "./common/navbar";
import LoginBar from "./common/loginBar";

export default function Header() {
  return (
    <div className="header flex justify-between m-2">
      <Navbar />
      <LoginBar />
    </div>
  );
}