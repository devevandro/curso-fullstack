import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {
  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  };

  constructor(
    private tecnicoService: TecnicoService,
    private toastr: ToastrService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tecnico.id = this.activateRoute.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tecnico = resposta;
    });
  }

  delete(): void {
    this.tecnicoService.delete(this.tecnico.id).subscribe(() => {
      this.toastr.success('Técnico deletado com sucesso!', 'Excluir');
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toastr.error(element.message);
          this.router.navigate(['tecnicos']);
        });
      }

      this.toastr.error(ex.error.message);
    });
  }
}
