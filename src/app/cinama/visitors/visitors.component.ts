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

  onVisitorChanged(visitor: Visitor) {
    this.visitorService.updateVisitor(visitor)
      .subscribe(visitor => {
        const idx = this.visitors.findIndex(changedVisitor => changedVisitor.id === visitor.id)
        this.visitors[idx] = visitor;
      });
  }

  onVisitorDeleted(visitor: Visitor) {
    this.visitorService.deleteVisitor(visitor)
      .subscribe(() => {
        this.visitors = this.visitors.filter(deletedVisitor => deletedVisitor !== visitor);
        this.selectedVisitor = undefined;
      });
  }
}
