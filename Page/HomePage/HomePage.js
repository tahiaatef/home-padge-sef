import HeaderTopLogIn from "../../component/HomePage/HeaderTopLogIn";
import HeaderHome from "../../component/HomePage/Header";
import EducationAndTechAndSports from "../../component/HomePage/EducationAndTechAndSports";
import FeatureNewsTechRightAndLeft from "../../component/HomePage/FeatureNewsTechRightAndLeft";
import FooterHome from "../../component/HomePage/FooterHome";
function HomePage() {
    return (
    <>
  
    <div className="home-background">
    <div className="home-overlay">
   
      <HeaderTopLogIn/>
      <HeaderHome/>
  <FeatureNewsTechRightAndLeft/>
    <EducationAndTechAndSports/>
    <FooterHome/>
    </div>
   
    </div>
    </>
  
    );
  }
  
  export default HomePage;