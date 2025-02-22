import arcade from "./assets/icon-arcade.svg";
import advanced from "./assets/icon-advanced.svg";
import pro from "./assets/icon-pro.svg";

export const steps = [
  { id: 1, subTitle: "Step 1", title: "YOUR INFO" },
  { id: 2, subTitle: "Step 2", title: "SELECT PLAN" },
  { id: 3, subTitle: "Step 3", title: "ADD-ONS" },
  { id: 4, subTitle: "Step 4", title: "SUMMARY" },
];

export const addons = [
  {
    id: 1,
    title: "Online Service",
    description: "Access to multiplayer games",
    price: "+$10/yr",
    value: "onlineService",
  },
  {
    id: 2,
    title: "Large Storage",
    description: "Extra 1TB of cloud save",
    price: "+$20/yr",
    value: "largeStorage",
  },
  {
    id: 3,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: "+$20/yr",
    value: "customizableProfile",
  },
];

export const plans = [
  { id: 1, name: "Arcade", amount: 9, icon: arcade },
  { id: 2, name: "Advanced", amount: 12, icon: advanced },
  { id: 3, name: "Pro", amount: 15, icon: pro },
];
