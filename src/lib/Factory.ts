import { Address } from './Address';

export interface Factory
{
    factorId: number;
    factoryName: string;
    factoryDescription: string;
    factoryAddress: Address;
}