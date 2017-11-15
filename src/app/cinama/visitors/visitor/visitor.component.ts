import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Visitor} from "../visitor.model";

@Component({
  selector: 'visitor',
  templateUrl: './visitor.component.html'
})
export class VisitorComponent {

  @Input()
  visitor: Visitor;

  @Output()
  visitorChanged: EventEmitter<Visitor> = new EventEmitter();

  @Output()
  visitorDeleted: EventEmitter<Visitor> = new EventEmitter();
}
