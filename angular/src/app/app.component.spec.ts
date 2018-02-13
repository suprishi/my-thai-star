import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { SidenavModule } from './sidenav/sidenav.module';
import { CoreModule } from './core/core.module';

import { SnackBarService } from './core/snackService/snackService.service';
import { WindowService } from './core/windowService/windowService.service';
import { UserAreaService } from './user-area/shared/user-area.service';
import { AuthService } from './core/authentication/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      providers: [WindowService, AuthService, UserAreaService, SnackBarService],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        CoreModule,
        SidenavModule,
        HttpClientModule,
      ],
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
