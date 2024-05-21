import {useInView} from 'react-intersection-observer'
import '../App.css';
import Header from './Header';
import AboutMe from './AboutMe'; 
import Specialties from './Specialties';
import MainContent from './MainContent';
function FadeInSection({ children }) {
    const { ref, inView } = useInView({
      threshold: 0.35,
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
        <Header />
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Specialties/>
      </FadeInSection>
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      </div>
    );
};
export default HomePage();