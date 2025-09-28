import MainLeft from "./MainLeft";
import MainCenter from "./MainCenter";
import MainRight from "./MainRight";

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
