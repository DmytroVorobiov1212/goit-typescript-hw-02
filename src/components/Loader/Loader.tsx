// import { ClipLoader } from "react-spinners";

// const override = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

// const Loader = ({ loading, color }) => {
//   return (
//     <div>
//       <ClipLoader
//         color={color}
//         loading={loading}
//         cssOverride={override}
//         size={150}
//         aria-label="Loading Spinner"
//         data-testid="loader"
//       />
//     </div>
//   );
// };

// export default Loader;

import { ClipLoader } from "react-spinners";

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface LoaderProps {
  loading: boolean;
  color: string;
}

const Loader: React.FC<LoaderProps> = ({ loading, color }) => {
  return (
    <div>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
