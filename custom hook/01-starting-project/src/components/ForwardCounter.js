import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  // 커스텀 훅 별로 state 재정의
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
