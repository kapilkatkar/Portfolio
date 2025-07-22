import Footer from "../Footer/Footer";
import Headers from "../Header/Header";
import Skills from "../Skills/Skills";
const SkillComp = () => {
  return (
    <div>
      <Headers />
      <Skills />
      <Footer />

      <style>{`
        #skills h2 {
          margin-left: 150px;
        }
      `}</style>
    </div>
  );
};
export default SkillComp;
