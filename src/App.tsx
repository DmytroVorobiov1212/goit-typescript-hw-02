// import { useState, useEffect } from "react";
// import SearchBar from "./components/SearchBar/SearchBar";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import ImageModal from "./components/ImageModal/ImageModal";
// import Loader from "./components/Loader/Loader";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import toast, { Toaster } from "react-hot-toast";
// import { fetchImages } from "./services/Api";

// function App() {
//   const [images, setImages] = useState([]);
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     if (!query) return;

//     const getImages = async () => {
//       try {
//         setIsLoading(true);
//         setError(false);
//         const data = await fetchImages(query, page);
//         if (!data.results.length) {
//           toast.error("No Result! Please try again!");
//         } else {
//           setImages((prev) =>
//             page === 1 ? data.results : [...prev, ...data.results]
//           );
//         }
//         setTotalPages(data.total_pages);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getImages();
//   }, [query, page]);

//   const handleSearch = (newQuery) => {
//     if (newQuery === query) {
//       toast.error("You entered the same query!");
//       return;
//     }
//     setQuery(newQuery);
//     setPage(1);
//     setImages([]);
//   };

//   const handleLoadMore = () => {
//     setPage((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <Toaster position="top-right" />
//       <SearchBar onSubmit={handleSearch} />
//       {error && <ErrorMessage />}
//       <ImageGallery images={images} onImageClick={setSelectedImage} />
//       {isLoading && <Loader />}
//       {images.length > 0 && page < totalPages && (
//         <LoadMoreBtn onClick={handleLoadMore} />
//       )}
//       {selectedImage && (
//         <ImageModal
//           image={selectedImage}
//           onClose={() => setSelectedImage(null)}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages, UnsplashImage } from "./services/Api";

const App: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(query, page);
        if (!data.results.length) {
          toast.error("No Result! Please try again!");
        } else {
          setImages((prev) =>
            page === 1 ? data.results : [...prev, ...data.results]
          );
        }
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) {
      toast.error("You entered the same query!");
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {isLoading && <Loader loading={isLoading} color="#f00" />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {/* {selectedImage && (
        <ImageModal
          key={selectedImage.id}
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )} */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default App;
