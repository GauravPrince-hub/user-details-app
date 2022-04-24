import DashboardContainer from "./DashboardContainer";
import Header from "./Header";
import SideNav from "./SideNav";

const Home = () => {
  return (
    <div>
      <div className="side-nav-container">
        <SideNav />
        {/* get handler from side nav to check which item is clicked */}
      </div>
      <div className="home-container">
        <Header />
        {/* pass the clicked item to DashboardContainer */}
        <DashboardContainer />
      </div>
    </div>
  );
};

export default Home;

// reset                                        - 15 //
// trial user checkbox                          - 15 //
// dropdown                                     - 15 //
// popup on add confirmation/delete successfull - 30
// refresh after delete                         - 15 //
// load data oninit                             - 45
// pass data on edit user                       - 60