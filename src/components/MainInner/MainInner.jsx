import "./MainInner.css";
import MainLeft from "../MainLeft/MainLeft";
import MainCenter from "../MainCenter/MainCenter";
import MainRight from "../MainRight/MainRight";

function MainInner() {
  return (
    <div className="main__inner">
      <MainLeft />
      <MainCenter />
      <MainRight />
    </div>
  );
}
export default MainInner;
