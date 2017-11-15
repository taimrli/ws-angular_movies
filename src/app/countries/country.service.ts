import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Country} from "./country.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) {

    }

    getAllCountries(): Observable<Country[]> {
        return this.http.get<Country[]>('/api/countries');
    }
}
