type StarPropsType = {
  selected: true | false;
}

export default function Star(props: StarPropsType) {
  console.log("star render start");
  if (props.selected === true) {
    return (
      <span>
        <b> ✩ </b>
      </span>
    );
  } else {
    return <span> ✩ </span>;
  }
}
