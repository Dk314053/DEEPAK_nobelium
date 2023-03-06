import logo from './logo.svg';
import Heading1 from './component/Heading1';
import Heading2 from './component/Heading2';
import Heading3 from './component/Heading3';
import Button from './component/Button';
function App() {
  return (
    <>
 {/* challenge 1 */}
      <h1>I am heading one ... from first component   </h1>
      <h2>I am heading two ... from second component   </h2>
      <h3>I am heading three ... from third component   </h3>
      <button>Click me !!</button>
      
      {/* challenge 2 */}
    <Heading1 />
    <Heading2 />
    <Heading3 />
    <Button />
     </>
  );
}

export default App;
