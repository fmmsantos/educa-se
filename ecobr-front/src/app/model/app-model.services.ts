import { Injectable } from '@angular/core';
import { BSResource } from '../base/services/BSResource.service';

@Injectable()
export class AcessoResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('api');
  }

  login(data) {
    return this.resoruce.post('acesso/login/', data);
  }
}





@Injectable()
export class AlunoResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('api');
  }

  consultars(pageable) {
    return this.resoruce.get('alunos/consultar?size=' + pageable.size + '&page=' + pageable.page);
  }

  consultar(requestPage) {
    return this.resoruce.post('alunos/consultar', requestPage);
  }

  listar() {
    return this.resoruce.get('alunos/listar');
  }

  inserir(data) {
    return this.resoruce.post('alunos/inserir', data);
  }

  atualizar(data) {
    return this.resoruce.put('alunos/' + data.codigo + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('alunos/deletar/' + id.toString());
  }

  detalhar(data) {
    return this.resoruce.get('alunos/detalhar/' + data.codigo);
  }
}
@Injectable()
export class TurmaResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('api');
  }

  consultars(pageable) {
    return this.resoruce.get('turmas/consultar?size=' + pageable.size + '&page=' + pageable.page);
  }

  consultar(requestPage) {
    return this.resoruce.post('turmas/consultar', requestPage);
  }

  listar() {
    return this.resoruce.get('turmas/listar');
  }

  inserir(data) {
    return this.resoruce.post('turmas/inserir', data);
  }

  atualizar(data) {
    return this.resoruce.put('turmas/' + data.codigo + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('turmas/deletar/' + id.toString());
  }

  detalhar(data) {
    return this.resoruce.get('turmas/detalhar/' + data.codigo);
  }
}


@Injectable()
export class ProfessorResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('api');
  }

  consultars(pageable) {
    return this.resoruce.get('professores/consultar?size=' + pageable.size + '&page=' + pageable.page);
  }

  consultar(requestPage) {
    return this.resoruce.post('professores/consultar', requestPage);
  }

  listar() {
    return this.resoruce.get('professores/listar');
  }

  inserir(data) {
    return this.resoruce.post('professores/inserir', data);
  }
 atualizar(data) {
    return this.resoruce.put('professores/' + data.codigo + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('professores/deletar/' + id.toString());
  }

  detalhar(data) {
    return this.resoruce.get('professores/detalhar/' + data.codigo);
  }
}

@Injectable()
export class DisciplinaResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('api');
  }

  consultars(pageable) {
    return this.resoruce.get('disciplinas/consultar?size=' + pageable.size + '&page=' + pageable.page);
  }

  consultar(requestPage) {
    return this.resoruce.post('disciplinas/consultar', requestPage);
  }

  listar() {
    return this.resoruce.get('disciplinas/listar');
  }

  inserir(data) {
    return this.resoruce.post('disciplinas/inserir', data);
  }

  atualizar(data) {
    return this.resoruce.put('disciplinas/' + data.codigo + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('disciplinas/deletar/' + id.toString());
  }

  detalhar(data) {
    return this.resoruce.get('disciplinas/detalhar/' + data.codigo);
  }

}

@Injectable()
export class DiarioResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('api');
  }

  consultars(pageable) {
    return this.resoruce.get('diarios/consultar?size=' + pageable.size + '&page=' + pageable.page);
  }

  consultar(requestPage) {
    return this.resoruce.post('diarios/consultar', requestPage);
  }

  listar() {
    return this.resoruce.get('diarios/listar');
  }

  inserir(data) {
    return this.resoruce.post('diarios/inserir', data);
  }
 atualizar(data) {
    return this.resoruce.put('diarios/' + data.codigo + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('diarios/deletar/' + id.toString());
  }

  detalhar(data) {
    return this.resoruce.get('diarios/detalhar/' + data.codigo);
  }
}
