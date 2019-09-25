import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImukaAgentComponent } from './imuka-agent.component';

describe('ImukaAgentComponent', () => {
  let component: ImukaAgentComponent;
  let fixture: ComponentFixture<ImukaAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImukaAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImukaAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
