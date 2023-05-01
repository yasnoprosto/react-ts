type AccordionTitlePropsType = {
  title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("accordion title render start");
    return <h3>{props.title}</h3>;
  }

  export default AccordionTitle;
