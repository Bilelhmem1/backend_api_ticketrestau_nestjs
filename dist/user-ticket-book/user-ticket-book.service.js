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
exports.UserTicketBookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_ticket_book_entity_1 = require("./entities/user-ticket-book.entity");
let UserTicketBookService = class UserTicketBookService {
    constructor(userticketBookRepository) {
        this.userticketBookRepository = userticketBookRepository;
    }
    async getListc() {
        return await this.userticketBookRepository.find();
    }
    async addorder(userticketBook) {
        return await this.userticketBookRepository.save(userticketBook);
    }
    async updateorder(id, userticketBook) {
        const newUserTicket = await this.userticketBookRepository.preload({
            id,
            ...userticketBook
        });
        if (!newUserTicket) {
            throw new common_1.NotFoundException(`userTicketBook d'id ${id} n'existe pas`);
        }
        return this.userticketBookRepository.save(newUserTicket);
    }
    async findOrdersByDate(date) {
        return this.userticketBookRepository.find({
            where: {
                createAt: date,
            },
        });
    }
    async delete(id) {
        return await this.userticketBookRepository.delete(id);
    }
    async getTotalByMonth(year, month) {
        const transactions = await this.userticketBookRepository
            .createQueryBuilder('transaction')
            .where('YEAR(transaction.createAt) = :year', { year })
            .andWhere('MONTH(transaction.createAt) = :month', { month })
            .getMany();
        return transactions.reduce((total, transaction) => total + transaction.payed_amount, 0);
    }
    async getTotalByYear(year) {
        const transactions = await this.userticketBookRepository
            .createQueryBuilder('transaction')
            .where('YEAR(transaction.createAt) = :year', { year })
            .getMany();
        return transactions.reduce((total, transaction) => total + transaction.payed_amount, 0);
    }
};
exports.UserTicketBookService = UserTicketBookService;
exports.UserTicketBookService = UserTicketBookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_ticket_book_entity_1.UserTicketBookEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserTicketBookService);
//# sourceMappingURL=user-ticket-book.service.js.map