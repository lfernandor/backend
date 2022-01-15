import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Destinos} from '../models';
import {DestinosRepository} from '../repositories';

export class DestinosControllerController {
  constructor(
    @repository(DestinosRepository)
    public destinosRepository : DestinosRepository,
  ) {}

  @post('/destinos')
  @response(200, {
    description: 'Destinos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Destinos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Destinos, {
            title: 'NewDestinos',

          }),
        },
      },
    })
    destinos: Omit<Destinos, 'id'>,
  ): Promise<Destinos> {
    return this.destinosRepository.create(destinos);
  }

  @get('/destinos/count')
  @response(200, {
    description: 'Destinos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Destinos) where?: Where<Destinos>,
  ): Promise<Count> {
    return this.destinosRepository.count(where);
  }

  @get('/destinos')
  @response(200, {
    description: 'Array of Destinos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Destinos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Destinos) filter?: Filter<Destinos>,
  ): Promise<Destinos[]> {
    return this.destinosRepository.find(filter);
  }

  @patch('/destinos')
  @response(200, {
    description: 'Destinos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Destinos, {partial: true}),
        },
      },
    })
    destinos: Destinos,
    @param.where(Destinos) where?: Where<Destinos>,
  ): Promise<Count> {
    return this.destinosRepository.updateAll(destinos, where);
  }

  @get('/destinos/{id}')
  @response(200, {
    description: 'Destinos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Destinos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Destinos, {exclude: 'where'}) filter?: FilterExcludingWhere<Destinos>
  ): Promise<Destinos> {
    return this.destinosRepository.findById(id, filter);
  }

  @patch('/destinos/{id}')
  @response(204, {
    description: 'Destinos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Destinos, {partial: true}),
        },
      },
    })
    destinos: Destinos,
  ): Promise<void> {
    await this.destinosRepository.updateById(id, destinos);
  }

  @put('/destinos/{id}')
  @response(204, {
    description: 'Destinos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() destinos: Destinos,
  ): Promise<void> {
    await this.destinosRepository.replaceById(id, destinos);
  }

  @del('/destinos/{id}')
  @response(204, {
    description: 'Destinos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.destinosRepository.deleteById(id);
  }
}
