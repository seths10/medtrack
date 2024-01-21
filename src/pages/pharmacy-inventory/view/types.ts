import * as React from "react";
import { PharmacyInventory } from "../data-view/types";

export interface ViewPharmacyInventoryProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  pharmacyInventory?: PharmacyInventory;
}