import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        example: 'hello@yandex.ru',
        description: 'Email',
    })
    readonly email: string;

    @ApiProperty({
        example: '12345',
        description: 'Пароль',
    })
    readonly password: string;
}
