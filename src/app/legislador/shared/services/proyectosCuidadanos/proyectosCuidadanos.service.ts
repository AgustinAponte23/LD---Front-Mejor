import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentUrls } from '../../../../../environments/environment';
import { EstadosProyectos, ProyectosCuidadanosVM, TiposDeProyectos } from '../../models/proyectos-cuidadanos.model';

@Injectable({
  providedIn: 'root'
})


export class ProyectosCuidadanosService {

  private urlObtenerProyectosCuidadanos: string = `${environmentUrls.urls.api}/proyectos/ProyectosCuidadanos`;
  private urlPostProyectosCuidadanos: string = `${environmentUrls.urls.api}/proyectos/guardarProyectoCuidadano`;
  private urlGetProyectosCuidadanosPorId: string = `${environmentUrls.urls.api}/proyectos/ProyectoCuidadano/`;
  private urlProyectosCuidadanosPut: string = `${environmentUrls.urls.api}/proyectos/editarProyectoCuidadano/`;
  private urlBorrarProyectosCuidadanos: string = `${environmentUrls.urls.api}/proyectos/eliminarProyectoCuidadano/`;
  private urlObtenerTiposDeProyectos: string = `${environmentUrls.urls.api}/proyectos/TiposDeProyectos`;
  private urlObtenerEstadosProyectos: string = `${environmentUrls.urls.api}/proyectos/EstadosDeProyectos`;

  constructor(private http: HttpClient) { }

  getProyectosCuidadanos(): Observable <ProyectosCuidadanosVM[]> {
    const url = this.urlObtenerProyectosCuidadanos;
    return this.http.get<ProyectosCuidadanosVM[]>(url);
  }

  getProyectosCuidadanosPorId(idProyectosCuidadanos: number): Observable <ProyectosCuidadanosVM[]> {
    const url = this.urlGetProyectosCuidadanosPorId + idProyectosCuidadanos;
    return this.http.get<ProyectosCuidadanosVM[]>(url);
  }

  getTiposDeProyectos(): Observable <TiposDeProyectos[]> {
    const url = this.urlObtenerTiposDeProyectos;
    return this.http.get<TiposDeProyectos[]>(url);
  }

  getEstadosProyectos(): Observable <EstadosProyectos[]> {
    const url = this.urlObtenerEstadosProyectos;
    return this.http.get<EstadosProyectos[]>(url);
  }

  putProyectosCuidadanos(idProyectosCuidadanos:number, model:ProyectosCuidadanosVM){
    const url = this.urlProyectosCuidadanosPut + idProyectosCuidadanos;
    return this.http.put(url, model);
  }

  deleteProyectosCuidadanos(idProyectosCuidadanos:number){
    const url = this.urlBorrarProyectosCuidadanos + idProyectosCuidadanos;
    return this.http.delete(url);
  }

  postProyectosCuidadanos(ProyectosCuidadanos: ProyectosCuidadanosVM){
    let url = this.urlPostProyectosCuidadanos;
    return this.http.post(url, ProyectosCuidadanos);
  }
}
