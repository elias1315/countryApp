import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

//type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania'; // tipo extricto cuando son solo esas consultas

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent implements OnInit{

  public countries : Country [] = [];
  public regions : Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectionRegion?: Region;
 

  constructor( private countriesServices : CountriesService ){}
   
   ngOnInit(): void {
      this.countries = this.countriesServices.cacheStore.byRegion.countries;
      this.selectionRegion = this.countriesServices.cacheStore.byRegion.region;
   }

   searchByRegion (region : Region):void{

      this.selectionRegion = region;

      this.countriesServices.searchRegion(region)
      .subscribe( countries => {
         this.countries = countries;
      });
   }


}
