import {VisitorService} from "./visitor.service";
import {Observable} from "rxjs";
import {Visitor} from "./visitor.model";
import {HttpClient} from "@angular/common/http";
import Spy = jasmine.Spy;

const mockResponse: Visitor[] = [
  {firstName: "Peter", lastName: "Muster"}
];

describe('Visitor Service Test with Spys', () => {
  describe('the visitor service', () => {
    let service: VisitorService;
    let spy: Spy;

    beforeEach(() => {
      service = new VisitorService(null);
      spy = spyOn(service, 'getAllVisitors').and.returnValue(Observable.of(mockResponse));
    });

    it('should inject the service', () => {
      service.getAllVisitors().subscribe(visitors => {
        expect(visitors).toEqual(mockResponse);
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.count()).toBe(1);
      });
    });
  });

  describe('the visitor service with Http spy', () => {
    let service: VisitorService;
    let spy: Spy;

    beforeEach(() => {
      let http: HttpClient = new HttpClient(null);
      service = new VisitorService(http);
      spy = spyOn(http, 'get').and.returnValue(Observable.of(mockResponse));
    });

    it('should inject the service', () => {
      service.getAllVisitors().subscribe(visitors => {
        expect(visitors).toEqual(mockResponse);
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.count()).toBe(1);
      });
    });
  });
});
