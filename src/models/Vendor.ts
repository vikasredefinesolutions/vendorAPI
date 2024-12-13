import mongoose, { Schema } from 'mongoose';
import { IVendorDocument, VENDOR_STATUS } from '../types/vendor.type';

const VendorSchema = new Schema<IVendorDocument>(
  {
    vendorName: {
      type: String,
      required: true,
      trim: true,
    },
    contactName: {
      type: String,
      required: true,
      trim: true,
    },
    contactEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email',
      ],
    },
    contactPhone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    loginName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    imagePortalWebsite: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: Object.values(VENDOR_STATUS),
      default: VENDOR_STATUS.ACTIVE,
    },
  },
  {
    timestamps: true,
    collection: 'vendors',
  },
);

const Vendor = mongoose.model('Vendor', VendorSchema);

export default Vendor;
