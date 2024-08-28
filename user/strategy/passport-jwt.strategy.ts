import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PayloadInterface } from '../interface/payload.interface';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private  configService: ConfigService,
    @InjectRepository(UserEntity)
    private  userRepository: Repository<UserEntity>,
  ) {
    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:'jsqgdksgfgdksg', // Ensure the correct environment variable key is used
    });

    
  }

  async validate(payload: PayloadInterface): Promise<UserEntity> {
    // Affichage du payload pour le débogage
    console.log(payload);
  
    // Recherche de l'utilisateur dans la base de données par email
    const user = await this.userRepository.findOne({
      where: { email: payload.email }, // Utilisation correcte de l'option where
    });
  
    // Si l'utilisateur est trouvé, les champs sensibles sont supprimés et l'utilisateur est retourné
    if (user) {
      delete user.salt;
      delete user.password;
      return user;
    } else {
      // Si l'utilisateur n'est pas trouvé, une exception Unauthorized est levée
      throw new UnauthorizedException('Utilisateur non autorisé');
    }
  }
  
}
