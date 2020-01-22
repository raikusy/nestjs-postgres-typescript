import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// APP
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// CATS
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { CatsModule } from "./cats/cats.module";

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true
    })
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService]
})
export class AppModule {}
