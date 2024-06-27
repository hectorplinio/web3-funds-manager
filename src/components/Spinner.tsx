import ClipLoader from 'react-spinners/ClipLoader';

export const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
      <ClipLoader
        color="#3490dc"
        size={150}
        role="img"
        aria-label="Loading spinner"
      />
    </div>
  );
};
