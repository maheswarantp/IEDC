import Logo from "../Logo/Logo";

function About() {
    return (
      <div className="flex justify-center mt-20" id="About-Page">
        <div className="w-3/4 bg-white h-autorounded-xl pt-3 rounded-lg">
          <div className="header flex justify-center">
            <h1 className="font-medium text-black text-4xl md:text-6xl">About IEDC</h1>
          </div>
          <div className="flex justify-evenly flex-wrap md:flex-row">
            <Logo />
          </div>
          <div className="w-full text-center p-10 md:p-20">
            Innovation and Entrepreneurship Development Centre (IEDC) is a flagship
            initiative of Kerala Startup Mission to promote innovation and entrepreneurship
            among the student and academic fraternity in the educational institutions in the
            State of Kerala and is considered as an umbrella programme that would play an
            instrumental role in fostering innovation culture in Academic institutions. The
            concept of Innovation and Entrepreneurship Development Centre (IEDC) is
            formulated to promote innovation and entrepreneurial culture in educational
            institutions and to develop institutional mechanisms to foster technoentrepreneurship for generation of wealth and employment. The IEDCs are
            established in academic institutions across Kerala having requisite expertise and
            infrastructure.
            <br />
            <br />
            The organization hosts seminars and presentations by prominent figures from the industrial and academic worlds. Industrial visits are also scheduled to provide information.
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  