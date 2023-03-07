import Navbar from "./common/navbar";
import DisplayClock from "./common/clock";
import LoginBar from "./common/loginBar";

export default function Header() {
  return (
    <div className="header flex justify-around">
      <Navbar />
      <DisplayClock />
      <LoginBar />
    </div>
  );
}