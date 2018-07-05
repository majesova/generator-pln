import { Component, Injector, ViewChild, ElementRef } from '@angular/core';
import { PagedListingComponentBase, PagedRequestDto } from "shared/paged-listing-component-base";
import { <%= catalogName %>ServiceProxy, <%= catalogName %>Dto, PagedResultDtoOf<%= catalogName %>Dto } from "shared/service-proxies/service-proxies";
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Create<%= catalogName %>Component } from './create-<%= catalogNameLower %>/create-<%= catalogNameLower %>.component';
import { Edit<%= catalogName %>Component } from './edit-<%= catalogNameLower %>/edit-<%= catalogNameLower %>.component';

@Component({
  selector: 'app-<%= catalogNamePluralizeLower %>',
  templateUrl: './<%= catalogNamePluralizeLower %>.component.html',
  animations: [appModuleAnimation()]
})
export class <%= catalogNamePluralize %>Component extends PagedListingComponentBase<<%= catalogName %>Dto> {

   @ViewChild('createModal') createModal: Create<%= catalogName %>Component;
   @ViewChild('editModal') editModal: Edit<%= catalogName %>Component;
   @ViewChild('inputContent') inputContent: ElementRef;

	items: <%= catalogName %>Dto[] = [];
	filter: string = "";
	isActive: any;

	constructor(
		private injector:Injector,
		private _service: <%= catalogName %>ServiceProxy
	) {
		super(injector);
	}

  ngOnInit(): void {
      this.refresh();
      $.AdminBSB.input.activate($(this.inputContent.nativeElement));
  }

	list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
		this._service.getAll(this.filter, this.isActive, request.skipCount,request.maxResultCount)
			.finally( ()=> {
				finishedCallback();
			})
            .subscribe((result: PagedResultDtoOf<%= catalogName %>Dto)=>{
				this.items = result.items;
				this.showPaging(result, pageNumber);
		});
	}

	delete(item: <%= catalogName %>Dto): void {
		abp.message.confirm(
			this.l("DeleteMessageConfirmation"),
			this.l("DeleteTitleConfirmation"),
			(result:boolean) =>{
				if(result)
				{
					this._service.delete(item.id)
						.finally(() => {
							abp.notify.info(this.l("DeleteSuccessfully") + ": "+ item.name );
							this.refresh();
						})
						.subscribe(() => { });
				}
			}
		);
	}

	// Show Modals
	create(): void {
		this.createModal.show();
	}

	edit(item:<%= catalogName %>Dto): void {
		this.editModal.show(item.id);
	}

	search(): void{
		this.refresh();
	}
}
