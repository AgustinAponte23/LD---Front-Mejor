import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { enumAccionForm } from 'src/app/legislador/shared/enum/enum';
import { EstadosProyectos, ProyectosCuidadanosVM, TiposDeProyectos } from 'src/app/legislador/shared/models/proyectos-cuidadanos.model';
import { GoogleDriveService } from 'src/app/legislador/shared/services/google-drive/google-drive.service';
import { ProyectosCuidadanosService } from 'src/app/legislador/shared/services/proyectosCuidadanos/proyectosCuidadanos.service';
import ValidatorsKap from 'src/app/legislador/shared/validators/validatorsKap';
import { UserType, AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  // Config loading
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  @Input()
  accionForm: string;

  @Input()
  proyectoCuidadano: any;

  accionFormEnum = enumAccionForm;

  archivos:any[] = [];

  proyectosCuidadanosObs$:Observable<ProyectosCuidadanosVM[]>;

  tiposDeProyectos$:Observable<TiposDeProyectos[]>;
  estadosProyectos$:Observable<EstadosProyectos[]>;
  user$: Observable<UserType>;

  @Output()
  volverCallback: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  guardarCambios: EventEmitter<ProyectosCuidadanosVM> = new EventEmitter<ProyectosCuidadanosVM>();

  formularioProyectoCuidadano:FormGroup;
  idProyectoCuidadano:number;

  public validatorsKap = ValidatorsKap;

  constructor(private googleDriveService:GoogleDriveService,private fb: FormBuilder,private auth: AuthService, private proyectosCuidadanosService: ProyectosCuidadanosService,private cdr: ChangeDetectorRef){
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

  ngOnInit(){
    this.user$ = this.auth.currentUserSubject.asObservable();

    this.formularioProyectoCuidadano = this.fb.group({
      idProyectoCuidadano: [0],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fundamentos: ['', Validators.required],
      idVotosProyectos: [null],
      file:[null],
      idTipoDeProyecto: ['', Validators.required],
      idEstadosProyectosCuidadano: [1, Validators.required],
      idCuidadano: [1],
    });

    // Ya esta la impresión de un integrante en el editar y borrar. Falta un tema de cors en el back para que se permita el post,put,delete

    // Peticiones get 
    this.tiposDeProyectos$ = this.proyectosCuidadanosService.getTiposDeProyectos();
    this.estadosProyectos$ = this.proyectosCuidadanosService.getEstadosProyectos();

    if (!this.proyectoCuidadano) {

      //Si viene en null, lo inicializo
  
      //this.contacto = new ContactoVM();
  
    } else {
      //patchValue bindea los valores al form a partir de las propiedades del objeto vs los formControlName del template
      
  
      this.formularioProyectoCuidadano.patchValue(this.proyectoCuidadano);
  
      //Si es un detalle o borrado, deshabilito el formulario
  
      if (
  
        this.accionFormEnum.detalle == this.accionForm ||
  
        this.accionFormEnum.borrar == this.accionForm
  
      )
  
      this.formularioProyectoCuidadano.disable();
  
    }
  }

 

editar(){
this.formularioProyectoCuidadano.markAllAsTouched();


if (this.formularioProyectoCuidadano.valid) {      
  this.guardarCambios.emit(this.formularioProyectoCuidadano.value);
}

else {
  
  this.formularioProyectoCuidadano.updateValueAndValidity();

}

}

saveSettings() {
  this.isLoading$.next(true);
  setTimeout(() => {
    this.isLoading$.next(false);
    this.cdr.detectChanges();
  }, 1500);
}

ngOnDestroy() {
  this.unsubscribe.forEach((sb) => sb.unsubscribe());
}


back() {
  this.volverCallback.next(true);
}

borrar() {
  this.guardarCambios.emit(this.formularioProyectoCuidadano.value)
}

onSubmit() {
  debugger

  this.formularioProyectoCuidadano.markAllAsTouched();
  if (this.formularioProyectoCuidadano.valid) {
    //Antes de guardar los datos en base pregunto si hay cargados archivos correctamente
    /*if (this.formularioProyectoCuidadano.value.file != null) {
      this.googleDriveService.uploadFile(this.formularioProyectoCuidadano.value.file);
    } */
    this.guardarCambios.emit(this.formularioProyectoCuidadano.value);


  }
  else {
    this.formularioProyectoCuidadano.updateValueAndValidity();
  }
}
}
