import {
  BsFillCpuFill,
  BsFillDatabaseFill,
  BsMotherboard,
  BsPower
} from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { PiMonitor } from "react-icons/pi";
import { GiComputerFan } from "react-icons/gi";

export const categoryIcons = {
  "Motherboard": <BsMotherboard className="text-purple-600" />,
  "Power Supply Unit": <BsPower className="text-purple-600" />,
  "RAM": <CgSmartphoneRam className="text-purple-600" />,
  "Storage": <BsFillDatabaseFill className="text-purple-600" />,
  "Monitor": <PiMonitor className="text-purple-600" />,
  "CPU": <BsFillCpuFill className="text-purple-600" />,
  "Others": <GiComputerFan className="text-purple-600" />,
}