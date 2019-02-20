import { localeTimeFormatter } from "./ltf_import.js";

Array.prototype.map.call(document.getElementsByTagName("section"), function(
  el
) {
  el.innerText = localeTimeFormatter(el.id);
});
