import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from '../aluno.model';
import { AlunosService } from '../alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  aluno: Aluno = {
    nome: '',
    email: '',
    idade: 0,
    serie: '',
    endereco: '',
  };

  constructor(private alunoService: AlunosService, private router: Router) { }

  salvar() {
    this.alunoService.cadastrarAlunos(this.aluno).subscribe((res) => { this.router.navigate(['/listagem']) });
  }

  cancelar(): void {
    this.router.navigate(['/listagem'])
  }
}
