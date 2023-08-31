import {
  BsFillCpuFill,
  BsFillDatabaseFill,
  BsMotherboard,
  BsPower
} from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { PiMonitor } from "react-icons/pi";
import { GiComputerFan } from "react-icons/gi";

// export const categoryIcons = [
//   { title: "Motherboard", icon: <BsMotherboard className="text-purple-600" /> },
//   { title: "Power Supply Unit", icon: <BsPower className="text-purple-600" /> },
//   { title: "RAM", icon: <CgSmartphoneRam className="text-purple-600" /> },
//   { title: "Storage", icon: <BsFillDatabaseFill className="text-purple-600" /> },
//   { title: "Monitor", icon: <PiMonitor className="text-purple-600" /> },
//   { title: "CPU", icon: <BsFillCpuFill className="text-purple-600" /> },
//   { title: "Others", icon: <GiComputerFan className="text-purple-600" /> }
// ];

export const categoryIcons = {
  "Motherboard": <BsMotherboard className="text-purple-600" />,
  "Power Supply Unit": <BsPower className="text-purple-600" />,
  "RAM": <CgSmartphoneRam className="text-purple-600" />,
  "Storage": <BsFillDatabaseFill className="text-purple-600" />,
  "Monitor": <PiMonitor className="text-purple-600" />,
  "CPU": <BsFillCpuFill className="text-purple-600" />,
  "Others": <GiComputerFan className="text-purple-600" />,
}