import { ControllerBase, ControllerProperties, get, post, controller, Res } from 'ts-api';

import { Warehouse } from '../lib/Warehouse';
import { Inventory } from '../lib/Inventory';
import { InventoryItem } from '../lib/InventoryItem';
import { InventoryUpdate } from '../lib/InventoryUpdate';

@controller('/warehouses')
export default class WarehouseController extends ControllerBase
{
  constructor(properties:ControllerProperties)
  {
    super(properties);
  }

  @get('') async getWareHouses():Promise<Warehouse[]>
  {
    return [];
  }

  @get('/:_warehouseId/inventory') async getInventory(_warehouseId: string): Promise<Inventory[]>
  {
    return [];
  }

  @post('/:_warehouseId/inventory') async updateInventory(_warehouseId: string,item: InventoryUpdate): Promise<InventoryItem[]>
  {
     return [];
  }
}