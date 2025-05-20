import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoComponent implements OnInit{

  aluno: Aluno = {
    nome: '',
    email: '',
    idade: 0,
    serie: '',
    endereco: '',
  };
  private id!: string;

  constructor(
    private alunoService: AlunosService, 
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    //this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.carregarAluno();
  }

carregarAluno(): void {
  if(!this.id){
    this.router.navigate(['/listagem']);
    return;
  }
  this.alunoService.buscarAlunos(this.id).subscribe((a) => {
    this.aluno = a;
})
}
salvar(): void {
  if(!this.aluno) return;
  this.alunoService.atualizarAlunos(this.id, this.aluno).subscribe(() => {
    this.router.navigate(['/listagem']);
  })
}
cancelar(): void {
  this.router.navigate(['/listagem'])
}
}