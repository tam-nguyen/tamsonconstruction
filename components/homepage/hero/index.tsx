import SectionLayout from "../section-layout";
import { hero, tamnguyenhero, tamsonconstructionhero } from "@public";

const Hero = () => {
  return (
    <SectionLayout
      heading="Everyday work is important. I can help."
      paragraph="NORTH SEATTLE HANDYMAN SERVICES FAMILY OWNED & OPERATED "
      paragraph2="Call us for your FREE quote! (360) 504-6147"
      image={tamsonconstructionhero}
      forHero
    />
  );
};

export default Hero;
