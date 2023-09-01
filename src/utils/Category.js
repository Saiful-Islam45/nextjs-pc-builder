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
export const categoryUrl = {
  "Motherboard": "motherboard",
  "Power Supply Unit": 'power-supply',
  "RAM": 'ram',
  "Storage": 'storage',
  "Monitor": 'monitor',
  "CPU": 'cpu',
  "Others": 'others',
}

export function findKeyByValue(valueToFind) {
  const entry = Object.entries(categoryUrl).find(([key, value]) => value === valueToFind);
  return entry ? entry[0] : null;
}

export const categoryWiseProducts = (products) => {
  return products.reduce((acc, curr) => {
      const existingCategory = acc.find(category => category.name === curr.category);
  
      if (existingCategory) {
        existingCategory.products.push(curr);
      } else {
        acc.push({
          id: acc.length + 1,
          name: curr.category,
          products: [curr],
        });
      }
    
      return acc;
    }, []);
}
