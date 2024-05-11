import moment from "moment/moment";
import "moment/locale/tr";

//unix formatindaki veriyi normal formata çeviren fonksiyon
const formatDate = (unix_time) => {
  //unix formatındaki saniye verisini date ile kullanabilmek için
  //1000 ile çarpıp milisaniyeye çevirdik
  const date = new Date(unix_time * 1000);

  //tarihi moment ile formatla
  return moment(date).calendar();
};
export default formatDate;
