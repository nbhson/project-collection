import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AzureService } from './azure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private readonly _destroy = new Subject<void>();
  isUserLogin = false;
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBoardCastService: MsalBroadcastService,
    private authService: MsalService,
    private azureService: AzureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginSuccess()
    this.msalBoardCastService.inProgress$.pipe(
      filter((interactionStatus: InteractionStatus) => {
        return interactionStatus === InteractionStatus.None
      }),
      takeUntil(this._destroy)
    ).subscribe((data) => {
      this.isUserLogin = this.authService.instance.getAllAccounts().length > 0
      this.azureService.isUserlogged.next(this.isUserLogin)
      console.log('is logged:', this.isUserLogin);
    })
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

  login() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest)
    } else {
      this.authService.loginRedirect()
    }
  }

  // logout() {
  //   this.authService.logoutRedirect({
  //     postLogoutRedirectUri: environment.postLogoutUrl
  //   });
  // }

  loginSuccess() {
    this.msalBoardCastService.msalSubject$
      .pipe(filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS))
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        console.log(payload);

        this.authService.instance.setActiveAccount(payload.account);
      })
  }

  // bypass login selection
  async logout() {
    const account = this.authService.instance.getActiveAccount();
    if (account) {
      const currentAccount = this.authService.instance.getAccountByHomeId(account.homeAccountId);
      // const logoutHint = currentAccount?.idTokenClaims?.login_hint;
      await this.authService.instance.logoutRedirect({  account: currentAccount });
    } else {
      await this.authService.instance.logoutRedirect({
        postLogoutRedirectUri: environment.postLogoutUrl,
      });
    }
  }
}
