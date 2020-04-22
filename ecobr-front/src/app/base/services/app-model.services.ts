import { Injectable } from '@angular/core';
import { BSResource } from './BSResource.service';

@Injectable()
export class UsuarioResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('');
  }

  consultars(pageable) {
    return this.resoruce.get('usuarios/consultar?size=' + pageable.size + '&page=' + pageable.page);
  }

  consultar(requestPage) {
    return this.resoruce.post('usuarios/consultar', requestPage);
  }

  atualizar(data) {
    return this.resoruce.put('usuarios/' + data.id + '/atualizar', data);
  }

  inserir(data) {
    return this.resoruce.post('usuarios/inserir', data);
  }

  detalhar(data) {
    return this.resoruce.get('usuarios/detalhar/' + data.id);
  }

  deletar(id) {
    return this.resoruce.delete('usuarios/deletar/' + id.toString());
  }

  login(data) {
    return this.resoruce.post('usuarios/login/', data);
  }
}

@Injectable()
export class AlunoResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('');
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
    return this.resoruce.put('alunos/' + data.id + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('alunos/deletar/' + id.toString());
  }

  // getClienteByCpfCnpj(cpfCnpj) {
   // return this.resoruce.get('clientes/get-cliente-by-cpfCnpj?cpfCnpj=' + cpfCnpj);
 // }




}

@Injectable()
export class ChamadoResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('');
  }

  consultars(pageable) {
    return this.resoruce.get('chamados/consultar?size=' + pageable.size + '&page=' + pageable.page);
  }

  consultar(requestPage) {
    return this.resoruce.post('chamados/consultar', requestPage);
  }

  listar() {
    return this.resoruce.get('chamados/listar');
  }

  inserir(data) {
    return this.resoruce.post('chamados/inserir', data);
  }

  atualizar(data) {
    return this.resoruce.put('chamados/' + data.id + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('chamados/deletar/' + id.toString());
  }

  getResumoChamadosByLogin(login) {
    return this.resoruce.get('chamados/get-resumo-chamados-by-login?login=' + login);
  }

  getChamadosByLogin(login) {
    return this.resoruce.get('chamados/get-chamados-by-login?login=' + login);
  }

  getMensagensChamadoByIdChamado(idChamado) {
    return this.resoruce.get('chamados/get-mensagens-chamado-by-idChamado?idChamado=' + idChamado);
  }

  gravarChamado(data) {
    return this.resoruce.post('chamados/gravar-chamado', data);
  }

  gravarMensagem(idChamado,mensagem) {
    return this.resoruce.get('chamados/gravar-mensagem?idChamado=' + idChamado + '&mensagem=' + mensagem);
  }
}

@Injectable()
export class ProfessoresResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('');
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
    return this.resoruce.put('professores/' + data.id + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('professores/deletar/' + id.toString());
  }

  getUlimaFaturaByLogin(login) {
    return this.resoruce.get('titulos/get-ultima-fatura-by-login?login=' + login);
  }

  listByLogin(login) {
    return this.resoruce.get('titulos/listByLogin?login=' + login);
  }

  downloadBoleto(idFatura) {
    return this.resoruce.get('titulos/download-boleto/' + idFatura );
  }
}


@Injectable()
export class DisciplinaResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('');
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
    return this.resoruce.put('disciplinas/' + data.id + '/atualizar', data);
  }

  deletar(id) {
    return this.resoruce.delete('disciplinas/deletar/' + id.toString());
  }

  getUlimaFaturaByLogin(login) {
    return this.resoruce.get('titulos/get-ultima-fatura-by-login?login=' + login);
  }

  listByLogin(login) {
    return this.resoruce.get('titulos/listByLogin?login=' + login);
  }

  downloadBoleto(idFatura) {
    return this.resoruce.get('titulos/download-boleto/' + idFatura );
  }
}
@Injectable()
export class SerieResource {

  constructor(private resoruce: BSResource) {
    resoruce.setPath('');
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
    return this.resoruce.put('turmas/' + data.id + '/atualizar', data);
  }
  deletar(id) {
    return this.resoruce.delete('turmas/deletar/' + id.toString());
  }

  // getClienteByCpfCnpj(cpfCnpj) {
   // return this.resoruce.get('clientes/get-cliente-by-cpfCnpj?cpfCnpj=' + cpfCnpj);
 // }




}

