import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable()
export class EmailTaken implements AsyncValidator{
  constructor(private auth:AngularFireAuth){

  }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> {
      return this.auth.fetchSignInMethodsForEmail(control.value).then(
        response => response.length? {EmailTaken:true}:null
      )
  }
}
