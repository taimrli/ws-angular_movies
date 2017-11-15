import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Visitor} from "./visitor.model";

@Injectable()
export class VisitorService {

  constructor(private http: HttpClient) {
  }

  getAllVisitors() : Observable<Visitor[]> {
    return this.http.get<Visitor[]>("/api/visitors");
  }
}
