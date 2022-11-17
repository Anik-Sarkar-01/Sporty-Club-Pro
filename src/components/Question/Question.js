import Faq from 'react-faq-component';
import './Question.css';

const data = {
  title: "Frequently Asked Questions : ",
  rows: [
    {
      title: "How does the react work?",
      content: ` React creates a VIRTUAL DOM in memory.
      Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
      React finds out what changes have been made, and changes only what needs to be changed.`
    },
    {
      title: "Difference between props and states?",
      content: `Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
      The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.`
    },
    {
      title: "Uses of useEffect expect loading data from API?",
      content: `1.Validating an input while it's receiving characters is another great application for useEffect.
      2.We can use useEffect to filter an array.
      3.We can use the useEffect hook to trigger an animation.
      `
    }]
}
const styles = {
  bgColor: 'white',
  titleTextColor: "#242b2ef1",
  rowTitleColor: "#D82E2F",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};
const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

export default function Question() {

  return (
    <div className='question-container'>
      <Faq
        data={data}
        styles={styles}
        config={config}
      />
    </div>
  );
}