import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import OktaSignIn from '@okta/okta-signin-widget';
import { OKTA_AUTH } from '@okta/okta-angular';

import appConfig from '../../config/my-app-config';
import { OktaAuth } from '@okta/okta-auth-js';

/**
 * for more information: https://github.com/okta/okta-angular
 * for change/migration version future read: https://github.com/okta/okta-angular/blob/master/MIGRATING.md
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  oktaSignin: any;

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {

    this.oktaSignin = new OktaSignIn({
      logo: 'assets/images/logo.png',
      baseUrl: appConfig.oidc.issuer.split('/oauth2')[0],
      clientId: appConfig.oidc.clientId,
      redirectUri: appConfig.oidc.redirectUri,
      authParams: {
        pkce: true,
        issuer: appConfig.oidc.issuer,
        scopes: appConfig.oidc.scopes
      }
    });
  }

  ngOnInit(): void {
    this.oktaSignin.remove(); // remove all to clean

    this.oktaSignin.renderEl({
      el: '#okta-sign-in-widget' // this name should same as div tag id in component.html
    },
    (response) => {
      if (response.status === 'SUCCESS') {
        this.oktaAuth.signInWithRedirect();
      }
    },
    (error) => {
      throw error;
    }
    );
  }

  ngOnDestroy(): void {
    this.oktaSignin.remove();
  }

}