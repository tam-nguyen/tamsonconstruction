import SectionLayout from "../section-layout";
import { hero, tamnguyenhero, tamsonconstructionhero } from "@public";

const Hero = () => {
  return (
    <SectionLayout
      heading="Everyday work is important. I can help."
      paragraph="NORTH SEATTLE HANDYMAN SERVICES FAMILY OWNED & OPERATED"
      paragraph2="Licensed &amp; Insured up to $2m"
      image={tamsonconstructionhero}
      forHero
    />
  );
};

export default Hero;
