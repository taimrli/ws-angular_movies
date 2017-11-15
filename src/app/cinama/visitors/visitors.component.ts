import {Component, OnInit} from "@angular/core";
import {VisitorService} from "./visitor.service";
import {Visitor} from "./visitor.model";

@Component({
    selector: 'visitors',
    templateUrl: './visitors.component.html'
})
export class VisitorsComponent implements OnInit {

    visitors: Visitor[];
    selectedVisitor: Visitor;

    constructor(private visitorService: VisitorService) {
    }

    ngOnInit(): void {
        this.visitorService.getAllVisitors()
            .subscribe(visitors => this.visitors = visitors);
    }

    selectVisitor(visitor: Visitor) {
        this.selectedVisitor = visitor;
    }

}