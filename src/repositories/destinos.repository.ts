import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Destinos, DestinosRelations} from '../models';

export class DestinosRepository extends DefaultCrudRepository<
  Destinos,
  typeof Destinos.prototype.id,
  DestinosRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Destinos, dataSource);
  }
}
