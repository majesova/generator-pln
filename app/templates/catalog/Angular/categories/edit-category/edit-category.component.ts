import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { <%= catalogName %>ServiceProxy, <%= catalogName %>UpdateDto, ListResultDtoOfPermissionDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'edit-<%= catalogNameLower %>-modal',
  templateUrl: './edit-<%= catalogNameLower %>.component.html'
})
export class Edit<%= catalogName %>Component extends AppComponentBase implements OnInit {

  @ViewChild('editModal') modal: ModalDirective;
  @ViewChild('modalContent') modalContent: ElementRef;

  active: boolean = false;
  saving: boolean = false;

  item: <%= catalogName %>UpdateDto = null;

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
  constructor(
      injector: Injector,
      private _service: <%= catalogName %>ServiceProxy
  ) {
      super(injector);
  }

  ngOnInit(): void {

  }

  show(id: number): void {
      this._service.get(id)
          .finally(() => {
              this.active = true;
              this.modal.show();
          })
          .subscribe((result: <%= catalogName %>UpdateDto) => {
              this.item = result;
          });
  }

  onShown(): void {
      $.AdminBSB.input.activate($(this.modalContent.nativeElement));
  }

  save(): void {
      this.saving = true;
      this._service.update(this.item)
          .finally(() => { this.saving = false; })
          .subscribe(() => {
              this.notify.info(this.l('SavedSuccessfully'));
              this.close();
              this.modalSave.emit(null);
          });
  }

  close(): void {
      this.active = false;
      this.modal.hide();
  }

}
