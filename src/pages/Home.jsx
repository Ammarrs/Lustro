import ButtonLight from "../components/ui/ButtonLight";
import Floating from "../components/ui/Floating";
import Info from "../components/ui/Info";
import SubTitle from "../components/ui/SubTitle";
import Title from "../components/ui/Title";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <Floating/>
      <Title/>
      <SubTitle/>
      <Info/>
      <div className="btns">
        <ButtonLight/>
      </div>
    </div>
  )
}

export default Home