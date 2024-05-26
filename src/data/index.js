import home_icon from "../assets/svgs/home.svg";
import patience_icon from "../assets/svgs/patience.svg";
import schedule_icon from "../assets/svgs/schedule.svg";
import message_icon from "../assets/svgs/message.svg";
import transaction_icon from "../assets/svgs/transaction.svg";
import respiratoryrate_svg from "../assets/svgs/respiratoryrate.svg";
import temperature_svg from "../assets/svgs/temperature.svg";
import heartrate_svg from "../assets/svgs/HeartBPM.svg";
import arrow_down from "../assets/svgs/ArrowDown.svg";


export const navLinks = [
  { icon: home_icon, list: "Overview" },
  { icon: patience_icon, list: "Patience", path: "/patience" },
  { icon: schedule_icon, list: "Schedule" },
  { icon: message_icon, list: "Message" },
  { icon: transaction_icon, list: "Transaction" },
];

export const jessicaTaylor = [
  {
    icon: respiratoryrate_svg,
    title: "Respiratory Rate",
    value: "20 BPM",
    statuses: "Normal",
  },
  {
    icon: temperature_svg,
    title: "Temperature",
    value: "98.6°F",
    statuses: "Normal",
  },
  {
    icon: heartrate_svg,
    title: "Heart Rate",
    value: "78 BPM",
    arrow: arrow_down,
    statuses: "Lower than Average",
  },
];
