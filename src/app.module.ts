import { ConfigModule } from '@nestjs/config';
import { Module } from "@nestjs/common";
import { AdminsModule } from "./admin/admin.module";
import { Admin } from "./admin/model/admin.model";
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
	imports: [
		ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
		SequelizeModule.forRoot({
			dialect: "postgres",
			port: Number(process.env.PG_PORT),
			host: process.env.PG_HOST,
			username: process.env.PG_USER,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DB,
			models: [Admin],
			autoLoadModels: true,
			sync: { alter: true },
			logging: false,
		}),
		AdminsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
