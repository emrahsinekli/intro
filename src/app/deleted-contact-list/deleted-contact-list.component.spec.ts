import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedContactListComponent } from './deleted-contact-list.component';

describe('DeletedContactListComponent', () => {
  let component: DeletedContactListComponent;
  let fixture: ComponentFixture<DeletedContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
