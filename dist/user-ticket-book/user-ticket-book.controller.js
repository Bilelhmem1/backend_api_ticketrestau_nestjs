"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTicketBookController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_ticket_book_service_1 = require("./user-ticket-book.service");
const userTicketBook_entity_Dto_1 = require("./Dto/userTicketBook-entity.Dto");
const update_UserTicket_dto_1 = require("./Dto/update-UserTicket.dto");
const jwt_auth_gurad_1 = require("../user/gurads/jwt-auth.gurad");
let UserTicketBookController = class UserTicketBookController {
    constructor(userTicketBookService) {
        this.userTicketBookService = userTicketBookService;
    }
    async getList() {
        return await this.userTicketBookService.getListc();
    }
    async addTicketBook(adduserticket) {
        return await this.userTicketBookService.addorder(adduserticket);
    }
    async UpdateOrder(UpdateOrder, id) {
        return await this.userTicketBookService.updateorder(id, UpdateOrder);
    }
    async delete(id) {
        return await this.userTicketBookService.delete(id);
    }
    async findAllByDate(date) {
        const parsedDate = new Date(date);
        return this.userTicketBookService.findOrdersByDate(parsedDate);
    }
    async TotalYear(year) {
        return await this.userTicketBookService.getTotalByYear(year);
    }
    async Totalmounth(year, mounth) {
        return await this.userTicketBookService.getTotalByMonth(year, mounth);
    }
};
exports.UserTicketBookController = UserTicketBookController;
__decorate([
    (0, common_1.Get)('getList'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserTicketBookController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userTicketBook_entity_Dto_1.UserTicketBookEntityDto]),
    __metadata("design:returntype", Promise)
], UserTicketBookController.prototype, "addTicketBook", null);
__decorate([
    (0, common_1.Patch)('Modifier/:id'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_UserTicket_dto_1.UpdateUserTicketDto, Number]),
    __metadata("design:returntype", Promise)
], UserTicketBookController.prototype, "UpdateOrder", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserTicketBookController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('find'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserTicketBookController.prototype, "findAllByDate", null);
__decorate([
    (0, common_1.Get)('totalYear/:year'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserTicketBookController.prototype, "TotalYear", null);
__decorate([
    (0, common_1.Get)('totalMounth/:year:mounth'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('year', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('mounth', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserTicketBookController.prototype, "Totalmounth", null);
exports.UserTicketBookController = UserTicketBookController = __decorate([
    (0, swagger_1.ApiTags)('user-ticket-book'),
    (0, common_1.Controller)('user-ticket-book'),
    __metadata("design:paramtypes", [user_ticket_book_service_1.UserTicketBookService])
], UserTicketBookController);
//# sourceMappingURL=user-ticket-book.controller.js.map