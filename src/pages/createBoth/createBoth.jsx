import BothAbout from './aboutBoth';
import BothHeaderBottom from './bothHeader';
import Opsions from './opsions';
import ProductSuccesful from './productSuccesful';
import Question from './question';
import StartBoth from './statrtBoth';

function CreateBoth() {
  return (
    <div>
      <BothHeaderBottom />
      <div className="bg-white">
        <BothAbout />
        <Opsions />
        <ProductSuccesful />
        <StartBoth />
        <Question />
      </div>
    </div>
  );
}

export default CreateBoth;