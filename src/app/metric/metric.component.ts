import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { ArgentinaCovidDataService } from '../argentina-covid-data.service'; // Importa el nuevo servicio

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {

  covidData: undefined | any;
  covidArgentinaData: undefined | any;
  selectedDate: string = ''; 
  selectedCases: number | undefined; 
  deaths: number | undefined;
  recovered: number | undefined;

  constructor(
    private covidDataService: CovidDataService,
    private argentinaCovidDataService: ArgentinaCovidDataService // Inyecta el nuevo servicio
  ) { }

  ngOnInit(): void {
    this.getCovidData();
    this.getArgentinaCovidData(); // Llama al método para obtener los datos de Argentina
  }
  getArgentinaCovidData() {
    this.argentinaCovidDataService.getArgentinaCovidData().subscribe(
      (data) => {
        this.covidArgentinaData = data;
      },
      (error) => {
        console.error('Error al obtener datos de COVID-19 en Argentina:', error);
      }
    );
  }
  getCovidData() {
    this.covidDataService.getCovidData().subscribe(
      (data) => {
        this.covidData = data;
      },
      (error) => {
        console.error('Error al obtener datos de COVID-19:', error);
      }
    );
  }

  onSelectDate(event: Event) {
    const selectedDate = (event.target as HTMLSelectElement).value;
    this.selectedDate = selectedDate;
    this.selectedCases = this.covidData.cases[selectedDate];
    this.deaths = this.covidData.deaths[selectedDate];
    this.recovered = this.covidData.recovered[selectedDate];
    console.log(this.recovered, this.deaths, this.selectedCases);
  }

  getCovidDates(): string[] {
    return Object.keys(this.covidData.cases);
  }

}
