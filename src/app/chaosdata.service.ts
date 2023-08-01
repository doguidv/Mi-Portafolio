import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class ChaosdataService {
  private decryptedData: any[] = [];

  constructor() {}

  addEncryptedData(encryptedData: string, age: number, name: string) {
    // Almacenar los datos encriptados en decryptedData con la clave "name" (nombre)
    if (encryptedData) {
      this.decryptedData.push({
        id: this.decryptedData.length + 1, // Utilizar el índice correspondiente al registro
        name: name, // Utilizar el nombre ingresado por el usuario
        age: age, // Utilizar la edad ingresada por el usuario
        hash: encryptedData,
      });
    }
  }

  getDecryptedData() {
    return this.decryptedData;
  }

  // Obtener los datos con las claves hasheadas
  getHashedData() {
    return this.decryptedData.map((data) => {
      return {
        ...data,
        hash: CryptoJS.SHA256(data.name).toString(),
      };
    });
  }
}
