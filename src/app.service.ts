import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { webhookUrl } from './utils/utils';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  createOrder(data) {
    return this.httpService.post(webhookUrl, data).subscribe({
      complete: () => {
        console.log('completed');
      },
      error: (err) => {
        // you can handle error requests here
      },
    });
  }
}
