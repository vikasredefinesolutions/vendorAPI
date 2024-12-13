import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  QueryParams,
  Post,
  Put,
  Res,
} from 'routing-controllers';

import { Response } from 'express';
import { ResponseHandler } from '../../services/response-handler/ResponseHandler.service';
import { ICreateVendorAdmin, VendorQueryParams } from 'src/types/vendor.type';
import { VendorService } from '../../services/modules/Vendor.service';

@JsonController('/vendor')
export class ModuleAdminController {
  constructor(
    private vendorService: VendorService,
    private responseService: ResponseHandler,
  ) {}

  @Post('/')
  async createVendor(@Body() vendor: ICreateVendorAdmin, @Res() res: Response) {
    const data = await this.vendorService.createVendor(vendor);
    return this.responseService.apiResponseHandler(res, data);
  }

  @Get('/')
  async getALLVendors(
    @QueryParams() query: VendorQueryParams,
    @Res()
    res: Response,
  ) {
    const data = await this.vendorService.getAllVendors(query);
    return this.responseService.apiResponseHandler(res, data);
  }

  @Put('/:id')
  async updateModuleDetails(
    @Param('id') id: string,
    @Body() clientAdmin: Partial<ICreateVendorAdmin>,
    @Res() res: Response,
  ) {
    const data = await this.vendorService.updateVendor(id, clientAdmin);
    return this.responseService.apiResponseHandler(res, data);
  }

  @Delete('/:id')
  async removeClientAdmin(@Param('id') id: string, @Res() res: Response) {
    const data = await this.vendorService.deleteVendor(id);
    return this.responseService.apiResponseHandler(res, data);
  }
}
