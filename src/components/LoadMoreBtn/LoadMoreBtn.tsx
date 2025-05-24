// import s from "./LoadMoreBtn.module.css";

// const LoadMoreBtn = ({ onClick }) => {
//   return (
//     <div className={s.wrapper}>
//       <button onClick={onClick} className={s.button}>
//         Load More
//       </button>
//     </div>
//   );
// };

// export default LoadMoreBtn;

import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={onClick} className={s.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
