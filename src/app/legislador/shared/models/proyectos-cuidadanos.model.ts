export class ProyectosCuidadanosVM {
    idProyectoCuidadano: number;
    titulo: string;
    descripcion: string;
    fundamentos: string;
    votos: number;
    idTipoDeProyecto: number;
    tiposDeProyectos: TiposDeProyectos[];
    idCuidadano:number;
    cuidadanos: CuidadanosVM;
    estadosProyectosCuidadano: EstadosProyectos;
}

export interface TiposDeProyectos{
    idTipoDeEvento: number;
    descripcion: string;
}

export interface EstadosProyectos{
    idEstadosProyectosCuidadano: number;
    descripcion: string;
}

export interface CuidadanosVM{
    idCuidadano: number;
    nombre: string;
    apellido: string;
    correo: string;
}