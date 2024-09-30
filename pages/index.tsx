import {
  Layout,
  Hero,
  Services,
  App,
  FAQs,
  Contact,
  Reviews,
} from "@components";

const Home = () => {
  return (
    <Layout title="Get your everyday work done">
      <Hero />
      <Services />
      <FAQs />
      <Contact />
    </Layout>
  );
};

export default Home;
