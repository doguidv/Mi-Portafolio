import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ChaosdataService } from '../chaosdata.service';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss'],
})
export class NameListComponent {
  names: { name: string; age: number; hash: string }[] = [];
  newName: string = '';
  newAge: number = 0;
  newKey: string = '';
  isLoading: boolean = false;

  constructor(private chaosdataService: ChaosdataService) {}

  addName() {
    if (
      this.newName.trim() !== '' &&
      this.newAge > 0 &&
      this.newKey.trim() !== ''
    ) {
      this.isLoading = true;
      // Simulamos un tiempo de carga de 1.5 segundos antes de agregar el nombre
      setTimeout(() => {
        const hashedKey = CryptoJS.SHA256(this.newKey).toString();
        // Agregar los datos hasheados al servicio junto con la edad y el nombre
        this.chaosdataService.addEncryptedData(
          hashedKey,
          this.newAge,
          this.newName
        );

        this.names.push({
          name: this.newName,
          age: this.newAge,
          hash: hashedKey,
        });
        this.newName = '';
        this.newAge = 0;
        this.newKey = '';
        this.isLoading = false;
      }, 1500);
    }
  }
}
