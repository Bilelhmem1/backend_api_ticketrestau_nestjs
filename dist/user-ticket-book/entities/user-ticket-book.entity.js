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
exports.UserTicketBookEntity = void 0;
const typeorm_1 = require("typeorm");
const Timestamp_entity_1 = require("../../generic/Timestamp.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const ticket_book_entity_1 = require("../../ticket-book/entities/ticket-book.entity");
let UserTicketBookEntity = class UserTicketBookEntity extends Timestamp_entity_1.TimestampEntity {
};
exports.UserTicketBookEntity = UserTicketBookEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserTicketBookEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserTicketBookEntity.prototype, "payed_amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (UserEntity) => UserEntity.idu),
    __metadata("design:type", user_entity_1.UserEntity)
], UserTicketBookEntity.prototype, "UserEntity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ticket_book_entity_1.TicketBookEntity, (TicketBookEntity) => TicketBookEntity.id),
    __metadata("design:type", ticket_book_entity_1.TicketBookEntity)
], UserTicketBookEntity.prototype, "TicketBookEntity", void 0);
exports.UserTicketBookEntity = UserTicketBookEntity = __decorate([
    (0, typeorm_1.Entity)()
], UserTicketBookEntity);
//# sourceMappingURL=user-ticket-book.entity.js.map