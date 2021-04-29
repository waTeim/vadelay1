import { ControllerBase, ControllerProperties, get, post, controller, Res } from 'ts-api';

import { Factory } from '../lib/Factory';
import { Machine } from '../lib/Machine';

@controller('/factories')
export default class FactoryController extends ControllerBase
{
  constructor(properties:ControllerProperties)
  {
    super(properties);
  }

  @get('') async getFactories(): Promise<Factory[]>
  {
      let factories:Factory[] = [];
      return factories;
  }

  @get('/:factoryId/machines') async getMachine(factoryId: string): Promise<Machine[]>
  {
    return [{  factoryId: 0, machineId: 0, machineName: "widget1", machineDescription: "some widget" }];
  }
}