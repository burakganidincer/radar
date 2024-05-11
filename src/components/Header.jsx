import { useSelector } from "react-redux";

const Header = () => {
  const flightState = useSelector((store) => store.flightReducer);

  return (
    <header>
      <div>
        <img src="/plane-logo.png" alt="" />
        <h3>Uçuş Radarı</h3>
      </div>

      <p>
        {flightState.isLoading
          ? "Uçuşlar Yükleniyor"
          : flightState.isError
          ? "Uçuşlar yüklenirken bir hata oluştu"
          : flightState.flights.length + " Uçuş Bulundu"}
      </p>
    </header>
  );
};

export default Header;