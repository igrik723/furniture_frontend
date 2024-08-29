export type User = {
  id: number;
  email: string;
  role: string;
  password: string;
  name: string;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  agreements: Agreement[];
};

export type Agreement = {
  id: number;
  user: User;
  userId: number;
  dateOfStart: Date;
  dateOfEnd: Date;
  sale: Sale[];
};

export type Sale = {
  id: number;
  agreement: Agreement;
  agreementId: number;
  furnitureModel?: FurnitureModel | null;
  furnitureId: number;
  count: number;
};

export type FurnitureModel = {
  id: number;
  sales: Sale[];
  furnitureName: string;
  furnitureType: string;
  Property: string;
  Price: number;
  count: number;
  imageUrl: string
};
