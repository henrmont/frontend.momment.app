import { AccountService } from './account/account.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private snackbar: MatSnackBar,
    private accountService: AccountService
  ) { }

  showMessage(message: any) {
    this.snackbar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  logout(): void {
    let actvAcc = JSON.parse(window.localStorage.getItem('actvAcc') || '{}')
    this.accountService.getUserInfo().subscribe(
      (response: any) => {
        if (response.status) {
          actvAcc.forEach(
            (element: any, index: any) => {
              if (response.data.username == element[0]) {
                actvAcc.splice(index,1)
                window.localStorage.setItem('actvAcc', JSON.stringify(actvAcc))
              }
            }
          )
          if (actvAcc.length > 0) {
            window.localStorage.setItem('token', actvAcc[0][3])
            window.localStorage.setItem('refreshToken', actvAcc[0][4])
          } else {
            window.localStorage.clear()
          }
          window.location.reload()
        }
      }
    )
  }

  logoutAll() {
    window.localStorage.clear()
    window.location.reload()
  }

  checkAuthenticated() {
    const token = window.localStorage.getItem('token')
    if (token) {
      return true
    } else {
      return false
    }
  }
}
