import {useInView} from 'react-intersection-observer'
import '../App.css';
import AboutMe from './AboutMe'; 
import Specialties from './Specialties';
import Header from './Header';
import Technologies from './Technologies';
import Footer from './Footer';
function FadeInSection({ children }) {
    const { ref, inView } = useInView({
      threshold: 0.4,
      triggerOnce: true 
    });
  
    return (
      <div
        ref={ref}
        className={`fade-in-section ${inView ? 'is-visible' : ''}`}
      >
        {children}
      </div>
    );
  }

const HomePage = () => {
    return(
    <div className="bg-slate-800 flex flex-col min-h-screen">
    <Header/>
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Specialties/>
      </FadeInSection>
      <FadeInSection>
        <Technologies/>
      </FadeInSection>
      <FadeInSection>
        <Footer/>
      </FadeInSection>
      </div>
    );
};
export default HomePage();