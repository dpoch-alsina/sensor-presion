import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

import { Ble

@Injectable({
  providedIn: 'root'
})
export class BLEService {

  constructor(private BLE: BLE) { 

  }
  devices: any = [];
  state: any = false;


  scanDevices() {
    let self: any = this;
    if (!this.state) {
        self.checkAndPromtBluetooth()
        return false;
    }
}

scan() {
  let self = this;
  self.BLE.scan([], 10).subscribe((resp) => {
      if (resp) {
          if (!resp.name) {
              resp.name = "";
          }
          if (!self.checkForItem(resp)) {
              self.devices.push({
                  address: resp.id,
                  name: resp.name ? resp.name : resp.id,
                  signalStrength: resp.rssi
              });
          }
      }
      //self.Events.publish("newdevicefound", resp);
  }, (error) => {
      console.log("error on scan")
  });
}











  stringToBytes(value: string) {
    var array = new Uint8Array(value.length);
    for (var i = 0, l = value.length; i < l; i++) {
        array[i] = value.charCodeAt(i);
     }
     return array.buffer;
 }

 // ASCII only
 bytesToString(arraybuf:number[]) {
  let byteArray = new Uint8Array(arraybuf);
  //var strData = String.fromCharCode.apply(null, );
  //var bl = strData.charCodeAt(0);
    // let bufferData = new Uint8Array(buffer)
    // return String.fromCharCode.apply(null, bufferData);
     //return String.fromCharCode.apply(null, new Uint8Array(buffer));
 }
}
