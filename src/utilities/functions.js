import moment from "moment/moment";

export function UrlFormat(value) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function FormatNumber(value) {
  return new Intl.NumberFormat(["ban", "id"]).format(value);
}

export function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export function dateFormatLang(time) {
  const getLang = localStorage.getItem("i18nextLng");
  const checkLang = getLang === "vi";
  if (checkLang) return moment(time).locale("vi");
  return moment(time).locale("en");
}

export function dateSsValid(value) {
  let time = moment(value).format("HH:mm DD/MM/YYYY");
  console.log("time", time);
  if (moment(value, moment.ISO_8601).isValid()) {
    return console.log("valid: true");
  } else {
    return console.log("valid: false");
  }
}
