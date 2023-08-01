import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChaosdataService } from '../chaosdata.service';

@Component({
  selector: 'app-chaos-table',
  templateUrl: './chaos-table.component.html',
  styleUrls: ['./chaos-table.component.scss'],
})
export class ChaosTableComponent implements OnInit, OnDestroy {
  chaosData: any[] = [];
  private intervalId: any;

  constructor(private chaosdataService: ChaosdataService) {}

  ngOnInit() {
    // Iniciar el intervalo para actualizar los datos cada 3 segundos
    this.updateTableWithChaosData();
    this.intervalId = setInterval(() => this.shuffleData(), 3000);
  }

  ngOnDestroy() {
    // Limpiar el intervalo cuando el componente se destruya
    clearInterval(this.intervalId);
  }

  updateTableWithChaosData() {
    // Obtener los datos encriptados del servicio y actualizar la tabla
    const encryptedData = this.chaosdataService.getDecryptedData();
    if (encryptedData) {
      this.chaosData = encryptedData;
    } else {
      // Si no hay datos encriptados, actualizar con datos generados aleatoriamente
      this.generateRandomData();
    }
  }

  generateRandomData() {
    const names = this.chaosdataService
      .getDecryptedData()
      .map((item) => item.name);
    const maxAge = this.chaosdataService
      .getDecryptedData()
      .reduce((max, item) => Math.max(max, item.age), 0);

    this.chaosData = Array.from({ length: 10 }, (_, index) => {
      const randomName = this.shuffleString(
        names[Math.floor(Math.random() * names.length)]
      );
      const randomAge = this.combineAges(index + 1, maxAge);
      return { id: index + 1, name: randomName, age: randomAge };
    });
  }

  shuffleData() {
    this.chaosData.forEach((item) => {
      // Desordenar el nombre
      item.name = this.shuffleString(item.name);

      // Desordenar la edad
      item.age = this.shuffleNumber(item.age);
    });
  }

  combineAges(index: number, maxAge: number): number {
    const middle = Math.ceil(maxAge / 2);
    return index % 2 === 0 ? middle + index / 2 : middle - (index + 1) / 2;
  }

  shuffleString(str: string): string {
    const array = str.split('');
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array.join('');
  }

  shuffleNumber(num: number): number {
    const numString = num.toString();
    const shuffledNumString = this.shuffleString(numString);
    return parseInt(shuffledNumString, 10);
  }
}
