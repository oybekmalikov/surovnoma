import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AdminsService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./model/admin.model";

@Controller("admins")
export class AdminsController {
	constructor(private readonly adminsService: AdminsService) {}
	@ApiOperation({ summary: "Add Admin" })
	@ApiResponse({ status: 201, description: "Create Admin", type: Admin })
	@Post()
	create(@Body() createAdminDto: CreateAdminDto) {
		return this.adminsService.create(createAdminDto);
	}
	@ApiOperation({ summary: "Get All Admins" })
	@ApiResponse({ status: 200, description: "List of Admins", type: [Admin] })
	@Get()
	findAll() {
		return this.adminsService.findAll();
	}
	@ApiOperation({ summary: "Get One Admin By Id" })
	@ApiResponse({ status: 200, description: "Admin's info", type: Admin })
	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.adminsService.findOne(+id);
	}
	@ApiOperation({ summary: "Update Admin By Id" })
	@ApiResponse({
		status: 200,
		description: "Admin's updated info",
		type: [Admin],
	})
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
		return this.adminsService.update(+id, updateAdminDto);
	}
	@ApiOperation({ summary: "Delete One Admin By Id" })
	@ApiResponse({ status: 200, description: "Return Effected", type: Number })
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.adminsService.remove(+id);
	}
}
