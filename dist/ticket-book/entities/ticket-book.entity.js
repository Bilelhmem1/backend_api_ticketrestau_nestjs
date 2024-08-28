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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketBookEntity = void 0;
const typeorm_1 = require("typeorm");
const Timestamp_entity_1 = require("../../generic/Timestamp.entity");
const user_ticket_book_entity_1 = require("../../user-ticket-book/entities/user-ticket-book.entity");
let TicketBookEntity = class TicketBookEntity extends Timestamp_entity_1.TimestampEntity {
};
exports.TicketBookEntity = TicketBookEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TicketBookEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true
    }),
    __metadata("design:type", String)
], TicketBookEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TicketBookEntity.prototype, "prix", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_ticket_book_entity_1.UserTicketBookEntity, UserTicketBookEntity => UserTicketBookEntity.id),
    __metadata("design:type", Array)
], TicketBookEntity.prototype, "UserTicketBookEntity", void 0);
exports.TicketBookEntity = TicketBookEntity = __decorate([
    (0, typeorm_1.Entity)('ticket-book')
], TicketBookEntity);
//# sourceMappingURL=ticket-book.entity.js.map