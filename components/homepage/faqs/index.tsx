import { useState } from "react";
import Accordion from "./accordion";
import Heading from "components/heading";

const FAQs = () => {
  const [open, setOpen] = useState<string | null>(null);

  const faqsArr = {
    left: [
      {
        question: "How Can You Estimate the Project Timeline?",
        answer:
          "Construction projects of all kinds are notorious for taking longer than expected. Rather than being frustrated when your project doesn’t meet its original completion date, you should plan ahead and leave plenty of buffer time. For example, most bathroom remodels take on average one month to complete. However, this can vary greatly depending on many factors. The size of the bathroom and the complexity of the remodel will be the biggest contributors to a lengthy project timeline.You should prepare for the unexpected on any home renovation project, though. Houses can have quirks that you may not know about until the project is underway. Indeed, there are often delays getting appliances and materials. So, examine rough estimates for each space you want to remodel. Also, add a decent chunk of buffer time, perhaps 25% extra. If you don’t need it, you’ll be pleasantly surprised and have your project done early.",
      },
      {
        question: "How Can You Estimate the Renovation Cost?",
        answer:
          "One of the most challenging parts of a home renovation is figuring out how much you will have to pay for the whole project. Since every house and renovation is different, it can be difficult to find comparable prices to use as an estimate. Some things, like appliances or fittings, are easier since they are generally not custom purchased. However, even for things like new floors, a new roof, demolishing and replacing walls, or decorating, it is still possible to get a clear estimate.Professional home flippers recommend bringing an expert set of eyes to the house to get the best estimate possible. Someone like a general contractor with extensive experience renovating homes will be familiar with pricing standards for a variety of remodeling projects. Researching standard prices for certain components and consulting with an expert is generally the best way to make sure your price estimate is high enough. However, make sure to include some extra buffer money just in case.",
      },
      {
        question: "Will the Contractors Make a Mess?",
        answer:
          "It is understandable to be concerned about the mess that a renovation project might create around your property. Especially since you are spending a significant amount of money to improve your home, worrying about contractors is normal. However, good contractors will have a responsible cleanup procedure. Often, this is even detailed in their contract, including the types of machines they might employ to move materials around and keep the area tidy.During renovation projects, there is frequent use of tarps and plastic dividers to contain debris and protect the property. Any renovation will naturally create a certain level of “mess”; However, professional contractors will make sure it remains to a minimum by cleaning them up as soon as possible.",
      },
    ],
    right: [
      {
        question: "Do You or the Contractor Need Insurance?",
        answer:
          "This is one of the most important questions to consider when planning a home renovation. The reason is that the answer is often “both.” While it varies depending on the scale of your renovations and your specific insurance provider, you may need to let your insurance company know that you are doing renovations. Even if you are not strictly required, it may be a good idea. This could allow your insurance provider to cover things like new appliances or increase coverage adequately for a home with a new addition.Along with your own insurance, the contractor should have insurance of their own. Any professional contractor will have, at a minimum, liability, Workers’ Compensation, and property insurance along with proof of all three. The same goes for any subcontractors the general contractor hires.",
      },
      {
        question: "Building Your Dream Home",
        answer:
          "Renovating is a great way to make your dream home a reality without moving out. Similarly, it could help you sell your house for the best price possible while offering someone else their dream home. Navigating the most common questions surrounding renovations is the first step toward a good remodeling experience and the home that is perfect for you.",
      },
    ],
  };

  return (
    <div className="space-y-5 layout">
      <Heading
        text="Question"
        heading="Frequently asked questions"
      />

      <div className="md:flex md:space-x-8 justify-center space-y-5 md:space-y-0 mx-auto">
        <Accordion
          list={faqsArr.left}
          open={open}
          setOpen={setOpen}
        />
        <Accordion
          list={faqsArr.right}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
};
export default FAQs;
