import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface IUserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreationAttrs> {
    @ApiProperty({
        example: 1,
        description: 'Уникальный идентификатор',
    })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({
        example: 'hello@yandex.ru',
        description: 'Email',
    })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @ApiProperty({
        example: '1234',
        description: 'Пароль',
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @ApiProperty({
        example: false,
        description: 'Забанен пользователь или нет',
    })
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    banned: boolean;

    @ApiProperty({
        example: 'Оскорбление пользователей',
        description: 'Причина бана',
    })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    banReason: string;
}
