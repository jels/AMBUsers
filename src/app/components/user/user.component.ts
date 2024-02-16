import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  formTipo: FormGroup;
  formDocumento: FormGroup;
  formCliente: FormGroup;
  pendientes: any;

  diaHoy = new Date().getDate();
  mesActual = new Date().getMonth();
  anhoActual = new Date().getFullYear();
  fechaHoy = this.diaHoy + '/' + (this.mesActual + 1) + '/' + this.anhoActual;

  //listaDeDocumentos: any;
  listaTiposDocumentos: any;
  //listaDeSolicitudes: any;

  disColTipos: string[] = [
    'numeroTipo',
    'nombreTipo',
    'descripcionTipo',
    'estadoTipo',
    'accionesTipo',
  ];

  disColClientes: string[] = [
    'numero',
    'fechaDocumento',
    'nombreTipo',
    'estadoVisualizacion',
    'localizacionDoc',
  ];

  disColPendientes: string[] = [
    'numero',
    'fechaDocumento',
    'nombreTipo',
    'estadoVisualizacion',
    'localizacionDoc',
  ];

  disColDocumentos: string[] = [
    'numero',
    'fechaDocumento',
    'nombreTipo',
    'estadoVisualizacion',
    'localizacionDoc',
  ];

  dataSourceDocumentos: MatTableDataSource<any>;
  dataSourceSolicitudes: MatTableDataSource<any>;
  dataSourceClientes: MatTableDataSource<any>;
  dataSourceTipos: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
  ) {
    this.dataSourceDocumentos = new MatTableDataSource();
    this.dataSourceSolicitudes = new MatTableDataSource();
    this.dataSourceClientes = new MatTableDataSource();
    this.dataSourceTipos = new MatTableDataSource();
    this.sort=new MatSort;
    this.formTipo = this.fb.group({
      nombreTipo: ['', Validators.required],
      descripcionTipo: ['', Validators.required],
    });
    this.formDocumento = this.fb.group({
      idTipoDocumento: ['', Validators.required],
    });
    this.formCliente = this.fb.group({
      idTipoDocumento: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.dataSourceTipos.paginator = this.paginator;
    this.dataSourceDocumentos.sort = this.sort;
    this.dataSourceSolicitudes.sort = this.sort;
    this.dataSourceClientes.sort = this.sort;
    this.dataSourceTipos.sort = this.sort;
    this.cargarDatos();
  }

  filterDocumentos(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceDocumentos.filter = filterValue.trim().toLowerCase();
  }

  filterPendientes(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSolicitudes.filter = filterValue.trim().toLowerCase();
  }

  filterClientes(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceClientes.filter = filterValue.trim().toLowerCase();
  }

  filterTipos(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTipos.filter = filterValue.trim().toLowerCase();
  }

  cargarDatos() {
    //this._adminService.listTypesDocuments().subscribe((resp) => {
    //  this.listaTiposDocumentos = resp;
    //  console.log(resp);
    //  this.dataSourceTipos = new MatTableDataSource(this.listaTiposDocumentos);
    //});
  }

  guardarTipo() {
    console.log(this.formTipo.value);
    //const typeDoc: NewTypeDoc ={
    //  idTipoDoc: 0,
    //  nombreTipo: this.formTipo.value.nombreTipo,
    //  estadoTipo: 1,
    //  caracteristicasTipo: this.formTipo.value.descripcionTipo,
    //}
    //this._adminService.insertNewTypeDocument(typeDoc).subscribe((resp) => {
    //  this.formTipo.reset();
    //  this.cargarDatos();
    //});
  }

  subirDocumentos() {
    console.log(this.formDocumento.value);
    this.formDocumento.reset();
  }

  guardarCliente() {
    console.log(this.formDocumento.value);
    this.formDocumento.reset();
  }

  verDatosTipo(id: number){
    console.log(id);
  }

  editarDatosTipo(id: number){
    console.log(id);
  }

  darBajaTipo(id: number){



    console.log(id);
  }
}
