import Header from "./Component/Header"
import Section1 from "./Component/Section1"
import Section2 from "./Component/Section2"
import Section3 from "./Component/Section3"
import Section4 from "./Component/Section4"
import Footer from "./Component/Footer"
import Separator from "./Component/Separator"

function App() {
  return (
    <div >
      <Header />
      <Section1 />
      <Separator/>
      <Section2 />
      <Separator/>
      <Section3 />
      <Separator/>
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
