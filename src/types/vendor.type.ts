import mongoose from 'mongoose';

export interface IVendorDocument extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  vendorName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  website: string;
  loginName: string;
  imagePortalWebsite: string;
  status: VENDOR_STATUS;
}

export type ICreateVendorAdmin = Omit<IVendorDocument, '_id'>;

export enum VENDOR_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ARCHIVED = 'archived',
}

export type VendorQueryParams = {
  status?: string;
  vendorName?: string;
};
