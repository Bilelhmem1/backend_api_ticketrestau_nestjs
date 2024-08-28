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
exports.TicketBookController = void 0;
const common_1 = require("@nestjs/common");
const ticket_book_service_1 = require("./ticket-book.service");
const add_ticketBook_Dto_1 = require("./Dto/add-ticketBook.Dto");
const update_ticketBook_Dto_1 = require("./Dto/update-ticketBook.Dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_gurad_1 = require("../user/gurads/jwt-auth.gurad");
let TicketBookController = class TicketBookController {
    constructor(ticketBookService) {
        this.ticketBookService = ticketBookService;
    }
    async getList() {
        return await this.ticketBookService.getList();
    }
    async addTicketBook(addticket) {
        return await this.ticketBookService.addTicketBook(addticket);
    }
    async updateTicketBookByid(updatetic, id) {
        return await this.ticketBookService.updateTicketBookByid(id, updatetic);
    }
    async Updateticket(updateObject) {
        const { updateCriteria, UpdateTicketBookDto } = updateObject;
        return await this.ticketBookService.Updateticket(updateCriteria, UpdateTicketBookDto);
    }
    async delete(id) {
        return await this.ticketBookService.deleteTicketBook(id);
    }
};
exports.TicketBookController = TicketBookController;
__decorate([
    (0, common_1.Get)('getList'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketBookController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)('addTicketBook'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_ticketBook_Dto_1.AddTicketBookDto]),
    __metadata("design:returntype", Promise)
], TicketBookController.prototype, "addTicketBook", null);
__decorate([
    (0, common_1.Patch)('updateTicketBookById/:id'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_ticketBook_Dto_1.UpdateTicketBookDto, Number]),
    __metadata("design:returntype", Promise)
], TicketBookController.prototype, "updateTicketBookByid", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketBookController.prototype, "Updateticket", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_gurad_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketBookController.prototype, "delete", null);
exports.TicketBookController = TicketBookController = __decorate([
    (0, swagger_1.ApiTags)('TicketBook'),
    (0, common_1.Controller)('ticket-book'),
    __metadata("design:paramtypes", [ticket_book_service_1.TicketBookService])
], TicketBookController);
//# sourceMappingURL=ticket-book.controller.js.map