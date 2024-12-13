import Joi from 'joi';
import { ICreateVendorAdmin, VENDOR_STATUS } from '../../types/vendor.type';

export const createVendorSchema = (data: ICreateVendorAdmin) => {
  const createVendorSchema = Joi.object({
    vendorName: Joi.string().min(2).max(100).required().trim().messages({
      'string.empty': 'Vendor name is required',
      'string.min': 'Vendor name must be at least 2 characters long',
      'string.max': 'Vendor name cannot exceed 100 characters',
    }),

    contactName: Joi.string().min(2).max(100).required().trim().messages({
      'string.empty': 'Contact name is required',
      'string.min': 'Contact name must be at least 2 characters long',
      'string.max': 'Contact name cannot exceed 100 characters',
    }),

    contactEmail: Joi.string().email().required().trim().lowercase().messages({
      'string.empty': 'Email is required',
      'string.email': 'Please provide a valid email address',
    }),

    contactPhone: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required()
      .messages({
        'string.empty': 'Phone number is required',
        'string.pattern.base': 'Phone number must be 10 digits',
      }),

    address: Joi.string().min(5).max(200).required().trim().messages({
      'string.empty': 'Address is required',
      'string.min': 'Address must be at least 5 characters long',
      'string.max': 'Address cannot exceed 200 characters',
    }),

    website: Joi.string().uri().allow('').optional().messages({
      'string.uri': 'Website must be a valid URL',
    }),

    loginName: Joi.string()
      .min(3)
      .max(50)
      .required()
      .trim()
      .pattern(/^[a-zA-Z0-9_-]+$/)
      .messages({
        'string.empty': 'Login name is required',
        'string.min': 'Login name must be at least 3 characters long',
        'string.max': 'Login name cannot exceed 50 characters',
        'string.pattern.base':
          'Login name can only contain letters, numbers, underscores, and hyphens',
      }),

    imagePortalWebsite: Joi.string().uri().allow('').optional().messages({
      'string.uri': 'Image portal website must be a valid URL',
    }),

    status: Joi.string()
      .valid(...Object.values(VENDOR_STATUS))
      .default(VENDOR_STATUS.ACTIVE)
      .messages({
        'any.only': 'Status must be either active or inactive',
      }),
  });

  return createVendorSchema.validate(data);
};
