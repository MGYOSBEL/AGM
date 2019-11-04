// More documentation in those websites:
// https://stackblitz.com/edit/angular-google-maps-demo
// https://angular-maps.com/

// You must also add this module to the imports array of your module
// AgmCoreModule.forRoot({
//   // please get your own API key here:
//   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
//   apiKey: 'AIzaSyC926Pd3Hy3uB5m1vsv15Jq4QqPKDPXLUQ'
// })


import { Component, OnInit } from '@angular/core';
import {MouseEvent} from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: Number;
  lng: Number;
  zoom: Number;

  constructor() { 

  }

  ngOnInit() {
    this.zoom = 16;
  
    // initial center position for the map 23.116467, -82.414694
    this.lat = 23.116467;
    this.lng = -82.414694;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
    {
		  lat: 23.116467,
		  lng: -82.414694,
		  label: 'Home',
		  draggable: false
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}



