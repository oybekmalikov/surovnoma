import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AdminsModule } from "../admin/admin.module";
import { AuthAdminsController } from "./auth_admin.controller";
import { AuthAdminsService } from "./auth_admin.service";

@Module({
	imports: [AdminsModule, JwtModule.register({ global: true })],
	controllers: [AuthAdminsController],
	providers: [AuthAdminsService],
})
export class AuthAdminsModule {}
