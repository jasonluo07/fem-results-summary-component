import useViewportSize from '@/hooks/useViewportSize';

const ViewportSizeIndicator = () => {
  const { width, height } = useViewportSize();
  return (
    <div className="fixed top-0 left-0 text-white bg-black">
      {width} x {height}
    </div>
  );
};

export default ViewportSizeIndicator;
