import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AdminsController } from "./admin.controller";
import { AdminsService } from "./admin.service";
import { Admin } from "./model/admin.model";

@Module({
	imports: [SequelizeModule.forFeature([Admin])],
	controllers: [AdminsController],
	providers: [AdminsService],
	exports: [AdminsService],
})
export class AdminsModule {}
