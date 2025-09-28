import MainInner from "./MainInner";
import MainSocial from "./MainSocial";
import HeaderMabile from "./HeaderMabile";

function GrandСontent() {
  return (
    <div className="content">
      <div className="container">
        <div className="main__wrapper">
          <MainInner />
          <MainSocial />
          <HeaderMabile />
        </div>
      </div>
    </div>
  );
}

export default GrandСontent;
