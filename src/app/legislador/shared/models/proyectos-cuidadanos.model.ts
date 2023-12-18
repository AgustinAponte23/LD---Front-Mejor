export class ProyectosCuidadanosVM {
    idProyectoCuidadano: number;
    titulo: string;
    descripcion: string;
    fundamentos: string;
    idTipoDeProyecto: number;
    tiposDeProyectos: TiposDeProyectos;
    idCuidadano:number;
    cuidadanos: CuidadanosVM;
    idEstadosProyectosCuidadano:number;
    estadosProyectosCuidadano: EstadosProyectos;
    idVotosProyectos:number;
    votosProyectos: VotosProyectos;
}

export interface TiposDeProyectos{
    idTipoDeProyecto: number;
    descripcion: string;
}

export interface EstadosProyectos{
    idEstadosProyectosCuidadano: number;
    descripcion: string;
}

export interface VotosProyectos{
    idVotosProyectos: number;
    descripcion: string;
    votosPositivos:number;
    votosNegativos:number;
    votosTotales:number;
}


export interface CuidadanosVM{
    idCuidadano: number;
    nombre: string;
    apellido: string;
    correo: string;
}