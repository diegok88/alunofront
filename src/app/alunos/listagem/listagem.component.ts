import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Aluno} from '../aluno.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunosService){}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunoService.listarAlunos().subscribe((res) => {
      this.alunos = res;
    });

  }
}
