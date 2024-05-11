import Header from "./components/Header";
import { useEffect, useState } from "react";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import Modal from "./components/Modal";

const App = () => {
  //harita görünümü aktif mi?
  const [isMapView, setIsMapView] = useState(true);

  //detayı gösterilecek elemanın id'si
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  //uçuş verilerini al
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  return (
    <div>
      <Header />

      <div className="view-buttons">
        <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? "active" : undefined}
        >
          Harita Görünümü
        </button>
        <button
          className={isMapView ? undefined : "active"}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {/* hangi görünümün ekrana basılacağını seç */}
      {isMapView ? (
        <MapView setDetailId={setDetailId} />
      ) : (
        <ListView setDetailId={setDetailId} />
      )}

      {/* detailID değeri varsa ekrana modal bas */}
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
