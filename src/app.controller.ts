import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/order')
  createOrder(@Body() data) {
    const createdOrder = this.appService.createOrder(data);
    return createdOrder;
  }
}
