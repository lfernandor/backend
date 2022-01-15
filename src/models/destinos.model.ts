import {Entity, model, property} from '@loopback/repository';

@model()
export class Destinos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  lugar: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  numPersonas: string;


  constructor(data?: Partial<Destinos>) {
    super(data);
  }
}

export interface DestinosRelations {
  // describe navigational properties here
}

export type DestinosWithRelations = Destinos & DestinosRelations;
