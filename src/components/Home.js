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
