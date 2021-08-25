import { useResizeDetector } from 'react-resize-detector';

const CustomComponent = () => {
  const { width, height, ref } = useResizeDetector();

  return <div ref={ref}>{`${width}X${height}`}</div>;
};

export default CustomComponent;
