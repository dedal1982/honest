import MainInner from "../MainInner/MainInner";
import MainSocial from "../MainSocial/MainSocial";
import HeaderMabile from "../HeaderMabile/HeaderMabile";

function MainСontent() {
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

export default MainСontent;
