import { Service } from 'typedi';
import { ResponseHandler } from '../response-handler/ResponseHandler.service';
import { STATUS_CODES } from '../../utils/constant';
import {
  ICreateVendorAdmin,
  IVendorDocument,
  VendorQueryParams,
} from '../../types/vendor.type';
import Vendor from '../../models/Vendor';
import { createVendorSchema } from '../../utils/validators/vendor.validations';
import mongoose from 'mongoose';

@Service()
export class VendorService extends ResponseHandler {
  //createVendor
  async createVendor(vendorData: ICreateVendorAdmin) {
    try {
      const { error } = createVendorSchema(vendorData);

      if (error)
        return this.catchErrorHandler(
          error?.details?.[0]?.message,
          STATUS_CODES.BAD_REQUEST,
        );
      const vendor = new Vendor(vendorData);
      await vendor.save();
      return this.responseHandler(
        vendor,
        'Vendor Module created successfully',
        STATUS_CODES.OK,
      );
    } catch (error: any) {
      return this.catchErrorHandler(error?.message, STATUS_CODES.BAD_REQUEST);
    }
  }

  // Get all vendors
  async getAllVendors(query: VendorQueryParams) {
    try {
      const { status, vendorName } = query;

      const filter: any = {};

      if (status) {
        filter.status = status;
      }

      if (vendorName) {
        filter.vendorName = { $regex: vendorName, $options: 'i' };
      }
      const vendors = await Vendor.find(filter);
      return this.responseHandler(vendors, 'Vendors List ', STATUS_CODES.OK);
    } catch (error: any) {
      return this.catchErrorHandler(error?.message, STATUS_CODES.BAD_REQUEST);
    }
  }

  // Update vendor
  async updateVendor(id: string, vendorBody: Partial<IVendorDocument>) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return this.catchErrorHandler(
          'Invalid document id',
          STATUS_CODES.BAD_REQUEST,
        );
      }
      const vendor = await Vendor.findByIdAndUpdate(id, vendorBody, {
        new: true,
        runValidators: true,
      });
      if (!vendor) {
        return this.catchErrorHandler(
          'Vendor Not Found',
          STATUS_CODES.BAD_REQUEST,
        );
      }
      return this.responseHandler(
        vendor,
        'Vendor Updated successfully',
        STATUS_CODES.OK,
      );
    } catch (error: any) {
      return this.catchErrorHandler(error?.message, STATUS_CODES.BAD_REQUEST);
    }
  }

  async getVendorById(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return this.catchErrorHandler(
          'Invalid document id',
          STATUS_CODES.BAD_REQUEST,
        );
      }
      const vendor = await Vendor.findById(id);
      if (!vendor) {
        return this.catchErrorHandler(
          'Vendor Not Found',
          STATUS_CODES.BAD_REQUEST,
        );
      }

      return this.responseHandler(
        vendor,
        'Vendor fetched  successfully',
        STATUS_CODES.OK,
      );
    } catch (error: any) {
      return this.catchErrorHandler(error?.message, STATUS_CODES.BAD_REQUEST);
    }
  }

  // Delete vendor
  async deleteVendor(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return this.catchErrorHandler(
          'Invalid document id',
          STATUS_CODES.BAD_REQUEST,
        );
      }
      const vendor = await Vendor.findByIdAndDelete(id);
      if (!vendor) {
        return this.catchErrorHandler(
          'Vendor Not Found',
          STATUS_CODES.BAD_REQUEST,
        );
      }

      return this.responseHandler(
        vendor,
        'Vendor Module deleted successfully',
        STATUS_CODES.OK,
      );
    } catch (error: any) {
      return this.catchErrorHandler(error?.message, STATUS_CODES.BAD_REQUEST);
    }
  }
}
