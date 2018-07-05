import { Component, ViewChild, Injector, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { <%= catalogName %>ServiceProxy, <%= catalogName %>CreateDto, ListResultDtoOfPermissionDto } from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';


@Component({
  selector: 'create-<%= catalogNameLower %>-modal',
  templateUrl: './create-<%= catalogNameLower %>.component.html'
})
export class Create<%= catalogName %>Component extends AppComponentBase implements OnInit {

    @ViewChild('createModal') modal: ModalDirective;
    @ViewChild('modalContent') modalContent: ElementRef;

    active: boolean = false;
    saving: boolean = false;

    item: <%= catalogName %>CreateDto = null;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    constructor(
        injector: Injector,
        private _service: <%= catalogName %>ServiceProxy
    ) {
        super(injector);
    }

    ngOnInit(): void {

    }

    show(): void {
        this.active = true;
        this.item = new <%= catalogName %>CreateDto();
        this.item.init({ isStatic: false, isActive:true });

        this.modal.show();
    }

    onShown(): void {
        $.AdminBSB.input.activate($(this.modalContent.nativeElement));
    }

    save(): void {
        this._service.create(this.item)
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
