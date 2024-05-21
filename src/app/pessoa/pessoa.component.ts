import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];
  pessoa: Pessoa = { id: null, nome: '', data_nascimento: '', peso: 0, altura: 0, sexo: '' };
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas(): void {
    this.pessoaService.getPessoas().subscribe((data) => {
      this.pessoas = data;
    });
  }

  addPessoa(): void {
    if (this.validaPessoa(this.pessoa)) {
      this.pessoaService.addPessoa(this.pessoa).subscribe(
        (data) => {
          this.pessoas.push(data);
          this.pessoa = { id: null, nome: '', data_nascimento: '', peso: 0, altura: 0, sexo: '' };
          this.mensagemSucesso = 'Pessoa adicionada com sucesso!';
          this.mensagemErro = null;
        },
        (error) => {
          this.mensagemErro = 'Erro ao adicionar pessoa.';
          this.mensagemSucesso = null;
        }
      );
    } else {
      this.mensagemErro = 'Todos os campos devem ser preenchidos corretamente.';
      this.mensagemSucesso = null;
    }
  }

  updatePessoa(): void {
    if (this.validaPessoa(this.pessoa)) {
      this.pessoaService.updatePessoa(this.pessoa).subscribe(
        () => {
          this.getPessoas();
          this.mensagemSucesso = 'Pessoa atualizada com sucesso!';
          this.mensagemErro = null;
        },
        (error) => {
          this.mensagemErro = 'Erro ao atualizar pessoa.';
          this.mensagemSucesso = null;
        }
      );
    } else {
      this.mensagemErro = 'Todos os campos devem ser preenchidos corretamente.';
      this.mensagemSucesso = null;
    }
  }

  deletePessoa(id: number): void {
    this.pessoaService.deletePessoa(id).subscribe(
      () => {
        this.pessoas = this.pessoas.filter(p => p.id !== id);
        this.mensagemSucesso = 'Pessoa excluída com sucesso!';
        this.mensagemErro = null;
      },
      (error) => {
        this.mensagemErro = 'Erro ao excluir pessoa.';
        this.mensagemSucesso = null;
      }
    );
  }

  selectPessoa(pessoa: Pessoa): void {
    this.pessoa = { ...pessoa };
  }

  validaPessoa(pessoa: Pessoa): boolean {
    if (!pessoa.nome || !pessoa.data_nascimento || pessoa.peso <= 0 || pessoa.altura <= 0 || !pessoa.sexo) {
      return false;
    }
    return true;
  }
}