import BoostSection from '../BoostSection/BoostSection';
import Footer from '../Footer/Footer';
import FormSection from '../FormSection/FormSection';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Statistic from '../Statistic/Statistic';

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <FormSection />
      <Statistic />
      <BoostSection />
      <Footer />
    </>
  );
}

export default Homepage;
