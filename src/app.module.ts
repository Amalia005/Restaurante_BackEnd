// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
// import { OrdersModule } from './orders/orders.module'; // <- lo usaremos después
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [
    // Variables de entorno (.env)
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // opcional, pero así dejamos claro que usa este archivo
    }),

    // Conexión a MongoDB
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),

    // Módulos de la aplicación
    AuthModule,
    UsersModule,
    MenuModule,
    DishesModule,
    // OrdersModule, // cuando creemos el módulo de pedidos lo descomentamos
  ],
})
export class AppModule {}
