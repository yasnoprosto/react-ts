import AccordionBody from "../AccordionBody";
import AccordionTitle from "../AccordionTitle";

type AccordionPropsType = {
  title: string;
  collapsed: boolean; 
};

export default function Accordion(props: AccordionPropsType) {
  console.log("accordion render start");
  if (props.collapsed === true) {
    return (
      <div>
        <AccordionTitle title={props.title} />
      </div>
    );
  } else {
    return (
      <div>
        <AccordionTitle title={props.title} />
        <AccordionBody />
      </div>
    );
  }
}
