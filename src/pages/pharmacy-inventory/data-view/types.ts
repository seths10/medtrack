export interface MainDataViewComponentProp {
  pharmacyInventories?: Array<PharmacyInventory>;
  handleViewPharmacyInventory?: (pharmacyInventory: PharmacyInventory) => void;
  handleUpdatePharmacyInventory?: (pharmacyInventory: PharmacyInventory) => void;
  handleDeleteUpdatePharmacyInventory?: (pharmacyInventory: PharmacyInventory) => void;
}

export interface CardComponentProp {
  pharmacyInventory: PharmacyInventory;
  handleViewPharmacyInventory?: () => void;
  handleUpdatePharmacyInventory?: () => void;
  handleDeletePharmacyInventory?: () => void;
  idx: number;
}

export type PharmacyInventory = {
  id: number;
  drugName: string;
  description: string;
  drugCode: number;
  unitOfPricing: string;
  price: number;
};